'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var map = function map(mapItem, transform) {
  var target = normalizeMapItem(mapItem);
  var result = [];
  var index = 0;

  for (index = 0; index < target.length; index++) {
    result.push(transform(target[index]));
  }

  return result;
};

var normalizeMapItem = function normalizeMapItem(mapItem) {
  if (!mapItem) {
    return [];
  } else if (Array.isArray(mapItem)) {
    return mapItem;
  } else if ((typeof mapItem === 'undefined' ? 'undefined' : _typeof(mapItem)) === 'object') {
    var result = [];

    for (var key in mapItem) {
      result.push(mapItem[key]);
    }

    return result;
  } else {
    return mapItem;
  }
};

exports.map = map;