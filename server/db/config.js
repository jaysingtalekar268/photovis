const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URL}`,{
    useNewUrlParser:true,
    useNewUrlParser:true
}).then(()=>{
    console.warn("db connected successfully");
});