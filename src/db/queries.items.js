const Items = require("./models").Items;

module.exports = {
    getAllItems(callback) {
        return Items.findAll()
            .then((items) => {
                callback(null, items);
            })
            .catch((err) => {
                callback(err);
            })
    }
}