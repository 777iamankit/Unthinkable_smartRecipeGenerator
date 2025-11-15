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

export let finalIngredients=[];

const ingredientInput=document.querySelector('#ingredientInput');
const ingredientList=document.querySelector('#ingredientList');
const selectedIngredients=document.querySelector('.selectedIngredients');

// showing options for ingredients
ingredientInput.addEventListener("click",(e)=>{
  e.stopPropagation();
  ingredientList.style.display="block";
  ingredientList.style.cursor="pointer";
  ingredientList.textContent="";
  ingredients.forEach(item=>{
    const div=document.createElement('div');
    div.textContent=item;
    ingredientList.appendChild(div);


    // adding the ingredients after selecting from options
    div.addEventListener('click',()=>{
    //  console.dir(ingredientInput);
    const ingredientDiv=document.createElement('div');
    ingredientDiv.innerHTML=item;
    finalIngredients.push(item);
    selectedIngredients.appendChild(ingredientDiv);
    })
  })
   
})

ingredientInput.addEventListener('keydown',(e)=>{
      if(e.key=='Enter' && ingredientInput.value!=""){
        const ingredientDiv=document.createElement('div');
        ingredientDiv.innerHTML=ingredientInput.value;
        finalIngredients.push(ingredientInput.value);
        selectedIngredients.appendChild(ingredientDiv);
      }
    })

document.addEventListener('click',(e)=>{
  if(!ingredientList.contains(e.target)){
    ingredientList.style.display="none";
  }
})

// console.log(finalIngredients);
