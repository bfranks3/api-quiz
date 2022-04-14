var startEl = document.querySelector("#start-button");
var timer = 60
startEl.addEventListener("click", function(){
    setTimeout(() => {
        timer--
    }, 1000);
})