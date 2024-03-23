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

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
});


app.use('/hostdetails',host_details);
module.exports= app;