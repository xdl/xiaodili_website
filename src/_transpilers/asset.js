exports.asset = function(asset_name, env) {
    if (env.url !== 'https://xiaodi.li') {
        return env.url + "/assets/" + asset_name;
    } else {
        return "https://s3.amazonaws.com/xiaodili-assets/" + asset_name;
    }
};
