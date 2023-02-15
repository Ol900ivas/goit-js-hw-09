// import Notiflix from 'notiflix';

// const formEl = document.querySelector(".form");
// const firstDelayEl = document.querySelector('[name="delay"]');
// const delayStepEl = document.querySelector('[name="step"]');
// const amountEl = document.querySelector('[name="amount"]');
// const btnEl = document.querySelector('[type="submit"]');

// console.log(formEl);
// console.log(firstDelayEl);
// console.log(delayStepEl);
// console.log(amountEl);
// console.log(btnEl);

// formEl.addEventListener('click', onClick);

// const firstDelay = firstDelayEl.value;
// const delayStep = delayStepEl.textContent;
// const amount = amountEl.textContent;
//  console.log(firstDelay);
//   console.log(delayStep);



// function onClick(amount) {
//   for (let i = 1; i <= amount; i += 1) {
//     console.log(i);
//     console.log(firstDelay);
//   console.log(delayStep);
//   }
 

// }

// function createPromise1(firstDelay, delayStep) {
//   console.log(firstDelay, delayStep)
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
//   return promise;
// }

// // createPromise(2, 1500)
// //   .then(({ position, delay }) => {
// //     Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //   })
// //   .catch(({ position, delay }) => {
// //     Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
// //   });



// =============================================
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout (() => {
      if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
  }}, delay);
});
};

const formEl = document.querySelector('form');
const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  if (firstDelayEl.value <= 0 || delayStepEl.value <= 0 || amountEl.value <= 0) {
    Notify.failure("Enter a number greater than 0");
    return;
  }
  let delay = Number(firstDelayEl.value);

for (let i = 1; i <= Number(amountEl.value); i += 1) {
  createPromise(i, delay)
  .then(({ position, delay }) => 
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  .catch(({ position, delay }) => 
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
  delay = delay + Number(delayStepEl.value); 

};
}