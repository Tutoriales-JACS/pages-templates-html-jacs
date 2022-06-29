
/* globals */

let dateDefined = new Date('2023-06-30'); 


setInterval(() => {
    newDate();
}, 1000);


function newDate(){
    var countDownDate = dateDefined.getTime();
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = days > 0 ? days : '00';
    hours = hours > 0 ? hours : '00';
    minutes = minutes > 0 ? minutes : '00';
    seconds = seconds > 0 ? seconds : '00';
    definedHtmlDate(days, hours, minutes, seconds)
}

function definedHtmlDate(day,hour, minute, second){
    /* definite date in html */

    /* identify of html */
    let dayHTML = document.getElementById('day');
    let hourHTML = document.getElementById('hour');
    let minuteHTML = document.getElementById('minute');
    let secondHTML = document.getElementById('second');
    
    dayHTML.innerHTML= day;
    hourHTML.innerHTML = hour;
    minuteHTML.innerHTML = minute
    secondHTML.innerHTML = second
}
