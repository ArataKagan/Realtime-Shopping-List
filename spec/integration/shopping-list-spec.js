const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/api/shopping-list/";
const sequelize = require("../../src/db/models/index").sequelize;
const Item = require("../../src/db/models").Item;

describe("routes : shopping-list", () => {

    beforeEach((done) => {
        this.item;
        sequelize.sync({ force: true }).then((res) => {
            Item.create({
                item: "apple",
                quantity: 1
            })
                .then((item) => {
                    this.item = item;
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });
    });

    describe("GET /shopping-list", () => {
        it("should return a status code 200 and all items", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                expect(body).toContain("apple");
                done();
            });
        });
    });

    describe("POST /shopping-list", () => {
        const options = {
            url: `${base}`,
            form: {
                item: "orange",
                quantity: 2
            }
        };

        it("should create a new item", (done) => {
            request.post(options,
                (err, res, body) => {
                    Item.findOne({ where: { item: "orange" } })
                        .then((item) => {
                            expect(res.statusCode).toBe(200);
                            expect(item.item).toBe("orange");
                            expect(item.quantity).toBe(2)
                            done();
                        })
                        .catch((err) => {
                            console.log(err);
                            done();
                        });
                });
        });
    });

    describe("POST /shopping-list/:id/delete", () => {
        it("should delete the item with the associated id", (done) => {
            Item.findAll()
                .then((items) => {
                    const itemCountBeforeDelete = items.length;
                    expect(itemCountBeforeDelete).toBe(1);

                    request.post(`${base}${this.item.id}/delete`, (err, res, body) => {
                        Item.findAll()
                            .then((items) => {
                                expect(err).toBeNull();
                                expect(items.length).toBe(itemCountBeforeDelete - 1);
                                done();
                            });
                    });
                });
        });
    });

    describe("POST /shopping-list/:id/update", () => {
        it("should update the item with the associated id", (done) => {
            // Item.findAll()
            // .then((item) => {
            //     const options = {
            //         url: `${base}${this.item.id}/update`,
            //         form: {
            //             item: "grape",
            //             quantity: 2
            //         }
            //     };
            //     request.post(options, (req, res, body) => {
            //         Item.findOne({ where: { item: "grape" } })
            //             .then((item) => {
            //                 expect(item).not.toBeNull();
            //                 expect(item.item).toBe("grape");
            //                 expect(item.quantity).toBe(2);
            //                 done();
            //             })
            //             .catch((err) => {
            //                 console.log(err);
            //                 done();
            //             });
            //     });

            // });
            const options = {
                url: `${base}${this.item.id}/update`,
                form: {
                    item: "grape",
                    quantity: 3
                }
            };

            request.post(options,
                (err, res, body) => {
                    Item.findOne({
                        where: { id: this.item.id }
                    })
                        .then((item) => {
                            expect(item.item).not.toBe("apple");
                            expect(item.item).toBe("grape");
                            done();
                        });
                });
        });
    });

});