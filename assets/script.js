var startBtn = document.querySelector("#start"); // target start button
var scoreLink = document.querySelector("#view-high-scores"); // target view high scores link
var timerTime = document.querySelector("#timer");

function startQuiz() {
  timerSet();
  //   for (let i = 70; i > 0; i--) {

  //   }
} // function that starts the quiz

function timerSet() {
  var timerTime = [];
  timerTime.push("70"); //needs to have interval loop created
  document.getElementById("timer").innerHTML = "Time:  " + timerTime;
  console.log(timerTime[0]);
}

// setInterval(function, milliseconds) starts timer when button is clicked, or function starts
// function function() {
//     const d = new Date();
//     document.getElementById("timer") = d.toLocaleTimeString();
//   }

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
