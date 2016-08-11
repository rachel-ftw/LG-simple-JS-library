'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var id = -1;

var uniqueID = function uniqueID() {
  var prefix = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  id++;
  return prefix === '' ? id + '' : prefix + '-' + id;
};

exports.uniqueID = uniqueID;