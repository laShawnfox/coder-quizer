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

//quiz statements
var questionsArr = [
    {
        question: "Arrays in Javascript can be used to store ____.",

        optionA: "1. numbers and strings",
        optionB: "2. other arrays", 
        optionC: "3. boolean", 
        optionD: "4. all of the above",
        correct : "4"
    }, 
    {
        question: "Commonly used data types DO NOT include:",

        optionA: "1. strings", 
        optionB:"2. booleans",
        optionC: "3. alerts", 
        optionD:"4. numbers",
        correct : "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",

        optionA: "1. JavaScript",
        optionB: "2. terminal / bash", 
        optionC: "3. for loops", 
        optionD:"4. console.log",  
        correct :  "4"
    },
    
    {   question: "String values must be enclosed within _____ when being assigned to variables.",

        optionA: "1. commas", 
        optionB:"2. curly brackets", 
        optionC:"3. quotas", 
        optionD:"4. parentheses",
        correct : "3"
    },
];

//target elements
var challengeContainer = document.getElementById("challenge");
var startButton = document.getElementById("start-quiz");
var quizQuestions = document.getElementById("quiz-questions");
var quizOptions = document.getElementById("quiz-options");
var timerEl = document.getElementById("countdown");

//timer
//timer needs to be decrements count --
 var score = 75;
 var timeleft = 0;

// function incorrect() {
//     timeLeft -= 10; 
//     next();
// }


//once user hits start
//goes through loop of questions
function questionsArr() {
   for (var i = 0; i < questionsArr.length; i++){

        //1. Create an element.
        var button = document.createElement("button");
        //2.add content
        button.textContent = availableQuestions[i];
        button.setAttribute("data-value", availableQuestions[i]);
        //3. Append to an existing elememt.
        quizQuestions.append(button);

    }
}
//user chooses from options
//if answer is incorrect display wrong 
//if answer is correct display correct
//move to new questions once correct/wrong is displayed
quizQuestions.addEventListener("click", function(event){  
    if (event.target.matches("button")){
     console.log("wrong answer");
 
}
  });

//once user clicks start
// the intro disappears
startButton.addEventListener("click", function() {
    challengeContainer.style.display = "none";
    renderQuizQuestions();
    // var optionsToDisplay = statements[currentStatement].options;
    // renderAnswerOptions(optionsToDisplay);
});