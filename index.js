const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const route = require('./routes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/dipali-GroundUp?retryWrites=true&w=majority", {

    useNewUrlParser: true
    
})

.then( () => console.log("MongoDb is connected"))

.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});