const mongoose=require('mongoose')
const isEmail=require('validator/lib/isEmail')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    userName:{
        type:String,
        required:true,
        minlength:5,
        maxlength:16,
        unique:true   
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'Invalid Email Format'
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:64
    }
})

const User=mongoose.model('User',UserSchema)

module.exports=User