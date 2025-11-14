const express=require('express');
const Path=require('path');
const app=express();
const mongoose=require('mongoose');
const recipe=require('./model/recipeSchema');

app.use(express.json());

app.use(express.static(Path.join(__dirname,"public")));

app.get('/',(req,res)=>{
  res.sendFile(Path.join(__dirname,"public","userInput","userInput.html"));
});


// add recipe endpoints

app.post('/add-recipe',async(req,res)=>{
  try{
    const{title,ingredients,steps,nutrionalInfo,cuisine}=req.body;

    const newRecipe = new recipe({
      title,
      ingredients,
      steps,
      nutritionalInfo: "Calories: 0, Protein: 0g",
      cuisine: cuisine || "Indian" // default if not provided
    });
    await newRecipe.save();

  }catch(err){
    console.log(err);
  }
})


app.listen(3000,()=>{
  console.log('server is running');
});