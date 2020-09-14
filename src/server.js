const express = require("express");
const app = express();
var bodyParser = require('body-parser')
require("dotenv").config();

// Init middleware
app.use(express.json({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('API running'));

//Define Routes
app.use('/api/shopping-list', require('./routes/shopping-list'));

const PORT = normalizePort(process.env.PORT || "5000");

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// Normalize port
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

