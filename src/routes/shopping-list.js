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

router.post("/", async (req, res) => {
    try {
        const newItem = {
            item: req.body.item,
            quantity: req.body.quantity
        };

        Item.create(newItem)
            .then(item => {
                res.send(item);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while creating an item."
                });
            });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.post("/:id/delete", async (req, res) => {
    try {
        Item.destroy({ where: req.params.id })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;