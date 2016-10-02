var PRODUCTION_URL = 'https://xiaodi.li';
var Mustache = require('mustache');

var production_font_res = "<link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css' />\
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' rel='stylesheet' type='text/css' />";

var development_font_res = "<style type='text/css'>\
@font-face {\
    font-family: 'Droid Serif';\
    src: url({{#asset}}DroidSerif.ttf{{/asset}}) format('truetype');\
}\
@font-face {\
    font-family: 'Open Sans';\
    src: url({{#asset}}OpenSans-Regular.ttf{{/asset}}) format('truetype');\
}\
@font-face {\
    font-family: 'Open Sans';\
    src: url({{#asset}}OpenSans-Bold.ttf{{/asset}}) format('truetype');\
    font-weight: bold;\
\
@font-face {\
    font-family: 'Open Sans';\
    src: url({{#asset}}OpenSans-Italic.ttf{{/asset}}) format('truetype');\
    font-weight: italic, oblique;\
}\
</style>";

exports.gfont = function(asset_name, env) {
    if (env.url !== PRODUCTION_URL) {
        var hoistKey = env.helpers.hoistKey;
        return Mustache.render(development_font_res, hoistKey(hoistKey(env, 'transpilers'), 'page'));
    } else {
        return production_font_res;
    }
};
