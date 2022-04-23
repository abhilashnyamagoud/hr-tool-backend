const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/employesData')
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((err)=>{
        console.log('error connecting with DB',err)
    })
}

module.exports=configureDB