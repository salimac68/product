const express = require('express');
const ProductData = require('./src/model/Productdata');
 const userdata = require('./src/model/Logindata');
const usedata = require('./src/model/Signupdata');

const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save();
});

app.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var user={
        username:req.body.user.username,
        password:req.body.user.password
    }

    var user=new userdata(user);
    user.save();
});

app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var use={
        username:req.body.use.username,
        // address:req.body.use.address,
        //  dob:req.body.use.dob,
        //  email:req.body.use.email,
        // phone_number:req.body.use.phone_number,
         password:req.body.use.password,
        //  cp:req.body.use.cp

        
    }

    var use=new usedata(use);
    use.save();
});

app.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var id = req.body.id;
    console.log(id + "id get");
    ProductData.deleteOne({_id : id})
    .then(products=>{
        console.log(products);
        res.send(products);
    })
})

app.listen(3000, function(){
    console.log('listening to port 3000');
});