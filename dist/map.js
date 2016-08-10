"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var map = function map(mapItem, transform) {
  var target = mapItem || [];
  var result = [];

  for (var key in mapItem) {
    result.push(transform(target[key], key, target));
  }

  return result;
};

exports.map = map;