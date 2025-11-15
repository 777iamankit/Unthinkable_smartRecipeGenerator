const dietryPref=document.querySelector('.dietry-pref');
const toggleContent=document.querySelector('.toggle-content');

dietryPref.addEventListener('click',(e)=>{
  e.stopPropagation();
  toggleContent.style.display='block';
})

const options=document.querySelectorAll('.toggle-content li');
options.forEach(num=>{
  num.style.cursor='pointer';
  num.addEventListener('click',()=>{
    dietryPref.textContent=num.textContent;
    toggleContent.style.display='none';
  })
})

document.addEventListener('click',(e)=>{
  toggleContent.style.display="none";
})


