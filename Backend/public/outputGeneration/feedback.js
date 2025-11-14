 const ratingOverlay=document.querySelector('#ratingOverlay');
  const ratingInput=document.querySelectorAll('.rating input');
 export function feedback(){
    ratingOverlay.style.display= 'flex'; 

    ratingInput.forEach(rate=>{
      rate.addEventListener('change',()=>{
        alert("Rating submitted");
        ratingOverlay.style.display='none';
      })
    })
      }
 


