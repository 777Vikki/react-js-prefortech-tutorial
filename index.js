let data = '';
let currentIndex = 0;
let cursorColor = 'white';
function readTextFile(file)
{
    fetch(file).then(response => response.text()).then(d => {
        data = d;
    })
}

window.addEventListener('keydown', () => {
    cursorColor = 'rgb(37 128 0)'
    let detail = document.getElementById('code');
    if(currentIndex-3 < data.length) {
        detail.innerHTML = data.substring(0, currentIndex+3);
        currentIndex += 3;
    } else {
        detail = data;
    }
})

readTextFile('./data.txt');

setInterval(() => {
    document.getElementById('cursor').style.color = 'transparent';
}, 500);

setInterval(() => {
    document.getElementById('cursor').style.color = cursorColor;
}, 1000);