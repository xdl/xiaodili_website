var PRODUCTION_URL = 'https://xiaodi.li';
var Mustache = require('mustache');

var dev_res = "<script type='text/javascript' src='{{#asset}}jquery-3.1.1.slim.min.js{{/asset}}'></script>";
var prod_res = "<script src='https://code.jquery.com/jquery-3.1.0.slim.min.js' integrity='sha256-cRpWjoSOw5KcyIOaZNo4i6fZ9tKPhYYb6i5T9RSVJG8='   crossorigin='anonymous'></script>";

var jquery = function(_, env) {
    if (env.url !== PRODUCTION_URL) {
        var hoistKey = env.helpers.hoistKey;
        debugger;
        return Mustache.render(dev_res, hoistKey(hoistKey(env, 'transpilers'), 'page'));
    } else {
        return prod_res;
    }
};

exports.jquery = jquery;
