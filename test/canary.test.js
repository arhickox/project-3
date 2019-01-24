require("dotenv").config({ path: __dirname + ".env" });
var chai = require("chai");
var chaiHttp = require("chai-http");
//var server = require("../server");
//var db = require("../models");
//var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);
var assert = require("assert");
describe("Basic Mocha String Test", function() {
  it("should return number of charachters in a string", function() {
    assert.equal("Hello".length, 5);
  });
  it("should return first charachter of the string", function() {
    assert.equal("Hello".charAt(0), "H");
  });
});