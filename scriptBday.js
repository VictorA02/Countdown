const daysBdayElements = document.getElementById('days-bday');
const hoursBdayElements = document.getElementById('hours-bday');
const minutesBdayElements = document.getElementById('minutes-bday');
const secondsBdayElements = document.getElementById('seconds-bday');

const bday = ('05 Apr 2023');

function countdown() {
    const bdayDate = new Date(bday);
    const currentDate = new Date();

    const BdayTotalTime = (bdayDate - currentDate) / 1000;

    const seconds = Math.floor(BdayTotalTime) % 60;
    const minutes = Math.floor(BdayTotalTime / 60) % 60;
    const hours = Math.floor(BdayTotalTime / 3600) % 24;
    const days = Math.floor(BdayTotalTime / 3600 / 24);

    daysBdayElements.innerHTML = formatTime(days);
    hoursBdayElements.innerHTML = formatTime(hours);
    minutesBdayElements.innerHTML = formatTime(minutes);
    secondsBdayElements.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);