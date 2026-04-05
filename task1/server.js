const express=require('express')

const app=express() //server created 

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/products',(req,res)=>{
    res.send("product page")
})

app.get('/contact',function(req,res){
    res.send("contact us")
})

app.listen(3000) //server started as process at 3000