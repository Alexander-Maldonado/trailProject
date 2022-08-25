require('dotenv').config();
const express = require("express");

const app = express();
const PORT = 8000;
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}));
app.use(cookieParser());

require("./config/mongoose.config");
require("./routes/trails.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))