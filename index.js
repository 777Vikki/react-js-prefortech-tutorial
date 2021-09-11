let keyvalue = document.getElementById('keyValue');
let keycode = document.getElementById('keyCode');
let text = document.getElementById('container');
text.innerHTML = '<span> Please press any key of the keyBoard'

document.addEventListener('keydown', (event) => {
    text.innerHTML = `The key pressed is <span class="key">${event.key !== ' ' ? event.key : 'SPACE'}</span> and the Key Code is <span class="key">${event.which | event.keyCode}</span>`;
})