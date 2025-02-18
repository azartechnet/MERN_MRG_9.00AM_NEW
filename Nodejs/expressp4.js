const express=require('express')
const app=express()
app.use(express.text())

app.post("/",function(req,res){
    var data=req.body
    console.log(data)
}).listen(3001)
console.log("Server is Running..")