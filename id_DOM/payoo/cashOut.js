document.getElementById('btn-cash-out').addEventListener('click', function (event) {
  event.preventDefault();

  const cashOut = getIuputFildValueById('input-cash-out');
  const inputPinNumber = getIuputFildValueById('input-cash-out-pin');
  // console.log(cashOut,'Add money',inputPinNumber);

  if (inputPinNumber === 1111) {
    const blance = getTextFieldValueById('carrent-blance');
    const newBlance = blance - cashOut;
    document.getElementById('carrent-blance').innerText = newBlance;

    const div = document.createElement('div');
    div.classList.add('bg-red-300');
    div.innerHTML = `
      <h4 class="text-2xl font-bold">cash Out </h4>
      <p class="">${cashOut} Money Withdrow .new blance ${newBlance}</p>
      `
    document.getElementById('tersation-section').appendChild(div)

  }
  else {
    alert('Falid to pin and number')
  }


})