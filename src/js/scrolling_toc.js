// This is all heavily inspired off the scrolling ToC from http://stevelosh.com/media/js/sjl.js
//
// TODO: 
// Separate out the bookmarking from the ToC?

FONT_LOAD_GRACE = 500;
OFFSET = 20;
ACTIVATION_WIDTH_THRESHOLD = 900 + 220;

var BOOKMARK_HTML = function(mark) {
     return "<div class='bookmark'><div class='ribbon'><div class='mark'>" + mark + "</div></div></div></div>";
};
var SCROLLING_BOOKMARK_HTML = function(mark) {
    return "<code class='mark'>" + mark + "</code>";
};

//[heading] → tree, array
var headingsToDataStructures = function(headings) {
    var selectHeadingIdWithJquery = function(heading_id) {
        var heading_selector = '#' + heading_id;
        return $(heading_selector);
    };

    var headingToTreeNode = function(heading) {
        var id = heading.target;
        var $heading = selectHeadingIdWithJquery(id);
        return {
            id: id,
            $target: $heading,
            $self: null,
            parent: null,
            children: []
        };
    };

    var headingToBucketNode = function(heading) {
        var id = heading.target;
        var $heading = selectHeadingIdWithJquery(id);
        return {
            id: id,
            $target: $heading,
            y_offset: null
        };
    };

    headings_map = {
        _root: {
            children: [],
            id: "_root",
            parent: null
        }
    };
    var y_bucket = [];

    //initialisation:
    var parent = headings_map._root;
    var previous_id = '_root';
    var heading = headings[0];
    var previous_depth, current_id, current_node;
    if (typeof(heading) !== 'undefined') {
        previous_depth = heading.depth;
        previous_id = heading.target;
        current_node = headingToTreeNode(heading);
        current_node.parent = parent;
        headings_map[previous_id] = current_node;
        headings_map._root.children.push(previous_id);
        y_bucket.push(headingToBucketNode(heading));
    }
    //assume there are no transitions like h2 → h4
    for (var i = 1; i < headings.length; i++) {
        heading = headings[i];
        current_id = heading.target;
        current_node = headingToTreeNode(heading);
        var current_depth = heading.depth;

        var difference = current_depth - previous_depth;
        //descent
        if (difference > 0) {
            parent = headings_map[previous_id];
        } 
        //ascent
        else if (difference < 0) {
            for (var j = difference; j < 0; j++) {
                parent = parent.parent;
            }
        }

        headings_map[current_id] = current_node;
        current_node.parent = parent;
        parent.children.push(current_id);

        y_bucket.push(headingToBucketNode(heading));
        previous_depth = current_depth;
        previous_id = current_id;
    }

    return [headings_map, y_bucket];
};


var TocEventHandler = function(headings, $toc_scrolling, $toc_mainflow) {

    var calculateYOffsets = function(y_bucket) {
        for (var i = 0; i < y_bucket.length; i++) {
            var node = y_bucket[i];
            node.y_offset  = node.$target.position().top;
        }
    };

    //y → id
    var getUpdatedId = function(y, y_bucket) {
        for (var i = 0; i < y_bucket.length; i++) {
            var heading = y_bucket[i];
            var y_offset = heading.y_offset;
            if (y_offset > y + OFFSET) {
                if (i === 0) {
                    return null;
                } else {
                    return y_bucket[i - 1].id;
                }
            }
        }
        return y_bucket[y_bucket.length - 1].id;
    };

    var repositionToc = function($container, $toc) {
        $container.css('left', $toc.first().position().left - 200 - 20);
    };

    var constructDom = function(headings_map, $container, $toc) {
        var addToHeadingsMap = function($heading) {
            var id = $heading.attr('href').slice(1); //skip out the #
            headings_map[id].$self = $heading;
        };
        var traverseTocTree = function($list_elems) {
            $list_elems.each(function() {
                var $this = $(this);
                $this.children().each(function() {
                    var $this = $(this);
                    var tag_type = $this.prop('tagName');
                    if (tag_type === 'A') {
                        addToHeadingsMap($this);
                    } else if (tag_type === 'OL') {
                        traverseTocTree($this.children('li'));
                    }
                });
            });
        };
        $global = $container;
        $container.html($toc.html());
        traverseTocTree($container.children().children('li'));
        repositionToc($container, $toc);
    };
    var normaliseHeading = function(id) {
        headings_map[id].$self.css("font-weight", "normal");
        delete bold_set[id];
    };
    var normaliseAllHeadings = function() {
        for (var id in bold_set) {
            headings_map[id].$self.css("font-weight", "normal");
            delete bold_set[id];
        }
    };
    var boldHeading = function(id) {
        headings_map[id].$self.css("font-weight", "bold");
        bold_set[id] = true;
    };
    var showHeading = function(id) {
        headings_map[id].$self.parent().show();
        delete invisible_set[id];
    };
    var showSiblingHeadings = function(id) {
        var parent = headings_map[id].parent;
        for (var i = 0; i < parent.children.length; i++) {
            var child = headings_map[parent.children[i]];
            child.$self.parent().show();
            delete invisible_set[child.id];
        }
    };
    var showParent = function(id) {
        var parent = headings_map[id].parent;
        if (parent.id !== "_root") {
            parent.$self.parent().show();
            delete invisible_set[parent.id];
        }
    };
    var hideAllHeadings = function() {
        for (var id in headings_map) {
            if (id !== "_root") {
                invisible_set[id] = true;
                headings_map[id].$self.parent().hide();
            }
        }
    };

    var handleTransitionToStart = function() {
        hideAllHeadings();
    };
    var handleTransitionFromStart = function(new_id) {
        handleArtibraryTransition(new_id);
    };
    var handleTransitionToSibling = function(old_id, new_id) {
        normaliseHeading(old_id);
        boldHeading(new_id);
    };
    var handleArtibraryTransition = function(new_id) {
        hideAllHeadings();
        normaliseAllHeadings();
        boldHeading(new_id);
        showHeading(new_id);
        showSiblingHeadings(new_id);
        showParent(new_id);
    };

    var handleHeadingChange = function(old_id, new_id) {
        if (old_id === null) {
            handleTransitionFromStart(new_id);
        } else if (new_id === null) {
            handleTransitionToStart();
        } else if (typeof old_id !== 'undefined' && headings_map[old_id].parent === headings_map[new_id].parent) {
            handleTransitionToSibling(old_id, new_id);
        } else {
            handleArtibraryTransition(new_id);
        }
    };

    var handleScroll = function() {
        if (enabled) {
            var y = $window.scrollTop();
            var updated_id = getUpdatedId(y, y_bucket);
            if (current_id !== updated_id) {
                handleHeadingChange(current_id, updated_id);
                current_id = updated_id;
            }
        }
    };

    var handleResize = function() {
        var width = $window.width();
        var updated_enabled;
        if (width >= ACTIVATION_WIDTH_THRESHOLD) {
            updated_enabled = true;
            calculateYOffsets(y_bucket);
            repositionToc($toc_scrolling, $toc_mainflow);
        } else {
            updated_enabled = false;
        }
        if (enabled !== updated_enabled) {
            if (updated_enabled) {
                $toc_scrolling.show();
            } else {
                $toc_scrolling.hide();
            }
            enabled = updated_enabled;
            if (enabled === true) {
                handleScroll();
            }
        }
    };

    var hy = headingsToDataStructures(headings);
    var headings_map = hy[0];
    var y_bucket = hy[1];
    var current_id;
    var $window = $(window);
    constructDom(headings_map, $toc_scrolling, $toc_mainflow);

    //skip off Set for now in favour of ES5 support
    var bold_set = Object.create(null);
    var invisible_set = Object.create(null);

    var enabled = true;
    //kick it off by resizing to initialise y_offset
    handleResize();
    //in case they come in via a hashlink
    handleScroll();
    return {
        handleScroll: handleScroll,
        handleResize: handleResize,
        headings_map: headings_map,
        getCurrentId: function() {
            return current_id;
        }
    };
};

var BookmarkEventHandler = function(getCurrentId, headings_map) {
    var gotoMark = function(mark) {
        if (mark in bookmarks) {
            location.hash = '';
            location.hash = bookmarks[mark];
            console.log("going to mark ", mark);
        } else {
            console.log("mark not set!");
        }
    };
    var setMark = function(mark) {
        var removeMarkUI = function(heading) {
            var $scrolling_anchor = heading.$self;
            var $heading_target = heading.$target;
            $scrolling_anchor.next().remove();
            $heading_target.next().remove();
        };
        var addMarkUI = function(heading) {
            var $scrolling_anchor = heading.$self;
            var $heading_target = heading.$target;
            $scrolling_anchor.after(SCROLLING_BOOKMARK_HTML(mark));
            $heading_target.after(BOOKMARK_HTML(mark));
        };
        var id = getCurrentId();
        if (id !== null) {
            if (mark in bookmarks) {
                var old_id = bookmarks[mark];
                delete bookmarks[mark];
                var heading = headings_map[old_id];
                removeMarkUI(heading);
            }
            bookmarks[mark] = id;
            addMarkUI(headings_map[id]);
            console.log("mark set!");
        } else {
            console.log("invalid mark register!");
        }
    };
    var evaluateKeys = function(first, second) {
        if (first === 'm' && second !== '`') {
            setMark(second);
        } else if (first === '`' && second !== '`') {
            gotoMark(second);
        }
    };
    var previewKey = function(key) {
    };
    var processKeyPress = function(key) {
        keys.push(key);
        if (keys.length === 1) {
            previewKey(key[0]);
        }
        if (keys.length === 2) {
            evaluateKeys(keys[0], keys[1]);
            keys = [];
        }
    };
    var emptyKeys = function() {
        keys = [];
    };

    var bookmarks = {};
    var allowed_keys = { a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true, k: true, l: true, m: true, n: true, o: true, p: true, q: true, r: true, s: true, t: true, u: true, v: true, w: true, x: true, y: true, z: true, "`": true };
    var keys = [];
    return {
        handleKeypress: function(key) {
            if (key in allowed_keys) {
                processKeyPress(key);
            } else {
                emptyKeys();
            }
        }
    };
};

// Depends on: jQuery
// Depends on: xdl_notes_generator/lib/toc.js
$(function() {
    var headings = $('#toc').data('toc');
    $('body').append("<div id='toc_scrolling' class='toc'></div>");
    var $toc_mainflow = $('#toc_mainflow');
    var $toc_scrolling = $('#toc_scrolling');
    setTimeout(function() {
        var toc_handler = new TocEventHandler(headings, $toc_scrolling, $toc_mainflow);
        $(window).scroll(function() {
            toc_handler.handleScroll();
        });
        $(window).resize(function() {
            toc_handler.handleResize();
        });
        var bookmark_handler = new BookmarkEventHandler(toc_handler.getCurrentId, toc_handler.headings_map);
        $(document).on("keyup", function(e) {
            bookmark_handler.handleKeypress(e.key);
        });
        //$('#toc').after("<div><h2>Blach</h2><div class='bookmark'><div class='ribbon'><div class='mark'>h</div></div></div></div>");
    }, FONT_LOAD_GRACE);
});
