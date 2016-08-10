/* Blockquote generator
 * 
 * Usage:
 *
     * {{#blockquote}}"You missed one thing, Wiggum... I filled the [bowling] balls with a funnel."|Homer Simpson{{/blockquote}}
 *
 * Transpiles to:
 *
 * <blockquote>
 *   <div class="quote">"You missed one thing, Wiggum... I filled the [bowling] balls with a funnel."</div>
 *   <div class="author">- Homer Simpson</div>
 * </blockquote>
 *
 */

exports.blockquote = function(text, env) {
    var quote, author;
    [quote, author] = text.split("|");
    return `<blockquote><div class="quote">${quote}</div><div class="author">- ${author}</div></blockquote>`;
}
