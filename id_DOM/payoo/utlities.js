function getIuputFildValueById(id){
    const inputValue =document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue)
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber =parseFloat(textValue)
    return textNumber;
}


function showScetionById(id){
    document.getElementById('add-mony-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('tersation-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}