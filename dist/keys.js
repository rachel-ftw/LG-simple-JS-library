"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = function keys(object) {
  var values = [];
  // for( var key in object ) {
  //   return Object.keys(object)
  // }
  // return values
  for (var key in object) {
    values.push(key);
  }
  return values;
};
exports.keys = keys;