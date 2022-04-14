var timerEl = document.querySelector("#timer-span");

var startEl = document.querySelector("#start-button");
var timer = 60
startEl.addEventListener("click", function () {
    timerEl.innerHTML = timer
   var interval = setInterval(() => {
       if (timer === 0){
           clearInterval(interval)
           return
       }
        timer--
        timerEl.innerHTML = timer

    }, 1000);
})
// Once the timer starts a question appears
// attach a click event to the answers and when clicked time is taken away if wrong let alone if correct finally new question is presented repeated 10x
// when we reach end (timer equals 0/zero questions remain) present high score form
// on form submission high score and initals are saved to localStorage