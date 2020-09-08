const express = require("express");
const app = express();
require("dotenv").config();

// Init middleware
app.use(express.json({ extended: false }));

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

