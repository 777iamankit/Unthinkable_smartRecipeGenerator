const mongoose=require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/Recipes');
mongoose.connect("mongodb+srv://Recipes:abc@1234@cluster0.mf4v45g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const recipeSchema=mongoose.Schema({
  title:String,
  cuisine:{type:String, default:"Indian"},
  ingredients:[String],
  steps:[String],
  nutritionalInfo:{type:String, default:"Protein, Carbs, Carbohydrates"}
});

module.exports=mongoose.model("recipe",recipeSchema);
