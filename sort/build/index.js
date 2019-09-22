"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort_1 = require("./Sort");
var NumbersCollection_1 = require("./NumbersCollection");
var numberCollection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
var sorter = new Sort_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);
