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


//target elements
var challengeContainer = document.getElementById("challenge");
var startButton = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-questions");
var resultsContainer = document.getElementById("results");
var quizOptions = document.getElementById("quiz-options");
var timerEl = document.getElementById("countdown");

var anwserEl = document.getElementById("answer");


//timer needs to be decrements count --
 var score = 75;
 var timeleft = 0;


//once user clicks start
// the intro disappears
startButton.addEventListener("click", function() {
    challengeContainer.style.display = "none";
    renderQuizQuestions();
});