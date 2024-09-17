let setCount =1
document.getElementById('submit-btn').addEventListener('click',function(){
    const inputFild = document.getElementById('text-area').value;
    if(inputFild === undefined){
        console.log(5545)
    }
    const reviwInput =document.getElementById('reviw');
    if(reviwInput === undefined){
        console.log(5454)
    }
    const p =document.createElement('p');
    if(p === undefined){
        console.log(5656)
    }
    p.innerText =setCount + " ."+ inputFild;
    reviwInput.appendChild(p);
    setCount ++;
    document.getElementById('text-area').value ='';
   console.log(inputFild)
})