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
    }, 1000);

    currentQuestionIndex = 0;
    showQuestion()
}
startBtn.addEventListener("click", function () {
    console.log("my button was clicked")
    countdown()
})

function showQuestion(){
    const question = questions[currentQuestionIndex];
   questionElement.innerText = question.question;
   answerButtonsElement.innerHTML = '';
   question.answers.forEach(answer => {
       const button = document.createElement('button');
       button.innerText = answer.text;
       button.classList.add('btn');
       if (answer.correct){
           button.dataset.correct = answer.correct;
       }
       button.addEventListener('click',selectAnswer);
       answerButtonsElement.appendChild(button);
   })
   }

// create questions with options and a correct answers - Look that up
// look up array of objects
// create a function that populates a set of questions and options
// function that checks the answer 
// end of game function - user submitting their initials look up local storage

