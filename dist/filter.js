'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filter = function filter(collection, predicate) {
  if (collection === undefined) {
    return [];
  }

  var fn = predicate || function (a) {
    return a;
  };

  if (typeof fn === 'function') {
    return filterByFunction(collection, fn);
  } else if (typeof fn === 'string') {
    return filterByKeyValue(collection, fn);
  } else {
    return filterByObject(collection, fn);
  }
};

var filterByFunction = function filterByFunction(collection, predicate) {
  var result = [];

  for (var index = 0; index < collection.length; index++) {
    if (predicate(collection[index])) {
      result.push(collection[index]);
    }
  }

  return result;
};

var filterByObject = function filterByObject(collection, predicate) {
  var result = [];

  for (var index = 0; index < collection.length; index++) {
    var keysMatch = true;

    for (var key in predicate) {
      keysMatch = keysMatch && collection[index][key] === predicate[key];
    }

    if (keysMatch) {
      result.push(collection[index]);
    }
  }

  return result;
};

var filterByKeyValue = function filterByKeyValue(collection, key) {
  var result = [];

  for (var index = 0; index < collection.length; index++) {
    if (collection[index][key]) {
      result.push(collection[index]);
    }
  }

  return result;
};

exports.filter = filter;