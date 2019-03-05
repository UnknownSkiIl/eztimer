function getTimeRamaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        // hours = Math.floor((t / (1000 * 60 * 60)));
        hours = Math.floor((t /1000/60/60) % 24), 
        days = Math.floor((t / (1000*60*60*24)));

    return {
        'total': t,
        'days' : days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id,endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRamaining(endtime),
            d = getNumLength(t.days),
            a = getNumLength(t.hours),
            b = getNumLength(t.minutes),
            c = getNumLength(t.seconds);

        function getNumLength(number) {
            return number.toString().length;
        }

        if (a == 2) {
            hours.textContent = t.hours;
        } else {
            hours.textContent = '0' + t.hours;
        }

        if (b == 2) {
            minutes.textContent = t.minutes;
        } else {
            minutes.textContent = '0' + t.minutes;
        }

        if (c == 2) {
            seconds.textContent = t.seconds;
        } else {
            seconds.textContent = '0' + t.seconds;
        }

        days.textContent = t.days;
        
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
