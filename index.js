function stopwatchOp() {
    return function (stopWatch) {
        let hr = 0;
        let min = 0;
        let sec = 0;
        return setInterval(() => {
            // increment the sec counter and update the inner HTML of the secs
            sec++;
            if (sec > 59) {
                sec = 0;
                min = min + 1
            }
            if (min > 59) {
                min = 0;
                hr = hr + 1;
            }
            if(stopWatch === 'STOPWATCH1') {
                secSpan1.innerHTML = sec.toString().length == 1 ? '0' + sec.toString() : sec;
                hrSpan1.innerHTML = hr.toString().length == 1 ? '0' + hr.toString() : hr;
                minSpan1.innerHTML = min.toString().length == 1 ? '0' + min.toString() : min;
            } else if(stopWatch === 'STOPWATCH2') {
                secSpan2.innerHTML = sec.toString().length == 1 ? '0' + sec.toString() : sec;
                hrSpan2.innerHTML = hr.toString().length == 1 ? '0' + hr.toString() : hr;
                minSpan2.innerHTML = min.toString().length == 1 ? '0' + min.toString() : min;
            }
        }, 1)
    }
}

let startBtn1 = document.getElementById('start1');
let timmerDiv1 = document.getElementById('timmer1');
let stopBtn1 = document.getElementById('stop1');
let resetBtn1 = document.getElementById('reset1');
let secSpan1 = document.getElementById('sec1');
let hrSpan1 = document.getElementById('hr1');
let minSpan1 = document.getElementById('min1');
let tickingClock1;

let startBtn2 = document.getElementById('start2');
let timmerDiv2 = document.getElementById('timmer2');
let stopBtn2 = document.getElementById('stop2');
let resetBtn2 = document.getElementById('reset2');
let secSpan2 = document.getElementById('sec2');
let hrSpan2 = document.getElementById('hr2');
let minSpan2 = document.getElementById('min2');
let tickingClock2;
let stopwatch1 = stopwatchOp();
let stopwatch2 = stopwatchOp();


startBtn1.addEventListener('click', () => {
    // add the class 'hide' and remove class 'show' over the start button
    startBtn1.classList.remove('show');
    startBtn1.classList.add('hide');
    // add the class 'show' and remove the class 'hide' over timmer div
    timmerDiv1.classList.remove('hide');
    timmerDiv1.classList.add('show');
    tickingClock1 = stopwatch1('STOPWATCH1');
    stopBtn1.addEventListener('click', () => { clearInterval(tickingClock1); })
});
resetBtn1.addEventListener('click', () => {
    if (tickingClock1) {
        clearInterval(tickingClock1);
    }
    secSpan1.innerHTML = '00';
    hrSpan1.innerHTML = '00';
    minSpan1.innerHTML = '00';
    // add the class 'hide' and remove class 'show' over the start button
    startBtn1.classList.remove('hide');
    startBtn1.classList.add('show');
    // add the class 'show' and remove the class 'hide' over timmer div
    timmerDiv1.classList.remove('show');
    timmerDiv1.classList.add('hide');
});



startBtn2.addEventListener('click', () => {
    // add the class 'hide' and remove class 'show' over the start button
    startBtn2.classList.remove('show');
    startBtn2.classList.add('hide');
    // add the class 'show' and remove the class 'hide' over timmer div
    timmerDiv2.classList.remove('hide');
    timmerDiv2.classList.add('show');
    tickingClock2 = stopwatch2('STOPWATCH2');
    stopBtn2.addEventListener('click', () => { clearInterval(tickingClock2); })
});
resetBtn2.addEventListener('click', () => {
    if (tickingClock2) {
        clearInterval(tickingClock2);
    }
    secSpan2.innerHTML = '00';
    hrSpan2.innerHTML = '00';
    minSpan2.innerHTML = '00';
    // add the class 'hide' and remove class 'show' over the start button
    startBtn2.classList.remove('hide');
    startBtn2.classList.add('show');
    // add the class 'show' and remove the class 'hide' over timmer div
    timmerDiv2.classList.remove('show');
    timmerDiv2.classList.add('hide');
})