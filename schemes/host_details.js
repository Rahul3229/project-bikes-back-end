const mongoose=require('mongoose');


const host_details_Schema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    First_Name:String,
    Last_Name:String,
    State:String,
    City:String,
    Street_Address:String,
    Postal_Code:String,
    Model_Make:String,
    Price:Number,
    Lat:Number,
    Lng:Number,
});

module.exports=mongoose.model('host_details',host_details_Schema);



