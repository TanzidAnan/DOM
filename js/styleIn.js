const sections =document.querySelectorAll('section');
for(const section of sections){
    section.style.border ='2px solid red';
    section.style.margin= '30px';
    section.style.borderRadius ='30px'
    section.style.padding ='30px'
}
console.log(sections)

const containue =document.getElementById('idClass');
containue.style.backgroundColor ='blueviolet';
containue.style.color ='white';


const place =document.getElementById('place-container');
place.classList.add('text-bg');
place.classList.remove('large-text');

const ul =document.createElement('ul');
const li = document.createElement('li')
li.innerHTML='afkjhkjsfdh';
ul.appendChild(li)
console.log(li)
