//variables
var startBtn = document.querySelector("#start");
var scoreLink = document.querySelector("#view-high-scores");
var startDiv = document.getElementById("start-point");
var quizTemplate = document.getElementById("quiz-template");
var quizQuestion = document.getElementById("quiz-question-text");
var quizButton1 = document.getElementById("selection-box-1");
var quizButton2 = document.getElementById("selection-box-2");
var quizButton3 = document.getElementById("selection-box-3");
var quizButton4 = document.getElementById("selection-box-4");
var allDone = document.getElementById("all-done");
let timerTime = [75];
var storeScore = [0];
var correctWrongField = document.getElementById("correct-wrong");
var allDoneText = document.getElementById("all-done-text");
var submitButton = document.getElementById("submit");
var clearBtn = document.getElementById("clear-scores");
var highScores = document.getElementById("high-scores");
var goBackBtn = document.getElementById("go-back");
var headerTag = document.getElementById("header");
const highScoresTable = document.getElementById("high-scores-table");

//timer
function countDown() {
  if (timerTime[0] >= 0 && quizTemplate.style.display == "flex") {
    document.getElementById("timer").innerHTML = "Time:  " + timerTime[0];
    timerTime[0]--;
  } else if (timerTime[0] <= -1) {
    endQuiz();
  }
}
var secondTimer = setInterval(timerSet, 1000);
function timerSet() {
  countDown();
}
function stopTimer() {
  clearInterval(secondTimer);
}

//buttons
function startQuiz() {
  showQuiz();
  hideStart();
  timerSet();
  question1();
}
function clickBtn1() {
  wrongAnswer();
}
function clickBtn2() {
  wrongAnswer();
}
function clickBtn3() {
  if (quizButton3.innerText == "3. Alerts") {
    correctAnswer();
  } else if (quizButton3.innerText == "3. Parentheses") {
    correctAnswer();
  } else if (quizButton3.innerText == "3. Quotes") {
    correctAnswer();
  } else wrongAnswer();
}
function clickBtn4() {
  if (quizButton4.innerText == "4. All of the Above") {
    correctAnswer();
  } else wrongAnswer();
}

function formSubmit() {
  const inputInitials = document.getElementById("initials").value;
  if (inputInitials.length >= 1 && inputInitials.length <= 8) {
    localStorage.setItem(inputInitials, storeScore[0]);
    tableBuilder();
    viewHighScores();
  } else {
    window.alert("Please enter initials (1-8 characters)");
  }
}
function tableBuilder() {
  if (localStorage.length != 0) {
    tableHead();
    tableRows();
  } else tableHead();
}

function tableHead() {
  const tableHeader = document.createElement("tr");
  tableHeader.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";
  if (document.getElementById("high-scores-table").innerHTML == "") {
    highScoresTable.appendChild(tableHeader);
  }
}
function tableRows() {
  let tableObject = { localStorage };
  let tableString = JSON.stringify({ tableObject });
  let tableParse = JSON.parse(tableString);
  const simObject = tableParse.tableObject.localStorage;
  if (
    document.getElementById("high-scores-table").innerHTML ==
    "<tr><th>Name</th><th>Score</th></tr>"
  ) {
    for (let key in simObject) {
      if (simObject.hasOwnProperty(key)) {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML =
          "<tr><th>" +
          `${key}` +
          "</th><th>" +
          `${simObject[key]}` +
          "</th></tr>";
        highScoresTable.appendChild(tableRow);
      }
    }
  }
}
function goBack() {
  location.reload();
}
function clearHighScores() {
  localStorage.clear();
  highScoresTable.innerHTML = "";
  tableHead();
}

//shows answer feedback for 2567 ms
function answerFeedback() {
  correctWrongField.style.display = "flex";
  var fadeTime = setTimeout(fadeFooter, 2567);
  function fadeFooter() {
    correctWrongField.style.display = "none";
  }
}

// questions
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

//  answers functions
function correctAnswer() {
  setTextCorrect();
  answerFeedback();
  addScore();
  if (quizQuestion.innerText == "Commonly used data types DO NOT include:") {
    question2();
  } else if (
    quizQuestion.innerText ==
    "The condition in an if/else statement is enclosed within ____."
  ) {
    question3();
  } else if (
    quizQuestion.innerText == "Arrays in JavaScript can be used to store ____."
  ) {
    question4();
  } else if (
    quizQuestion.innerText ==
    "String values must be enclosed within ____ when being assigned to variables."
  ) {
    endQuiz();
  }
}
function wrongAnswer() {
  setTextWrong();
  answerFeedback();
  timerTime[0] -= 10;
  if (timerTime[0] <= -1) {
    document.getElementById("timer").innerHTML = "Time:  0";
    endQuiz();
  } else {
    document.getElementById("timer").innerHTML = "Time:  " + timerTime[0];
  }
  if (quizQuestion.innerText == "Commonly used data types DO NOT include:") {
    question2();
  } else if (
    quizQuestion.innerText ==
    "The condition in an if/else statement is enclosed within ____."
  ) {
    question3();
  } else if (
    quizQuestion.innerText == "Arrays in JavaScript can be used to store ____."
  ) {
    question4();
  } else endQuiz();
}
function setTextCorrect() {
  correctWrongField.innerText = "Correct!";
}
function setTextWrong() {
  correctWrongField.innerText = "Wrong!";
}
function addScore() {
  storeScore[0] = storeScore[0] + timerTime[0] + 10;
}

// ends the quiz
function endQuiz() {
  stopTimer();
  hideQuiz();
  showAllDone();
  totalScore();
}

// shows score at the end of quiz
function totalScore() {
  allDoneText.innerText = "Your Final Score is " + storeScore[0];
}

// hide and show functions
function hideStart() {
  startDiv.style.display = "none";
}
function showStart() {
  startDiv.style.display = "flex";
}
function showQuiz() {
  quizTemplate.style.display = "flex";
}
function showHeader() {
  headerTag.style.display = "flex";
}
function hideHeader() {
  headerTag.style.display = "none";
}
function hideHighScores() {
  showHeader();
  highScores.style.display = "none";
}
function hideQuiz() {
  quizTemplate.style.display = "none";
}
function showAllDone() {
  allDone.style.display = "flex";
}
function hideAllDone() {
  allDone.style.display = "none";
}

function viewHighScores() {
  hideStart();
  hideAllDone();
  hideQuiz();
  hideHeader();
  correctWrongField.style.display = "none";
  tableBuilder();
  highScores.style.display = "flex";
}

// event listeners
startBtn.addEventListener("click", startQuiz);
scoreLink.addEventListener("click", viewHighScores);
quizButton1.addEventListener("click", clickBtn1);
quizButton2.addEventListener("click", clickBtn2);
quizButton3.addEventListener("click", clickBtn3);
quizButton4.addEventListener("click", clickBtn4);
submitButton.addEventListener("click", formSubmit);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighScores);
