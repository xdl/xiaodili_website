/* Bidirectional, autoincrementing footnotes
 *
 * Usage:
 *
 * {{#ref}}footnote_hashtag | Body of footnote1{{/ref}}
 * {{#ref}}another_footnote | Body of footnote2{{/ref}}
 *
 * {{#footnoteList}}{{/footnoteList}}
 *
 * Transpiles to:
 *
 * <sup><a href="#ref:footnote_hashtag" name="src:footnote_hashtag">[1]</a></sup>
 * <sup><a href="#ref:another_footnote" name="src:another_footnote">[2]</a></sup>
 *
 * <ul class="footnotes">
 *  <li><a href="src:footnote_hashtag" name="ref:footnote_hashtag">1.</a> Body of foonote1</li>
 *  <li><a href="src:another_footnote" name="ref:another_footnote">2.</a> Body of foonote2</li>
 * </ul>
 *
 */

var REF_PREFIX = "ref:"
var SRC_PREFIX = "src:"

var ref = function(text, env) {
    if (!("footnote" in env.page)) { // carve out a footnote configuration object if it doesn't exist
        env.page.footnote = {};
        env.page.footnote.ref_count = 0;
        env.page.footnote.links = [];
    }
    var footnote = text.split("|");
    var name = footnote[0].trim();
    var desc = footnote[1].trim();
    var count = ++env.page.footnote.ref_count;
    env.page.footnote.links.push([name, desc]);
    return `<sup><a href="#${REF_PREFIX + name}" name="${SRC_PREFIX + name}">[${count}]</a></sup>`;
};

var footnoteList = function(_, env) {
    var footnotes = "<ul class='footnotes'>";
    for (var i = 0; i < env.page.footnote.links.length; i++) {
        var footnote = env.page.footnote.links[i];
        var name = footnote[0];
        var desc = footnote[1];
        footnotes += `<li><a href="#${SRC_PREFIX + name}" name="${REF_PREFIX + name}">${i + 1}.</a> ${desc}</li>`;
    }
    footnotes += "</ul>";
    return footnotes;
};

exports.footnoteList = footnoteList;
exports.ref = ref;
