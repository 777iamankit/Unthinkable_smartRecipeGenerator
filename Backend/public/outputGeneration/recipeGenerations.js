const recipeJson=[
  {
    "name": "Tomato Pasta",
    "ingredients": ["tomato", "pasta", "garlic", "olive oil"],
    "instructions": [
      "Boil pasta for 8 minutes.",
      "Sauté garlic and tomatoes in olive oil.",
      "Mix pasta with sauce and serve."
    ],
    "nutrition": {
      "calories": 350,
      "protein": 10
    },
    "diet": "vegetarian"
  },
  {
    "name": "Vegetable Stir Fry",
    "ingredients": ["broccoli", "carrot", "bell pepper", "soy sauce"],
    "instructions": [
      "Chop vegetables.",
      "Stir fry in soy sauce for 5 minutes.",
      "Serve hot."
    ],
    "nutrition": {
      "calories": 200,
      "protein": 5
    },
    "diet": "vegan"
  }
]



import { finalIngredients } from "../userInput/userInput.js";
const recipes=document.querySelector('#recipes');
const recipeGenerate=document.querySelector('.recipe-generate');

recipeGenerate.addEventListener('click',function(){
  let resultIndex=0;
let flag=true;
for(let i=0;i<recipeJson.length;i++){
  flag=true;
  if(finalIngredients.length==0) {
    recipes.textContent="Select Ingredients to get recipes";
    break;
  }
   for(let j=0;j<finalIngredients.length;j++){
    if(!recipeJson[i].ingredients.includes(finalIngredients[j].toLowerCase())){
      flag=false;
    }
   }
   if(flag==true)
   recipes.textContent=recipeJson[i].instructions;
 
}

if(flag==false){
  // recipes.textContent="cannot create recipes";
  finalIngredients.forEach(recipe=>{
    async function getData(){
    try{
     // const ingredientQuery=finalIngredients.join(',');
      const response = await fetch(
        `https://api.api-ninjas.com/v2/recipe?title=${recipe}`, 
        {
          method: "GET",
          headers: {
            "X-Api-Key": "28Kq0DSzK6o1k7NRRY2EXQ==dXLDuiQ8qVlaZaXE" 
          }
        }

);
      const data=await response.json();
      // console.log(data);

      let index=-1;
      for(let i=0;i<data.length;i++){
        let flag=true;
        const ingrArray=data[i].ingredients.map(item=>item.toLowerCase().trim());
        for(let j=0;j<finalIngredients.length;j++){
          const userIngr = finalIngredients[j].toLowerCase().trim();
         const found = ingrArray.some(item => item.includes(userIngr));

          if(!found){
            flag=false;
            break;
          }
        }
        if(flag==true){
          index=i;
          break;
        }
      }
      
      const div1=document.createElement('div');
      const div2=document.createElement('div');
      if(index==-1){
        div1.textContent="Cannot fetch matching recipes";
        // console.log(data);
        recipes.appendChild(div1);
        return;
      }
      
      div1.textContent=JSON.stringify(data[index].title);
      div2.textContent=JSON.stringify(data[index].instructions);
      recipes.appendChild(div1);
      recipes.appendChild(div2);
      console.log(data);
    }catch(error){
      console.log('error fetching data',error);
    }
  }
  getData();
  })
}
})

