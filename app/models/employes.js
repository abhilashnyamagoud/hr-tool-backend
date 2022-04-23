const mongoose=require('mongoose');

const Schema=mongoose.Schema

//employe Schema
const employeSchema=new Schema({
    fullName:{
        type:String,
        required:[true,'Full Name should be required']
    },
    employesId:{
        type:Number,
        required:[true,'Enter Employe ID']
    },
    orgEmail:{
        type:String,
        required:[true,"Email Required"]
    },
    designation:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    manager:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    joinedDate:{
        type:Date,
        required:true
        //should be yyyy-mm-dd
    },
    dob:{
        type:Date,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})

//create Model
const Employe=mongoose.model('Employe',employeSchema)

module.exports=Employe