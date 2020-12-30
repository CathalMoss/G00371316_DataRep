//installments
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser")

//parse application/x-www/form-urlencoded]
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the BackEnd')
})

//greeting and name
app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Ive been got ' + req.params.name);
})

//accounts for backend
app.get('/api/accounts', (req, res)=>{
const myAccounts = 
[
    {
        "Name":"Cathal",
        "DOB" : "14/05/1988",
        "Email" : "jimmyMoss54@gmit.ie"
    },
    {
        "Name" : "David",
        "DOB" : "12/12/12",
        "Email" : "david@gmail.com"
    }];
    res.json({accounts:myAccounts});
});

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//sends data as part of the url
app.get('/name', (req,res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//send up via the body
app.post('/name', (req,res)=>{
 res.send('Hello' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})