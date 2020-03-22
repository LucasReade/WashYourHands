const startDiv = document.getElementById('Start');
const timerDiv = document.getElementById('Timer');

var timerid;
var currentCountDown;

document.getElementById('startBtn').addEventListener('click', () => {
    startDiv.classList.add('hidden');
    timerDiv.classList.remove('hidden');
    startTimer();
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timerid);
    startDiv.classList.remove('hidden');
    timerDiv.classList.add('hidden');
});

function startTimer(){
    currentCountDown = 20;
    document.getElementById('countDown').textContent = currentCountDown;
    timerid = setInterval(timer, 1000);
}

function timer(){
    currentCountDown--;
    document.getElementById('countDown').textContent = currentCountDown;
    if(currentCountDown <= 0){
        clearInterval(timerid);
    }
}

