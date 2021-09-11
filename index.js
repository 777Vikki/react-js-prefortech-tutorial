let startBtn = document.getElementById('start');
let timmerDiv = document.getElementById('timmer');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let secSpan = document.getElementById('sec');
let hrSpan = document.getElementById('hr');
let minSpan = document.getElementById('min');
let hr = 0;
let min = 0;
let sec = 0;
let tickingClock;
startBtn.addEventListener('click',()=>{
    // add the class 'hide' and remove class 'show' over the start button
    startBtn.classList.remove('show');
    startBtn.classList.add('hide');
    // add the class 'show' and remove the class 'hide' over timmer div
    timmerDiv.classList.remove('hide');
    timmerDiv.classList.add('show');
    tickingClock = setInterval(()=>{
        // increment the sec counter and update the inner HTML of the secs
        sec++;
        if(sec>59){
            sec = 0;
            min= min+1
        }
        if(min >59){
            min = 0;
            hr = hr+1;
        }
        secSpan.innerHTML = sec.toString().length == 1? '0'+sec.toString(): sec;
        hrSpan.innerHTML = hr.toString().length == 1? '0'+hr.toString(): hr;
        minSpan.innerHTML = min.toString().length == 1? '0'+min.toString(): min;
    },1000)
    stopBtn.addEventListener('click',()=>{clearInterval(tickingClock);})
});
resetBtn.addEventListener('click',()=>{
    if(tickingClock){
        clearInterval(tickingClock);
    }
     hr = 0;
 min = 0;
 sec = 0;
        secSpan.innerHTML = '00';
        hrSpan.innerHTML = '00';
        minSpan.innerHTML = '00';
// add the class 'hide' and remove class 'show' over the start button
startBtn.classList.remove('hide');
startBtn.classList.add('show');
// add the class 'show' and remove the class 'hide' over timmer div
timmerDiv.classList.remove('show');
timmerDiv.classList.add('hide');
})