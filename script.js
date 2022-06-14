const daysXmasElements = document.getElementById('days-xmas');
const hoursXmasElements = document.getElementById('hours-xmas');
const minutesXmasElements = document.getElementById('minutes-xmas');
const secondsXmasElements = document.getElementById('seconds-xmas');
const xmas = new Date('25 Dec 2022');

function countdown() {
    const xmasDate = new Date(xmas);
    const currentDate = new Date();

    const XmasTotalTime = (xmasDate - currentDate) / 1000;

    const seconds = Math.floor(XmasTotalTime) % 60;
    const minutes = Math.floor(XmasTotalTime / 60) % 60;
    const hours = Math.floor(XmasTotalTime / 3600) % 24;
    const days = Math.floor(XmasTotalTime / 3600 / 24);

    daysXmasElements.innerHTML = formatTime(days);
    hoursXmasElements.innerHTML = formatTime(hours);
    minutesXmasElements.innerHTML = formatTime(minutes);
    secondsXmasElements.innerHTML = formatTime(seconds);  
}

function formatTime(time) {
return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);