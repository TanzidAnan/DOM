document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getIuputFildValueById('input-cash-out');
    const inputPinNumber =getIuputFildValueById('input-cash-out-pin');
    // console.log(addMoney,'Add money',inputPinNumber);

    if(inputPinNumber === 1111){
      const blance =getTextFieldValueById('carrent-blance');
      const newBlance =blance - addMoney;
      document.getElementById('carrent-blance').innerText =newBlance;
    }
    else{
        alert('Falid to pin and number')
    }
    

})