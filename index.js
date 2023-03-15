const express=require("express");
const bodyParser=require("body-parser");

const app=express();
// urlencoded pass the data from form
app.use(bodyParser.urlencoded({extended:true}));



// app.get("/",function(req,res){
//     res.send("hello world");
// });
app.get("/",function(req,res){
    //req.body allows us to parsed version of HTTTP request
   
    res.sendFile(__dirname+"/index.html");
});

//bodyPareser allows us to go into any routes and tap into.body()




app.post("/",function(req,res){
    console.log(req.body);
    //parsed version
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var ans=n1+n2;
    res.status(400);
    res.sendStatus(ans);
});
app.listen(3000,function(req,res){
    console.log("server running at port 3000");
});
