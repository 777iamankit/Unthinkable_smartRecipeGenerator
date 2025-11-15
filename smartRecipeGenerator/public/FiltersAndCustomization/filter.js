const filter=document.querySelector('#filter');
const filterOption=document.querySelector('#filter-option');

filter.addEventListener('click',(e)=>{
  filterOption.style.display='block';
  e.stopPropagation();
})

document.addEventListener('click',(e)=>{
  if (!filterOption.contains(e.target) && !filter.contains(e.target)) {
    filterOption.style.display = 'none';
  }
})


