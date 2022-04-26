
const express=require('express')
const app=express()
const cors=require('cors')

//application level middleware
app.use(express.json())
app.use(cors())

const router=require('./config/routes')
app.use(router)

const port=process.env.PORT || 3088

const configureDB=require('./config/database')


    

//setting up DB
configureDB()

app.listen(port,()=>{
    console.log("server is running on port",port)
})