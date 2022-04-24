const mongoose=require('mongoose')

const Schema=mongoose.Schema

const LeaveSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    employeeId:{
        type:Number,
        required:true
    },
    leaveType:{
        type:String,
        required:true
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
    },
    remarks:{
        type:String
    }

})

const Leave=mongoose.model('Leave',LeaveSchema)

module.exports=Leave