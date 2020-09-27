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

//

var challengeContainer = document.getElementById("challenge");
var startButton = document.getElementById("start-quiz");
var answerOptions = document.getElementById("answer-options");

//quiz statements
var statements = [
    {
        Statement: "Arrays in Javascript can be used to store ____."

        answerOptions: "1. numbers and strings", "2. other arrays", "3. boolean", "4. all of the above"

    }, 
    {
        Statement: "Commonly used data types DO NOT include:"

        answerOptions: "1. strings", "2. booleans", "3. alerts", "4. numbers"
   
    }
    {
        Statement: "A very useful tool used during development and debugging for printing content to the debugger is:"

        answerOptions: "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"   
    }
    {
        Statement: "String values must be enclosed within _____ when being assigned to variables."

        answerOptions: "1. commas", "2. curly brackets", "3. quotas", "4. parentheses"
   
    }
]
 //     //
    //     Statement: "Arrays in Javascript can be used to store ____."

    //     optionA: ""

    //     optionB: ""

    //     optionC: ""

    //     optionD: ""
    // },

function renderAnswerOptions() {
    var availableAnswers = ["strings", "booleans", "alerts", "numbers"];

    for (var i = 0; i <availableAnswers.length; i++){
        //1. Create an element.
        var button = document.createElement("button");
        //2.add content
        button.textContent = availableAnswers[i];
        button.setAttribute("data-value", availableAnswers[i]);
        //3. Append to an existing elememt.
        quizOptions.append(button);

    }
}


startButton.addEventListener("click", function() {
    challengeContainer.style.display = "none";
    renderAnswerOptions();
});