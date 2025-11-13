const express=require('express');
const Path=require('path');
const app=express();

app.use(express.static(Path.join(__dirname,"public")));

app.get('/',(req,res)=>{
  res.sendFile(Path.join(__dirname,"public","userInput","userInput.html"));
});

app.listen(3000,()=>{
  console.log('server is running');
});