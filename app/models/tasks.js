const mongoose=require('mongoose');

const Schema=mongoose.Schema

//Task Schema

const TaskSchema=new Schema({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        default:"No Due date"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        required:true,
        default: "Progress"
    }
})

const Task=mongoose.model('Task',TaskSchema)

module.exports=Task