import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const calendar = document.getElementById("datetime-picker");
const startBtn = document.querySelector("[data-start]");
const daysCounter = document.querySelector("[data-days]");
const hoursCounter = document.querySelector("[data-hours]");
const minutesCounter = document.querySelector("[data-minutes]");
const secondsCounter = document.querySelector("[data-seconds]");




console.log(calendar);
console.log(startBtn);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr("#datetime-picker", options);


// differens between dates
const currentDate = Date.now();
console.log(currentDate);
const futureDate = new Date("March 16, 2030 14:25:00");
const futureDateNumber = futureDate.getTime();
console.log(futureDateNumber);
const diff = futureDateNumber - currentDate;
console.log(diff);
// check the plus-minuse
// onCheck();

// function onCheck() {
//     if (diff <= 0) {
//     window.alert("Wrong date!");
//     } else window.alert("Ok date!");
//     console.log(calendar.textContent);
// };


// setInterval(onCheck2, 3000);
// function onCheck2() {
//     calendar.textContent = options.onClose();
//     console.log("textContent:", calendar.textContent);
//   };

//     setTimeout() {
// if (calendar.textContent === "") {
//     console.log("Is empty");
//     } else console.log("textContent:", calendar.textContent);
//     }
    

convertMs(diff);

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
console.log(convertMs(diff)); 

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// const date = new Date("March 16, 2030 14:25:00");
// console.log(date);
// console.log(date.setMinutes(50));
// // "Sat Mar 16 2030 14:50:00 GMT+0200"
// console.log(date);
// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"
// console.log(date);