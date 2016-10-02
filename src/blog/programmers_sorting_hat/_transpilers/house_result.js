var marked = require('marked');
var Mustache = require('mustache');

exports.house = function(text, env) {
    return `<div class="house">${marked(text)}</div>`;
};

exports.otherHouses = function(house_to_exclude, env) {
    var GRYFFINDOR_MD = "* [Gryffindor]({{url}}/blog/programmers_sorting_hat/#gryffindor)";
    var RAVENCLAW_MD = "* [Ravenclaw]({{url}}/blog/programmers_sorting_hat/#ravenclaw)";
    var SLYTHERIN_MD = "* [Slytherin]({{url}}/blog/programmers_sorting_hat/#slytherin)";
    var HUFFLEPUFF_MD = "* [Hufflepuff]({{url}}/blog/programmers_sorting_hat/#hufflepuff)";
    var OTHER_HOUSES_MD = ["Roads not taken:", "", GRYFFINDOR_MD, RAVENCLAW_MD, SLYTHERIN_MD, HUFFLEPUFF_MD];
    var houseToIndexMD = {
        gryffindor: 2,
        ravenclaw: 3,
        slytherin: 4,
        hufflepuff: 5
    };
    OTHER_HOUSES_MD.splice(houseToIndexMD[house_to_exclude], 1);
    var markdown_res = OTHER_HOUSES_MD.join('\n');
    return marked(Mustache.render(markdown_res, env));
};
