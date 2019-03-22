const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();
// for incomming data!!!! based on json.
app.use(bodyParser.json());
app.use((req, res, next) => {

    // Access-Control-Allow-Origin: set up that client allows cross origin resource sharing
    //  "*":  any clients or we can specify like "codepen.io"
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // make the client set Content-Type and Authorization (to be discussed)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed', feedRoutes);

app.listen(8080);
