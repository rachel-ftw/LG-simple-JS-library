"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mean = function mean(array) {
  var numberCount = 0;
  var meanTotal = 0;
  for (; numberCount < array.length; numberCount++) {
    meanTotal += array[numberCount];
  }
  return meanTotal / numberCount;
};
exports.mean = mean;