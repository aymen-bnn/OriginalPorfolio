require('dotenv').config()
const cors = require('cors')
const EmailSender = require('./sendEmail.js')

const express = require('express')
const app = express()

//
app.use(express.json())

//Fetch data
app.use(cors({origin:'http://localhost:3000'}))
const port = 5000

app.post("/send" , async(req,res) => {
    try{
        const {fullName , email , emailObject,message} = req.body
        EmailSender({fullName , email , emailObject,message})
        res.json({msg:"Your messgae sent succesfuly"})
    }catch(error){
        res.status(404).json({msg:"Error"})
    }
})

const start = async () =>{
    try{
        app.listen(port, () =>{
            console.log(`server is running on port ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}
start()