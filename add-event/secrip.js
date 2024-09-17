let sum =0
function clickMe(){
    const fastElement =document.getElementById('count');
    sum += 1
    if(sum>=0){
        fastElement.innerText =sum
    }
}

document.getElementById('odd-btn').addEventListener('click',function(){
    const fastElement =document.getElementById('count');
    sum-=1;
    if(sum >=0){
        fastElement.innerText =sum
    }
})