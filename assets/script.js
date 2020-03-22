const startDiv = document.getElementById('Start');
const timerDiv = document.getElementById('Timer');

var timer;
var currentCountDown;

document.getElementById('startBtn').addEventListener('click', () => {
    startDiv.classList.add('hidden');
    timerDiv.classList.remove('hidden');
    startTimer();
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timer);
    startDiv.classList.remove('hidden');
    timerDiv.classList.add('hidden');
});

function startTimer(){
    currentCountDown = 20;
    timer = setInterval(timer, 1000);
}

function timer(){
    currentCountDown--;
    document.getElementById('countDown').textContent = currentCountDown;
    if(currentCountDown <= 0){
        clearInterval(timer);
    }
}

