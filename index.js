const express = require('express');

const users=["Dibya","Kammya","Salman","Farhan"];

const app=express();
app.get("/",(req,res)=>{
    const fruit ={
        product:"mango",
        price:200
    }
    res.send(fruit);
});
app.get("/fruits/banana",(req,res)=>{
   
    res.send({fruit:"banana",quantity:3});
});
app.get("/users/:id",(req,res)=>{

    const id=req.params.id;
    const name=users[id];
    res.send({id,name});
});


app.listen(3000,()=>console.log("Listening to port 3000"));