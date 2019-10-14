"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    // markerContent(): string;
    function User() {
        this.name = faker_1["default"].name.firstName();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
        // this.location.lat = parseFloat(faker.address.latitude()); // get error because location is not be intial
    }
    User.prototype.markerContent = function () {
        return "\n      User Name:  " + this.name + " \n    ";
    };
    return User;
}());
exports.User = User;
