"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mean = function mean(array) {
  var meanTotal = 0;

  for (var index = 0; index < array.length; index++) {
    meanTotal += array[index];
  }

  return meanTotal / array.length;
};
exports.mean = mean;