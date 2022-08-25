const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1/trails", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log('connected to the db'))
    .catch((err)=> console.log("Error in connecting to DB", err))