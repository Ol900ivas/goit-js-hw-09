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
      refs.startBtn.style.backgroundColor = 'transparent';
      refs.stopBtn.style.backgroundColor = 'white';
        
  }, 1000);
     
};

function onStopBtnClick() {
  isActive = false;
  clearInterval(intervalId);
      refs.stopBtn.style.backgroundColor = 'transparent';
      refs.startBtn.style.backgroundColor = 'white';

  };


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
