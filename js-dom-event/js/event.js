console.log('this is seperated fild')

function add(){
    document.body.style.backgroundColor = 'green'
}

const makeBlueButton =document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;

function makeBlue(){
    document.body.style.backgroundColor ='blue';
}