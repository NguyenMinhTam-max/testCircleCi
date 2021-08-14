const validator = require('../validator')
var expect = require("chai").expect;

describe("validator isNumValid()", () => {

    it("should return true for a number in between 10 and 70", () => {
        expect(validator.isNumValid(10)).to.be.true
    })
})