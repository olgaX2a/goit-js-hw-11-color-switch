import colors from "./colors.js"

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.body
}

const FREQUENCY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

refs.startBtn.addEventListener("click", () => {
    startChangingColor();
    disableStartBtn();
})
refs.stopBtn.addEventListener("click", () => {
    stopChangingColor();
    enableStartBtn();
})

function startChangingColor () {
    intervalId = setInterval(() => {
    setRandomColor();
    }, FREQUENCY);
}
function stopChangingColor() {
    clearInterval(intervalId)
}

function setRandomColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}
function disableStartBtn() {
    refs.startBtn.disabled = true;
}
function enableStartBtn() {
    refs.startBtn.disabled = false;
}
