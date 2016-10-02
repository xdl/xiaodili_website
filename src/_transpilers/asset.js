var PRODUCTION_URL = 'https://xiaodi.li';

exports.asset = function(asset_name, env) {
    if (env.url !== PRODUCTION_URL) {
        return env.url + "/assets/" + asset_name;
    } else {
        return "https://s3.amazonaws.com/xiaodili-assets/" + asset_name;
    }
};
