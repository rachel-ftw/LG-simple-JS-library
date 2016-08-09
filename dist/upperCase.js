'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var LETTER_MAP = letters.split('').reduce(function (previous, current, index) {
  var upper = String.fromCharCode(letters.charCodeAt(index) - 32);

  previous[current] = upper;
  previous[upper] = upper;

  return previous;
}, {});

var NUMBER_MAP = numbers.reduce(function (previous, current, index) {
  previous[current] = current;

  return previous;
}, {});

var MAP = Object.assign({}, LETTER_MAP, NUMBER_MAP, { ' ': ' ' });

var upperCase = function upperCase(input) {
  var stringified = input + '';
  var result = "";

  stringified = stringified.replace(/[^\dA-Za-z]/, ' ');

  stringified = stringified.replace(/(\w+)([A-Z])(\w+)/, "$1 $2$3");

  stringified = stringified.replace(/([A-Za-z]+)(\d)([A-Za-z0-9]+)/, "$1 $2$3");

  stringified = stringified.trim();

  for (var i = 0; i < stringified.length; i++) {
    result += MAP[stringified[i]];
  }

  return result;
};

exports.upperCase = upperCase;