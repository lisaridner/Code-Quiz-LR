var startBtn = document.getElementById("start-button");
var timer = document.getElementById("game-timer");
var seconds = 10
function countdown() {
    var clock = setInterval(function () {
        seconds--
        timer.textContent = seconds + " Seconds Left "
        if (seconds <=0) {
        clearInterval(clock)    
        }
    }, 1000)
}
startBtn.addEventListener("click", function () {
    console.log("my button was clicked")
    countdown()
})

// create questions with options and a correct answers Look that up
// look up array of objects
// create a function that populates a set of questions and options
// function that checks the answer 
// end of game function - user submitting their initials look up local storage

