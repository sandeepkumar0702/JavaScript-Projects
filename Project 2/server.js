const express=require('express');
const multer=require('multer');
const fs=require('fs')
const app=express();
const mongoose=require('mongoose');
const User=require('./models/User');
mongoose.connect('mongodb://127.0.0.1:27017/g25-multer');

const storage=multer.diskStorage({
    destination:__dirname + "/upload",
    filename:function(req,file,cb){
        if(file.mimetype !='image/jpeg'){
            cb(new Error("image not in jpaeg"));
            return ;
        }
        // const imgname="hello";
        // const extension=file.mimetype.split('/')[1];
        // const newName=req.body.newName;
        // const imgName=newName+"."+extension;
        console.log(file);
        // cb(error,finalName);  cb callback
        cb(null,file.originalname);
        // if(error){
        //     cb(error,null);
        //     return;
        // }
    }
})
const upload=multer({ storage});

app.set('view engine','hbs');
app.get('/upload',(req,res)=>{
    res.render('upload');
})

app.post('/upload',upload.single('img'),async(req,res)=>{
    const file=req.file;
    const {email,password}=req.body;
    const user=new User({
        email,password,
        imgURL:file.path,
    })
    const extension=file.mimetype.split('/');
    const newName=user._id+"."+extension;
    const newPath=file.destination+"/"+newName;
    user.imgURL=newPath;
    fs.renameSync(file.path,newPath);
    await user.save()
    res.send("Image uploaded");

    // console.log(file);
    // const newName=req.body.newName;
    // const extension=file.mimetype.split('/')[1];
    // const newPath=file.destination+"/"+newName+"."+extension;
    // fs.renameSync(file.path,newPath);
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})