var marked = require('marked');

exports.house = function(text, env) {
    return `<div class="house">${marked(text)}</div>`;
}
