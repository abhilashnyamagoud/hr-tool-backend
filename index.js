
const express=require('express')
const bodyParser = require('body-parser');
const cors=require('cors')

const app=express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
//application level middleware
app.use(express.json())
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
const router=require('./config/routes')
app.use(router)


const port=process.env.PORT ||3088
const configureDB=require('./config/database')

    

//setting up DB
configureDB()

app.listen(port,()=>{
    console.log("server is running on port",port)
})