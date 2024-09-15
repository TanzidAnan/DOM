const sections =document.querySelectorAll('section');
for(const section of sections){
    section.style.border ='2px solid red';
    section.style.margin= '30px';
    section.style.borderRadius ='30px'
    section.style.padding ='30px'
}
console.log(sections)