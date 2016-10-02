var $quiz;
var $quiz_submission;
var $quiz_submit_button;
var $quiz_retake_button;
var $quiz_feedback;
var $houses;
var $questions;

var GRYFFINDOR = "gryffindor";
var RAVENCLAW = "ravenclaw";
var SLYTHERIN = "slytherin";
var HUFFLEPUFF = "hufflepuff";
var NUM_HOUSES = 4;

var giveIncompleteFeedback = function(unanswered, quiz_feedback_dom) {
    quiz_feedback_dom.innerHTML = constructFeedbackString(unanswered);
};

var constructFeedbackString = function(unanswered) {
    var unanswered_string = unanswered.map(function(elem) {
        var question = elem + 1;
        return 'Q' + question;
    }).join(", ");
    return 'Quiz incomplete - answer ' + unanswered_string;
};

var determineHouse = function(house_scores) {
    var max_score = 0;
    for (var key in house_scores) {
        if (house_scores[key] > max_score) {
            max_score = house_scores[key];
        }
    }
    if (house_scores.G === max_score) {
        return GRYFFINDOR;
    } else if (house_scores.R === max_score) {
        return RAVENCLAW;
    } else if (house_scores.S === max_score) {
        return SLYTHERIN;
    } else {
        return HUFFLEPUFF;
    }
};

var showHouse = function(house) {
    var house_index_map = {};
    house_index_map[GRYFFINDOR] = 0;
    house_index_map[SLYTHERIN] = 1;
    house_index_map[HUFFLEPUFF] = 2;
    house_index_map[RAVENCLAW] = 3;

    var house_index = house_index_map[house];
    for (var i = 0; i < NUM_HOUSES; i++) {
        if (i == house_index) {
            $houses[i].style.display = 'block';
        } else {
            $houses[i].style.display = 'none';
        }
    }
}

var isValidHouse = function(hash) {
    return (hash === GRYFFINDOR || hash === SLYTHERIN || hash === HUFFLEPUFF || hash === RAVENCLAW);
};

// house is already validated
var redirectToHouse = function(house) {
    $quiz_submission.style.display = 'none';
    $quiz.style.display = 'none';
    $quiz_retake_button.style.display = 'inline-block';
    window.location.hash = house;
    showHouse(house);
};

var quizRetakeClicked = function() {
    window.location = window.location.href.split('#')[0];
};


var quizSubmitClicked = function(elem) {

    var questionsDomToChoices = function(questions_dom) {
        var getSelectedIndex = function(quiz_options) {
            var selected_index;
            for (var i = 0; i < quiz_options.length; i++) {
                var quiz_option = quiz_options[i];
                if (quiz_option.checked === true) {
                    selected_index = i;
                }
            }
            return selected_index;
        };
        var selected_indices = [];
        for (var i = 0; i < questions_dom.length; i++) {
            var question_dom = questions_dom[i];
            selected_indices.push(getSelectedIndex(question_dom));
        }
        return selected_indices;
    };

    var markQuiz = function(answer_keys, choices, quiz_feedback_dom) {
        var house_scores = {
            'G': 0,
            'R': 0,
            'S': 0,
            'H': 0
        };
        var unanswered = [];
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            var answer_key = answer_keys[i];
            if (typeof(choice) !== "undefined") {
                house_points = answer_key[choice];
                for (var j = 0; j < house_points.length; j++) {
                    var house = house_points[j];
                    house_scores[house]++;
                }
            } else {
                unanswered.push(i);
            }
        }
        if (unanswered.length === 0) {
            var house = determineHouse(house_scores);
            redirectToHouse(house);
        } else {
            giveIncompleteFeedback(unanswered, quiz_feedback_dom);
        }
    };

    var answer_keys = JSON.parse(elem.target.getAttribute('data-answer-keys'));
    var choices = questionsDomToChoices($questions);
    markQuiz(answer_keys, choices, $quiz_feedback);
};

var loadAllAnswers = function() {
    for (var i = 0; i < $questions.length; i++) {
        var $question = $questions[i];
        var question_option = $question[0];
        question_option.checked = true;
    }
};

//fast and dirty quiz submission development
var loadPartialAnswers = function() {
    for (var i = 1; i < $questions.length; i++) {
        var $question = $questions[i];
        var question_option = $question[0];
        question_option.checked = true;
    }
};

var hideHouses = function() {
    for (var i = 0; i < $houses.length; i++){
        var $house = $houses[i];
        $house.style.display = 'none';
    }
};

var checkHash = function() {
    var hash = window.location.hash.slice(1);
    var footnote_prefix_check = hash.slice(0,3);
    if (footnote_prefix_check == "src" || footnote_prefix_check == "ref") {
    }
    else if (isValidHouse(hash)) {
        redirectToHouse(hash);
    } else {
        window.location.hash = '';
        $quiz_retake_button.style.display = 'none';
    }
}

window.onload = function() {
    //initialising the DOM elements of interest
    $quiz = document.getElementById('quiz');
    $quiz_submission = document.getElementById('quiz_submission');
    $quiz_submit_button = document.getElementById('quiz_submit');
    $quiz_retake_button = document.getElementById('quiz_retake');
    $quiz_feedback = document.getElementById('quiz_feedback');
    $houses = document.getElementsByClassName('house');
    $questions = document.getElementsByClassName('quiz_options');

    $quiz_submit_button.addEventListener("click", quizSubmitClicked);
    $quiz_retake_button.addEventListener("click", quizRetakeClicked);

    hideHouses();
    //checking for hash

    checkHash();
    window.onhashchange = checkHash;
    //speed up devving:
    //loadPartialAnswers();
    //loadAllAnswers();
};

// G:14 R:15 S:12 H:13
