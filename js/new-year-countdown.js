const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const messageEl = document.getElementById("message"); // Add an element for displaying messages

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

function updateCountdown(now, gap, second, minute, hour, day, d, h, m, s) {
    now = new Date().getTime();
    gap = newYearTime - now;

    second = 1000;
    minute = second * 60;
    hour = minute * 60;
    day = hour * 24;

    if (gap <= 0) {
        messageEl.innerText = "Happy GTA Year!";
        dayEl.innerText = 0;
        hourEl.innerText = 0;
        minuteEl.innerText = 0;
        secondEl.innerText = 0;
    } else {
        d = Math.floor(gap / day);
        h = Math.floor((gap % day) / hour);
        m = Math.floor((gap % hour) / minute);
        s = Math.floor((gap % minute) / second);

        dayEl.innerText = d;
        hourEl.innerText = h;
        minuteEl.innerText = m;
        secondEl.innerText = s;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();
