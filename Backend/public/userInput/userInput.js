const ingredients = [
  "Tomato",
  "Onion",
  "Garlic",
  "Ginger",
  "Potato",
  "Carrot",
  "Cabbage",
  "Spinach",
  "Broccoli",
  "Capsicum",
  "Chili",
  "Lemon",
  "Coriander",
  "Cumin",
  "Turmeric"
];

const ingredientInput=document.querySelector('#ingredientInput');
const ingredientList=document.querySelector('#ingredientList');
const selectedIngredients=document.querySelector('.selectedIngredients');

ingredientInput.addEventListener("click",()=>{
  ingredientList.textContent="";
  ingredients.forEach(item=>{
    const div=document.createElement('div');
    div.textContent=item;
    ingredientList.appendChild(div);



    div.addEventListener('click',()=>{
    //  console.dir(ingredientInput);
    const ingredientDiv=document.createElement('div');
    ingredientDiv.innerHTML=item;
    selectedIngredients.appendChild(ingredientDiv);
    })
  })
   
})

ingredientInput.addEventListener('keydown',(e)=>{
      if(e.key=='Enter' && ingredientInput.value!=""){
        const ingredientDiv=document.createElement('div');
        ingredientDiv.innerHTML=ingredientInput.value;
        selectedIngredients.appendChild(ingredientDiv);
      }
    })

