var marked = require('marked');
var Mustache = require('mustache');
var QUIZ_ID_PREFIX = "quiz_opt";

//tokens → {question_texts: [string], options: [string], answer_key: [[char]]}
var tokensToDataStructures = function(tokens) {
    var question_texts = [];
    var options_answers = [];
    for (var i = 0, len = tokens.length; i < len; i++) {
        var token = tokens[i];
        if (token.type == 'paragraph') {
            question_texts.push(token.text);
        }
        else if (token.type == 'text') {
            options_answers.push(token.text);
        }
    }
    //splitting option into text and answer:
    var options = [];
    var answer_key = [];
    for (var i = 0, len = options_answers.length; i < len; i++) {
        var option_answer = options_answers[i].split(" #");
        var option = option_answer[0];
        var answer = option_answer.slice(1);
        options.push(option);
        answer_key.push(answer);
    }

    return {
        question_texts: question_texts,
        options: options,
        answer_key: answer_key
    };
};

//{question_texts: [string], options: [string], answer_key: [[char]]} → string
var dataStructuresToHtml = function(ds, quiz) {
    var question_texts = ds.question_texts;
    var options = ds.options;
    var html = "<div class='quiz'>";

    quiz.num_questions++;
    var question_text = `<b>${quiz.num_questions}.</b> ${question_texts[0]}`;
    html += `<p>${question_text}</p>`;

    for (var i = 1, len = question_texts.length; i < len; i++) {
        question_text = question_texts[i];
        html += `<p>${question_text}</p>`;
    }
    html += "<form class='quiz_options'>";
    for (var i = 0, len = options.length; i < len; i++) {
        var option = options[i];
        var quiz_id = QUIZ_ID_PREFIX + quiz.current_option_id;
        html += `<input type='radio' name='choice' id='${quiz_id}'/><label for='${quiz_id}'>${option}</label><br/>`;
        quiz.current_option_id++;
    }
    html += "</form>";
    html += "</div>";
    return html;
};

//→ void
var recordAnswer = function(answer_key, quiz) {
    quiz.answer_keys.push(answer_key);
};

var quiz = function(text, env) {
    if (!("quiz" in env.page)) { // carve out a quiz configuration object if it doesn't exist
        env.page.quiz = {};
        env.page.quiz.answer_keys = [];
        env.page.quiz.current_option_id = 1;
        env.page.quiz.num_questions = 0;
    }
    var tokens = marked.lexer(text);
    var ds = tokensToDataStructures(tokens);
    recordAnswer(ds.answer_key, env.page.quiz);
    return dataStructuresToHtml(ds, env.page.quiz);
};

//might as well stick the answer key in here
var quizSubmit = function(text, env) {
    var answer_keys = env.page.quiz.answer_keys;
    var submit_button_html = `<button id='quiz_submit' data-answer-keys='${JSON.stringify(answer_keys)}'>${text}</button>`;
    var feedback_html = "<div id='quiz_feedback'></div>";
    return `<div id='quiz_submission'>${submit_button_html}${feedback_html}</div>`;
};

var quizWrapper = function(text, env) {
    return `<div id='quiz'>${marked(Mustache.render(text, env))}</div>`;
};

var quizRetake = function(text, env) {
    var retake_button_html = "<div class='retake_container'><button id='quiz_retake'>Retake Quiz</button></div>";
    return retake_button_html;
};

exports.quizWrapper = quizWrapper;
exports.quiz = quiz;
exports.quizSubmit = quizSubmit;
exports.quizRetake = quizRetake;
