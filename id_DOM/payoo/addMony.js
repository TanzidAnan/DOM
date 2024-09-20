document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getIuputFildValueById('input-add-money');
    const inputPinNumber =getIuputFildValueById('input-pin-number');
    console.log(addMoney,'Add money',inputPinNumber);
    

})