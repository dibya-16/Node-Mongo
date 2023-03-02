const express = require('express');//get
const cors=require("cors");//middleware
const bodyParser=require("body-parser");//post

const users=["Dibya","Kammya","Salman","Farhan"];

const app=express();
app.use(cors());
app.use(bodyParser.json())
//get
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
//post
app.post("/addUser",(req,res)=>{
    //save to database
    const user=req.body;
    user.id=55;
    res.send(user);

});


app.listen(3000,()=>console.log("Listening to port 3000"));//we can change the port number