var startBtn = document.querySelector("#start-button"); // target start button
var scoreLink = document.querySelector("#view-high-scores"); // target view high scores link

startQuiz(); // function that starts the quiz
    
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

