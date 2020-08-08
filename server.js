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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//set up routes
console.log('at routes');
app.use(routes);


// set up mongoose
//ADD BACK IN ONCE TIED TO HEROKU DATABASE
// process.env.MONGODB_URI ||
//"mongodb://localhost/todos" || 
//|| process.env.MONGODB_URI
mongoose.connect(
    ("mongodb://localhost/todos"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err) => {
        if(err){
            console.log(err);
            throw err;
        } else{ 
        (console.log("Connection to database established"));
        }
    })

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

