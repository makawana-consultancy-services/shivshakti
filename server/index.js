const express = require("express")
const mongoose = require("mongoose");
const Contact = require("./models/contact");
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001', // or use "*" to allow all origins (not recommended in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you're sending cookies or HTTP auth headers
}));

mongoose.connect("mongodb://localhost:27017/shivshaktioil")
.then(()=> {
    console.log("Connected to MongoDB");
})
.catch((err)=> {
    console.log(err);
})

app.post("/contact",async(req,res)=> {
    console.log(req.body);
    
try{
    const contactData = new Contact(req.body);
    await contactData.save();
}
catch(err) {
    console.log(err);
}
})

app.listen(8080,()=> {
    console.log("server status running");
})