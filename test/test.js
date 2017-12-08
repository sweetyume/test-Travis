const mocha = require('mocha');
const expect = require('chai').expect;
const Code = require('../code');

describe("3NT3R TH3 C0DE", function() {
    it("Should return the right code to disarm the bomb", function() {
        const code = new Code();
        expect(code.disarm).to.equal("3330");
    });
}); 