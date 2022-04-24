const mongoose=require('mongoose')

const Schema=mongoose.Schema

const HolidaySchema=new Schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    details:{
        type:String
    }
})

const Holiday=mongoose.model('Holiday',HolidaySchema)

module.exports=Holiday