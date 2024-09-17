let sum =0;
const fastElement =document.getElementById('count');
function clickMe(){
    sum += 1
    if(sum>=0){
        fastElement.innerText =sum
    }
}

document.getElementById('odd-btn').addEventListener('click',function(){
    sum-=1;
    if(sum >=0){
        fastElement.innerText =sum
    }
})