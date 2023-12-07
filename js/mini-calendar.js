var monthDisp, weekdayDisp, dayDisp, yeardisp;

monthDisp = document.getElementById('month');
weekdayDisp = document.getElementById('weekday');
dayDisp = document.getElementById('day');
yearDisp = document.getElementById('year');



const currentDate = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const insert = (month, weekday, day, year) => {
    month = currentDate.getMonth(); 
    weekday = currentDate.getDay();
    day = currentDate.getDate();
    year = currentDate.getFullYear();

    monthDisp.innerHTML = (month >= 0 && month <= 11) ? months[month] : 'Error';
    weekdayDisp.innerHTML = (weekday >= 0 && weekday <= 6) ? weekdays[weekday] : 'Error';
    dayDisp.innerHTML = day;
    yearDisp.innerHTML = year;
        
}

insert();




document.getElementsByClassName('calendar')[0].insertAdjacentHTML("afterend", footer);