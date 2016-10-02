var path = require('path');
var fs = require('fs');
var Mustache = require('mustache');

//
var getCwd = function(env) {
    var parents = [];
    var visiting = env.page.parent;
    while (visiting !== null) {
        parents.push(visiting.name);
        visiting = visiting.parent;
    }
    return path.join.apply(this, parents.reverse());
};

var getRootDir = function(env) {
    return env.root;
};

/**

caveats:
 
* only does the _includes dir at origin (root)
* only does html (no markdown)
* have to pass in env.transpilers, because it's in the layout stage that this gets invocated, where transpilers aren't hoisted up to the top level

not sure how tidy it would be to hack out the same behaviour as _transpilers and _layouts

Oh... I see why it didn't work. The env object is passed around by reference...

**/
exports.include = function(include_name, env) {
    var include_dir = path.join(getRootDir(env), "_includes");
    var extension = ".html";
    var include_file = path.join(include_dir, include_name + extension);
    var include_contents = fs.readFileSync(include_file, "utf-8");
    var hoistKey = env.helpers.hoistKey;
    return Mustache.render(include_contents, hoistKey(hoistKey(env, 'transpilers'), 'page'));
};
