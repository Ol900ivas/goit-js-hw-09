import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  calendar: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysCounter: document.querySelector('[data-days]'),
  hoursCounter: document.querySelector('[data-hours]'),
  minutesCounter: document.querySelector('[data-minutes]'),
  secondsCounter: document.querySelector('[data-seconds]'),
};

let selectedDate = new Date();
const diff = selectedDate - Date.now();
let intervalId = null;

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');

    } else {
      selectedDate = selectedDates[0];
      refs.startBtn.disabled = false;
    }
      
  },
};

const fp = flatpickr('#datetime-picker', options);

function onStartTimer() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(countTimer, 1000);
}

function countTimer() {
  const diff = selectedDate - Date.now();
  if (diff <= 0) {
    clearInterval(intervalId);
  } else {
    const { days, hours, minutes, seconds } = convertMs(diff);

    refs.daysCounter.textContent = addLeadingZero(days);
    refs.hoursCounter.textContent = addLeadingZero(hours);
    refs.minutesCounter.textContent = addLeadingZero(minutes);
    refs.secondsCounter.textContent = addLeadingZero(seconds);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}



