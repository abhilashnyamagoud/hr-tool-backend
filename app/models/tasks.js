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
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
     completed:{
         type:Boolean
     }
})

const Task=mongoose.model('Task',TaskSchema)

module.exports=Task