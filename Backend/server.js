const express = require ("Express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//assign available port if our default port-8070 is not available
const PORT = process.env.PORT || 8070;

//'jason' is the key value bearer
//EX: name-Hansi => key = name, value=Hansi
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: "true",
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
    //useFindAndModify: "false"
});

//create a connection
const connection = mongoose.connection;

//open the established connection once
connection.once("open", () => {
    console.log('Mongodb Connection Successful');    //display a successful message
})


//check weather the connection is running on the given port
app.listen (PORT, () => {
    console.log(`Server is up and running on th port: ${PORT}`)
})