let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const startPauseButton = document.getElementById('startPauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const lapsElement = document.getElementById('laps');

function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    millisecondsElement.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}

startPauseButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseButton.textContent = 'Start';
    } else {
        timer = setInterval(updateStopwatch, 10);
        startPauseButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
    startPauseButton.textContent = 'Start';
    lapsElement.innerHTML = '';
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = `${minutesElement.textContent}:${secondsElement.textContent}:${millisecondsElement.textContent}`;
        const lapElement = document.createElement('p');
        lapElement.textContent = lapTime;
        lapsElement.appendChild(lapElement);
    }
});
