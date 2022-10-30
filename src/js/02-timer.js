import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { convertMs, addLeadingZero } from './lib';

import 'flatpickr/dist/flatpickr.min.css';

const now = new Date();
let chosenDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: now,
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleChoseDate(selectedDates[0]);
  },
};

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button');

startBtn.disabled = true;

flatpickr(input, options);

startBtn.addEventListener('click', handleStartClick);

function handleChoseDate(date) {
  chosenDate = new Date(date);

  if (now >= chosenDate) {
    Notify.failure('Please choose a date in the future');
    startBtn.disabled = true;
    return;
  } else {
    startBtn.disabled = false;
  }
}

function handleStartClick() {
  startBtn.disabled = true;

  const days = document.querySelector('span[data-days]');
  const hours = document.querySelector('span[data-hours]');
  const minutes = document.querySelector('span[data-minutes]');
  const seconds = document.querySelector('span[data-seconds]');

  let difference = chosenDate - now;
  let nIntervId;

  if (!nIntervId) {
    nIntervId = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    if (difference > 0) {
      const time = convertMs(difference);
      days.textContent = addLeadingZero(time.days);
      hours.textContent = addLeadingZero(time.hours);
      minutes.textContent = addLeadingZero(time.minutes);
      seconds.textContent = addLeadingZero(time.seconds);
      difference -= 1000;
    } else {
      nIntervId = null;
    }
  }
}
