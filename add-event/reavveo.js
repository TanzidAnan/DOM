let setCount =1
document.getElementById('submit-btn').addEventListener('click',function(){
    const inputFild = document.getElementById('text-area').value;
    const reviwInput =document.getElementById('reviw');
    const p =document.createElement('p');
    p.innerText =setCount + " ."+ inputFild;
    reviwInput.appendChild(p);
    setCount ++;
    document.getElementById('text-area').value ='';
   console.log(inputFild)
})