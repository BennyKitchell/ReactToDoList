"use strict";

//arguments object and this keywords are no longer bound with arrow functions
var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

var user = {
    name: "joe",
    cities: ["seattle", "concord", "dublin"],
    //cannot be an arrow function because this.cities is undefined
    //it is undefined because "this" will refer to the user objects parent for definition
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //console.log(this.name);
        //console.log(this.cities);
        //needs to be an arrow function because "this" in arrow functions refers to parent definition (aka user)
        //using map instead of foreach
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 5, 43],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
