import { getRandomHexColor } from './lib';

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let nIntervId;

startBtn.addEventListener('click', handleStartClick);

stopBtn.addEventListener('click', stopTextColor);

function handleStartClick() {
  if (!nIntervId) {
    nIntervId = setInterval(changeBodyColor, 1000);
    startBtn.disabled = true;
  }
}
function stopTextColor() {
  clearInterval(nIntervId);
  startBtn.disabled = false;
  nIntervId = null;
}

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}
