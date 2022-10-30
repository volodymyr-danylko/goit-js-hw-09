import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let firstDelay = Number(firstDelayInput.value);
  let delayStep = Number(delayStepInput.value);
  let amount = Number(amountInput.value);

  for (let index = 1; index <= amount; index++) {
    createPromise(index, firstDelay)
      .then(value => {
        Notify.success(
          `✅ Fulfilled promise ${value.position} in ${value.delay}ms`
        );
      })
      .catch(error => {
        Notify.failure(
          `❌ Rejected promise ${error.position} in ${error.delay}ms`
        );
      });

    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
