const express=require("express");
const mongoose=require("mongoose");
const app=express();
mongoose.connect("mongodb+srv://Nithin:nnr_26@cluster0.tr1r5bo.mongodb.net/organdb",{useNewUrlParser:true});
app.listen(5000,()=>{
    console.log("serve 5000 is on");
});
const postSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Phone:{type:String,required:true},
    oin:{type:String,required:true},
    Bg:{type:String,required:true}
});
const donor=mongoose.model("Donor",postSchema);
const recepient=mongoose.model("Recepient",postSchema);
app.post('/auth',async(req,res)=>{
    if(req.body.select==donor){
       let newDonor=new donor({
          Name:req.body.name,
          Email:req.body.email,
          Phone:req.body.phone,
          oin:req.body.oin,
          Bg:req.body.Bg,
        });
       newDonor.save();
    }
    else{
        let newRecepient=new recepient({
            Name:req.body.name,
            Email:req.body.email,
            Phone:req.body.phone,
            oin:req.body.oin,
            Bg:req.body.Bg,
          });
         newRecepient.save();
    }
});