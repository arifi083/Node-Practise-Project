const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const PORT = process.env.PORT || 5000
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const usersRoute = require('./routes/usersRoute');


app.use("/api/users", usersRoute);



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
 

