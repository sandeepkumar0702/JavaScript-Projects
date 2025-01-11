const express=require('express')
const app=express()

function myErrorHandler(err,req,res,next){
    console.log("error");
    next(err);
}


app.get('/num', async(req,res,next)=>{
    const url="http://www.randomnumberapi.com/api/v1.0/random";
    try{
        const response=await fetch(url);
        const num=await response.json();
        res.json(nu);
    }
    catch(err){
        next(err);
    }
})
app.get('/hi',(req,res)=>{
    res.send("Hi");
})


app.use(myErrorHandler);

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})