var marked = require('marked');

exports.prelude = function(text, env) {
    return `<div class="prelude">${marked(text)}</div>`;
}
