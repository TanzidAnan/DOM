document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getIuputFildValueById('input-add-money');
    const inputPinNumber =getIuputFildValueById('input-pin-number');
    // console.log(addMoney,'Add money',inputPinNumber);

    if(inputPinNumber === 1111){
      const blance =getTextFieldValueById('carrent-blance');
      const newBlance =blance + addMoney;
      document.getElementById('carrent-blance').innerText =newBlance;

      const p =document.createElement('p');
      p.innerText=`Added ${addMoney} tk. Blance ${newBlance}`
      console.log(p)

    }
    else{
        alert('Falid to pin and number')
    }
    

})