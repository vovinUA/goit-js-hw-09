const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let intervalId = null;

stopBtn.disabled = true;

function startChangingBackgroundColor() {
if (intervalId) return;

startBtn.disabled = true;
stopBtn.disabled = false;
intervalId = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function stopChangingBackgroundColor() {
clearInterval(intervalId);
intervalId = null;
startBtn.disabled = false;
stopBtn.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener('click', startChangingBackgroundColor);
stopBtn.addEventListener('click', stopChangingBackgroundColor);
