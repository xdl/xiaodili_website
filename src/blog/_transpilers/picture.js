var Mustache = require('mustache');
/* Img with caption
 * 
 * Usage:
 *
 * {{#picture}}
 * blog/festival_of_code_2016/assets/judging.jpg|Demo-ing a Scratch project on the last day
 * {{/picture}}
 *
 * Transpiles to:
 *
 * <figure class="blog_figure">
 *   <img src="https://xiaodi.li/blog/festival_of_code_2016/assets/judging.jpg"/>
 *   <figcaption>Demo-ing a Scratch project on the last day</figcaption>
 * </figure>
 *
 */

exports.picture = function(src, env) {
    var absolute_src = Mustache.render(src, env);
    return `<figure class="blog_figure"><img src="${absolute_src}"/></figure>`;
}

exports.pictureWithCaption = function(text, env) {
    var src, caption;
    [src, caption] = text.split("|");
    var absolute_src = Mustache.render(src, env);
    return `<figure class="blog_figure"><img src="${absolute_src}"/><figcaption>${caption}</figcaption></figure>`;
}
