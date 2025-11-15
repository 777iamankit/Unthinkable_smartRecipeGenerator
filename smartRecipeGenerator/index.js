const express=require('express');
const Path=require('path');
const app=express();
const mongoose=require('mongoose');
const recipe=require('./model/recipeSchema');
const bodyParser=require('body-parser');
const processImageRouter = require("./routes/imageSearch");

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));


app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));


app.use(express.static(Path.join(__dirname,"public")));
app.use("/api", processImageRouter);

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

const PORT=3000;

app.listen(PORT,()=>{
  console.log('server is running');
});