//installments
//import mongoose from 'mongoose'
const express = require('express')
const app = express()
const port = 4000
//const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content_Type, Accept");
    next();
});

////parse applications/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://cathal:admin@cluster0.qrfkd.mongodb.net/clothes?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

var clothesSchema = new Schema({
    Title: String,
    Price: String,
    Brand: String,
    Type: String,
    Picture: String
})

var ClothesModel = mongoose.model("clothes", clothesSchema);


//accounts for backend
app.get('/api/clothes', (req, res)=>{
// const myclothes = 
// [
//     {
//                  "Title": "Mens Mixed T-Shirt",
//                  "Price" : "€50.00",
//                  "Brand": "Adidas",
//                  "Type": "Black and White T-Shirt",
//                  "Picture": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                  },
//                {
   
//                    "Title": "Mens White T-Shirt",
//                    "Price" : "€30.00",
//                   "Brand": "Nike",
//                   "Type": "T-Shirt",
//                   "Picture": "https://images.unsplash.com/photo-1523647341782-d761bce0004c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                },
//                {
//                    "Title" : "Womans White T-Shirt",
//                    "Price" : "€45.00",
//                    "Brand" : "RedWood",
//                    "Type" : " Dreamer T-Shirt",
//                    "Picture" : "https://images.unsplash.com/photo-1569033083669-a63ea13bc769?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                },
//                {
//                   "Title" : "Womans Grey T-Shirt",
//                   "Price" : "€30.00",
//                    "Brand" : "StoneMill",
//                    "Type" : " Live it, Love it",
//                    "Picture" : "https://images.unsplash.com/photo-1542716283-b7c13b8952d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//                },
//   ]

ClothesModel.find((err,data)=>{
    res.json(data);
})
    // res.status(200).json({
    //     message : "Clothes",
    //     clothes:myclothes});
});

app.get('/api/clothes/:id', (req,res)=>{
    console.log(req.params.id);

    ClothesModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
}) 

app.put('/api/clothes/:id', (req, res) =>{
    console.log("Update Clothing Item: " + req.params.id);
    console.log(req.body);

    ClothesModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (err,data)=>{
        res.send(data);
    })
})

app.delete('/api/clothes/:id', (req, res)=>{
    console.log("Delete Clothing: " + req.params.id);

    ClothesModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.post('/api/clothes', (req, res)=>{
    console.log("Clothes Received");
    console.log(req.body.Title);
    console.log(req.body.Price);
    console.log(req.body.Brand);
    console.log(req.body.Type);
    console.log(req.body.Picture);

    ClothesModel.create({
        Title:req.body.Title,
        Price:req.body.Price,
        Brand:req.body.Brand,
        Type:req.body.Type,
        Picture:req.body.Picture
    })

    //send a response back so the clothes item doesnt duplicate
    res.send('Item Added');
})
// //send up via the body
// app.post('/name', (req,res)=>{
//  res.send('Hello' + req.body.fname + ' ' + req.body.lname)
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})