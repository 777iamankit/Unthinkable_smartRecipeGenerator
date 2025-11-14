const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Recipes');

const recipeSchema=mongoose.Schema({
  title:String,
  cuisine:{type:String, default:"Indian"},
  ingredients:[String],
  steps:[String],
  nutritionalInfo:{type:String, default:"Protein, Carbs, Carbohydrates"}
});

module.exports=mongoose.model("recipe",recipeSchema);
