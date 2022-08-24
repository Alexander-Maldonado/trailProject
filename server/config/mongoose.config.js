const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/trails", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log('connected to the db'))
    .catch((err)=> console.log("Error in connecting to DB", err))