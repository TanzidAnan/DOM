console.log('this is seperated fild')

function add() {
    document.body.style.backgroundColor = 'green'
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const makeButton = document.getElementById('make-pink');
makeButton.addEventListener('click', makepink)

function makepink() {
    document.body.style.backgroundColor = 'pink'
}

const makeBrown = document.getElementById('make-brown');
makeBrown.addEventListener('click', function () {
    document.body.style.backgroundColor = 'brown'
})