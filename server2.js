const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
mongoose.connect("mongodb+srv://Nithin:nnr_26@cluster0.tr1r5bo.mongodb.net/Signupdb",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));

const postSchema=new mongoose.Schema({
    Fname:{type:String,required:true},
    Lname:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true}
});

const signup=mongoose.model("Signup",postSchema);

app.listen(4000,()=>{
    console.log("server 4000 is on");
})

app.post('/login',async(req,res)=>{
    
    if(signup.findOne({Email:req.body.email})){
        if(!signup.findOne({Password:req.body.password})){
            res.status(400).send({message:"Invalid email or password"})
        }
        window.location="http://localhost:3000/home";
    }
    else{
        res.status(400).send({message:"Invalid email or password"})
    }
})
app.post('/signup',async(req,res)=>{
    let user=new signup({
        Fname:req.body.fname,
        Lname:req.body.lname,
        Email:req.body.email,
        Password:req.body.password
    });
    user.save();
})