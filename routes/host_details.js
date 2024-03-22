const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const schema=require('../schemes/host_details');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get is working!'
    });
});

router.post('/',(req,res,next)=>{
    const host=new schema({
        _id:new mongoose.Types.ObjectId(),
        First_Name:req.body.f_name,
        Last_Name:req.body.l_name,
        State:req.body.state,
        City:req.body.city,
        Street_Address:req.body.st_address,
        Postal_Code:req.body.postal,
        Model_Make:req.body.model,
        Price:req.body.price,
        Lat:req.body.lat,
        Lng:req.body.lng
    });
    host.save().then(result=>{
        console.log(result);
    }) 
    .catch(err=>console.log(err));
    res.status(200).json({
        message:'everthing will be ok, just hang in there!',
        createdHost:host
    });
});

module.exports= router;