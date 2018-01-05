//importing module
var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require('body-parser');
var cors=require("cors");
var path=require("path");
var app=express();
const port=3000;
var route=require('./route/route');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactlist',{ useMongoClient: true });

mongoose.connection.on('connected',()=>{
    console.log("Connected to database mongodb @27017");
})
mongoose.connection.on('error',(err)=>{
if(err)
{
    console.log('error in database connection:'+err);
}

});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);


app.get('/',(req,res)=>{
    res.send("hllo vikas");

});

app.listen(port,()=>{
    console.log("server started as port: "+port);
});