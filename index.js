const alarmElm = document.querySelector('.alarm');
const audioElm = document.querySelector('audio');
const ringTime = Number(prompt('Čas v sekundách. Za jak dlouho má minutka zazvonit?')) * 1000
    
const ring = () => {

    alarmElm.classList.add('alarm--ring');
    audioElm.play();
}

const timer = setTimeout(ring, ringTime);

const buttonElm = document.querySelector('.button');

const cancelTimer = () => {
    clearTimeout(timer);
};

buttonElm.addEventListener('click', cancelTimer);