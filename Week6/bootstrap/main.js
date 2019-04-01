var clockHour = document.querySelector(".clock .hour");
var clockMinute = document.querySelector(".clock .minute");
var clockSecond = document.querySelector(".clock .second");
var clockMilli = document.querySelector(".clock .milli");
var clockBig = document.querySelector(".clock .big");

var timerHour = document.querySelector(".timer .hour");
var timerMinute = document.querySelector(".timer .minute");
var timerSecond = document.querySelector(".timer .second");
var timerMilli = document.querySelector(".timer .milli");
var timerToggle = document.querySelector(".timer .toggle");

timerToggle.onclick = updateTill;

var till;

function updateTill() {
    till = new Date().getTime() + 3600000;
}

function updateClock(time) {
    clockMilli.innerHTML = time.getMilliseconds();
    if (clockSecond.innerHTML != time.getSeconds()) {
        clockBig.innerHTML = time;
        clockSecond.innerHTML = time.getSeconds();
        if (clockMinute.innerHTML != time.getMinutes()) {
            clockMinute.innerHTML = time.getMinutes();
            if (clockHour.innerHTML != time.getHours()) {
                clockHour.innerHTML = time.getHours();
            }
        }
    }
}

function updateTimer(time, target) {
    var diff = target - time.getTime();
    timerMilli.innerHTML = diff % 1000;
    var seconds = Math.floor((diff / 1000) % 60);
    if (timerSecond.innerHTML != seconds) {
        timerSecond.innerHTML = seconds;
        var minutes = Math.floor((diff / 1000 / 60) % 60);
        if (timerMinute.innerHTML != minutes) {
            timerMinute.innerHTML = minutes;
            var hours = Math.floor((diff / 1000 / 60 / 60) % 24);
            if (timerHour.innerHTML != hours) {
                timerHour.innerHTML = hours;
            }
        }
    }
}

function updateAll() {
    now = new Date();
    updateClock(now);
    updateTimer(now, till);
}

window.setInterval(updateAll, 1);