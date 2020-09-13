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
        // let item = await Item.findByPk(req.params.id);
        // console.log(item);
        // await item.destroy();
        const item = await Item.destroy({
            where: { id: req.params.id }
        });

        res.json({ msg: 'Item removed' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.post("/:id/update", async (req, res) => {
    try {
        const updatedItem = {
            item: req.body.item,
            quantity: req.body.quantity
        };
        console.log(`Updated item: ${updatedItem}`);


        Item.findById({
            where: { id: req.params.id }
        }).then((item) => {
            if (item) {
                item.update(updatedItem);
            } else {
                console.log("No matching item found");
            }
        });

        res.json({ msg: 'Item updated' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})

module.exports = router;