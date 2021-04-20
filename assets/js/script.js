//variables
//score variables
var playerScore = 0;
var questionIndex = 0;
//DOM varirables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var wrapper = document.querySelector("#wrapper");
var questions = document.querySelector("#questions");
var highscore = document.querySelector("#highscore");
var back = document.querySelector("#back");
var olCreateEl = document.createElement("ol");
var highscore = document.querySelector("#highscore");
var back = document.querySelector("#back");
//timer variables, 15 seconds per questions, 10 second penalty
var timeLeft = 76;
var penalty = 10;
var hold = 0;
//question bank
var questionBank = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "nubmers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within _____."
        choices: ["quotes", "curly brackets", "parentheses", "squarebrackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store _____."
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for use during development and debugging for printing content in to the debugger is:"
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];
//timer
timer.addEventListener("click", function () {
    if (hold === 0) {
        hold = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(hold);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000;)
    }
    generateQuestions(questionBank);
});

//functions

//generate questions
function generateQuestions(questionBank) {
    questions.innerHTML = "";
    olCreateEl.innerHTML = "";
//iteration loop
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionBank].title;
        var userChoices = questions[questionBank].choices;
        questionBank.textContent = userQuestion;
    }
userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionBank.appendChild(olCreateEl);
    olCreateEl.appendChild(listItem);
    listItem.addEventListener("click", (compare));
})
}
//check answer
funcion checkAnswer(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
//correct
    if (element.textContent == questions[questionBank].answer) {
        playerScore++;
        createDiv.textContent = "Correct! The answer is: " + questions[(]questionBank].answer:
        }
//wrong
        else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is: " + questions[questionBank].answer;
            }
    }
questionIndex++;

if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got " + playerScore + "/" + questions.length + "correct!";
}
else {
    generateQuestions.appendChild(createDiv);
     }
}

//all done
function allDone() {
    questionBank.innerHTML = "";
    currentTime.innerHTML - "";
//make header    
    var createAllDoneHeader = document.createElement("h1");
    createAllDoneHeader.setAttribute("id", "createAllDoneHeader");
    createAllDoneHeader.textContent = "All Done!";
    questionBank.appendChild(createAllDoneHeader);
//make paragraph
    var createParagraph = document.createElement("p");
    createParagraph.setAttribute("id", "createParagraph");
    questionBank.appendChild(createParagraph);
//calculate score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var create2ndParagraph = document.createElement("p");
        clearInterval(hold);
        createParagraph.textContent = "Your final score is: " + timeRemaining;
        questionBank.appendChild(create2ndParagraph);
    }
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    questionBank.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id" , "initials");
    createInput.textContent = "";
    questionBank.appendChild(createInput);
//submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";
    questionBank.textContent(createSubmit);

//local storage and listeners
createSubmit.addEventListener("click", function () {
    var initials = createInput.value;
    if (initials === null) {
        console.log("No value entered!");
    }
    else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        }
        else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);

        window.location.replace("./assets/html/highscore.html")
    };

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++); {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highscore.appendChild(createLi);
    }
}
back.addEventListener("click", function() {
    window.location.replace("./index.html");
})});}