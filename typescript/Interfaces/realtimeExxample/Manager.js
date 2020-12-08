"use strict";
exports.__esModule = true;
var TwoWheeler_1 = require("./TwoWheeler");
var FourWheeler_1 = require("./FourWheeler");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.getDetails = function (vehicle) {
        console.log("Cost:", vehicle.getCost());
        console.log("No. of Wheels:", vehicle.getNoOfWheels());
    };
    return Manager;
}());
var manager = new Manager();
console.log("Printting Two wheeler details");
manager.getDetails(new TwoWheeler_1.TwoWheeler());
console.log("Printting Four wheeler details");
manager.getDetails(new FourWheeler_1.FourWheeler());
