const daysHnyrElements = document.getElementById('days-hnyr');
const hoursHnyrElements = document.getElementById('hours-hnyr');
const minutesHnyrElements = document.getElementById('minutes-hnyr');
const secondsHnyrElements = document.getElementById('seconds-hnyr');
const hnyr = '01 Jan 2023';

function countdown() {
    const hnyrDate = new Date(hnyr);
    const currentDate = new Date();

    const HnyrTotalTime = (hnyrDate - currentDate) / 1000;

    const seconds = Math.floor(HnyrTotalTime) % 60;
    const minutes = Math.floor(HnyrTotalTime / 60) % 60;
    const hours = Math.floor(HnyrTotalTime / 3600) % 24;
    const days = Math.floor(HnyrTotalTime / 3600 / 24);

    daysHnyrElements.innerHTML = formatTime(days);
    hoursHnyrElements.innerHTML = formatTime(hours);
    minutesHnyrElements.innerHTML = formatTime(minutes);
    secondsHnyrElements.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
