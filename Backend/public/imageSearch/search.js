const inputLogo=document.querySelector('.input-logo');
const fileInput=document.querySelector('#fileInput');

inputLogo.addEventListener('click',()=>{
  fileInput.click();
})


// adding image to visible after uploading

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      previewImg.src = e.target.result;
      previewImg.style.display = "block";
    };
    reader.readAsDataURL(file);
  });


  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (e) => {
        
        previewImg.src = e.target.result;
        previewImg.style.display = "block";

        
        const base64Image = e.target.result.split(",")[1];

        
        const res = await fetch("http://localhost:3000/api/process-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image })
        });

        const data = await res.json();

        console.log("INGREDIENTS FROM IMAGE:", data.ingredients);
    };

    reader.readAsDataURL(file);
});