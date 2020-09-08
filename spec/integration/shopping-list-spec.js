const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/api/shopping-list";

describe("routes : shopping-list", () => {
    describe("GET /shopping-list", () => {
        it("should return a status code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
});