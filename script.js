// //GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


$(document).ready(function() {
//target elements
var challengeContainer = document.getElementById("challenge");
var startButton = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-questions");
var resultsContainer = document.getElementById("results");
var quizOptions = document.getElementById("quiz-options");
var timerEl = document.getElementById("countdown");
var anwserEl = document.getElementById("answer");

//jquery place
var q_text = $("#q_text");
var option_a = $("#option_a");
var option_b = $("#option_b");
var option_c = $("#option_c");
var option_d = $("#option_d");

// THEN a timer starts and I am presented with a question
//timer needs to be decrements count --
 var time_left = 75;

 var count_down;

 // index of current question
 var q_index = 0;

 //must stop timer...should this go here or after the initTimer?
  
function wrapUp()
{
     clearInterval(count_down);
     renderResults();
 }

 function initTimer()
 {
     count_down = window.setInterval(function(){
         time_left--;
         timerEl.innerText = time_left;
 
         if (time_left < 1) {
             wrapUp();
         }
     }, 1000);
 
 }
//renderQuestions for button options
function renderQuestion()
{
    if (q_index >= questionsArr.length) {
        return wrapUp();
    }

    q_text.text(questionsArr[q_index].question);
    option_a.text(questionsArr[q_index]["options"]["optionA"]);
    option_b.text(questionsArr[q_index]["options"]["optionB"]);
    option_c.text(questionsArr[q_index]["options"]["optionC"]);
    option_d.text(questionsArr[q_index]["options"]["optionD"]);
}

function renderResults()
{
    $(quizContainer).addClass('d-none');
    $(resultsContainer).removeClass('d-none');
}


// WHEN I click the start button
// the intro disappears
startButton.addEventListener("click", function() {
    challengeContainer.style.display = "none";
    renderQuizQuestions();
});
});