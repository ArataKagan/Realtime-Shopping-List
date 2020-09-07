const app = require("../app");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log('Inside of static router');
    res.send("Welcome to Shopping List App");
});

module.exports = router;