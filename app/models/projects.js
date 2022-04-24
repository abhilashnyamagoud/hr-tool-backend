const mongoose=require('mongoose')

const Schema=mongoose.Schema

//project schema


const ProjectSchema=new Schema({
    projectName:{
        type:String,
        required:true
    },
    clientName:{
        type:String,
        required:true
    },
    deadLine:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    teamMembers:{
        type:Array
    }
})

const Project=mongoose.model('Project',ProjectSchema)

module.exports=Project