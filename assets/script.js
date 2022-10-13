var startBtn = document.querySelector("#start"); // target start button
var scoreLink = document.querySelector("#view-high-scores"); // target view high scores link
// var timerTime = document.querySelector("#timer");
var startDiv = document.getElementById("start-point");
var quizTemplate = document.getElementById("quiz-template");
var quizQuestion = document.getElementById("quiz-question-text");
var quizButton1 = document.getElementById("selection-box-1");
var quizButton2 = document.getElementById("selection-box-2");
var quizButton3 = document.getElementById("selection-box-3");
var quizButton4 = document.getElementById("selection-box-4");

function startQuiz() {
  timerSet();
  hideStart();
  showQuiz();
  question1();
}

function timerSet() {
  var timerTime = [5];
  setInterval(countDown, 1000);
  function countDown() {
    timerTime--;
    document.getElementById("timer").innerHTML = "Time:  " + timerTime;
  }
}

function hideStart() {
  startDiv.style.display = "none";
}

function showQuiz() {
  quizTemplate.style.display = "flex";
}

function question1() {
  quizQuestion.innerText = "Commonly used data types DO NOT include:";
  quizButton1.innerText = "1. Strings";
  quizButton2.innerText = "2. Booleans";
  quizButton3.innerText = "3. Alerts";
  quizButton4.innerText = "4. Numbers";
}
function question2() {
  quizQuestion.innerText =
    "The condition in an if/else statement is enclosed within ____.";
  quizButton1.innerText = "1. Quotes";
  quizButton2.innerText = "2. Curly Brackets";
  quizButton3.innerText = "3. Parentheses";
  quizButton4.innerText = "4. Square Brackets";
}
function question3() {
  quizQuestion.innerText = "Arrays in JavaScript can be used to store ____.";
  quizButton1.innerText = "1. Numbers and Strings";
  quizButton2.innerText = "2. Other Arrays";
  quizButton3.innerText = "3. Booleans";
  quizButton4.innerText = "4. All of the Above";
}
function question4() {
  quizQuestion.innerText =
    "String values must be enclosed within ____ when being assigned to variables.";
  quizButton1.innerText = "1. Commas";
  quizButton2.innerText = "2. Curly Brackets";
  quizButton3.innerText = "3. Quotes";
  quizButton4.innerText = "4. Parentheses";
}

// function question1()
// creates question and answers, affects the display to show the #quiz-template
// section, records the score or advances the timer, then logs the score and
//  advances to the next question
// function question2()
// function question3()
// function question4()
// advances to the final score section

//
startBtn.addEventListener("click", startQuiz);
