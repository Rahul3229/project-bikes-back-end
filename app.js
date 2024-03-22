const express=require('express');

const app=express();
var cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const host_details =require('./routes/host_details');


app.use(cors({origin:true,credentials:true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://rahul032290:rahulpassword3229@prometheus.mt4xvth.mongodb.net/?retryWrites=true&w=majority&appName=prometheus')


// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'abc'
//     });
// });


app.use('/hostdetails',host_details);
module.exports= app;