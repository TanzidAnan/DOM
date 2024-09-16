function hendleCard(){
    console.log('button click');
    const heandleChance =document.getElementById('heandle-adds');
    heandleChance.innerText ='Tanzid anan marzan'
    heandleChance.style.fontSize ='30px'
    heandleChance.style.fontWeight =900
}
document.getElementById('add-event-liseaner').addEventListener('click',function(){
const dataChace =document.getElementById('data-chance');
const dataChace1 =document.getElementById('heandle-adds');
dataChace.innerText ='ki data deaoa jai'
dataChace1.innerText ='Tanzid anan marzan'
})


document.getElementById('addButton').addEventListener('click',function(){
    // console.log(45454)
    const inputTextData =document.getElementById('inputButton');
    // console.log(inputTextData.value)
    const defuleTextData =document.getElementById('hendle-text');
    defuleTextData.innerText =inputTextData.value;
    inputTextData.value = "";
 })