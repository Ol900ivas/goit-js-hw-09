const refs = {
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]'),
body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;
let isActive = false;


function onStartBtnClick() {
  if (isActive) {
    return;
  }
  isActive = true;
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
                 
  }, 1000);
     
};

function onStopBtnClick() {
  isActive = false;
  clearInterval(intervalId);
     };


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


