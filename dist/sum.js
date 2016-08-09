'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(input) {
  for (var i = 0; i < input.length; i++) {
    input[i] += 1;
  }
};

console.log(sum([1, 2, -5, 'yes', 'no', 4]));

exports.sum = sum;

// if (input[i] === input.typeOf(number)) {
//   total += input[i]
// } else if (input[i] === input.typeOf(string)) {

// }

var result = '';
var total = 0;