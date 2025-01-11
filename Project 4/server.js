const express=require('express');
const app=express();
const bcrypt=require('bcrypt');

// mongoose.connect("")
app.get('/package',(req,res)=>{
    res.sendFile(__dirname+".package.json");
})
app.get('/num',(rq,res)=>{
    res.send("89");
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})