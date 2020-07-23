const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes')

//set up express

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//set up routes

app.use(routes);


// set up mongoose
//ADD BACK IN ONCE TIED TO HEROKU DATABASE
// process.env.MONGODB_URI ||
mongoose.connect(
    ("mongodb://localhost/mern-auth-fullstack" || process.env.MONGODB_CONNECTION_STRING), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err) => {
        if(err){
            throw err;
        } else{ 
        (console.log("Connection to database established"));
        }
    })

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

