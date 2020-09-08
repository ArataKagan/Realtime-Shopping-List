const express = require("express");
const router = express.Router();
const models = require("../db/models");
const Item = models.Item;
// const itemQueries = require("../db/queries.items.js");

router.get("/", async (req, res) => {
    try {
        console.log(Item);
        const items = await Item.findAll();
        console.log(`Found items: ${items}`);
        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;