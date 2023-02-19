const express=require("express");
const bodyParser = require("body-parser");
const https=require("https");
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/childabuse",function(req,res){
    res.sendFile(__dirname+"/childabuse.html");
});

app.post("/childabuse",function(req,res){
   res.redirect("/childabuse");
});

app.get("/vaw",function(req,res){
    res.sendFile(__dirname+"/vaw.html");
});

app.post("/vaw",function(req,res){
   res.redirect("/vaw");    
});

app.listen(5000, function() {
    console.log("Server started on port 5000");
  });
  