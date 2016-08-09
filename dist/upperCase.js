'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LETTERS = {
  a: 'A',
  b: 'B',
  c: 'C'
};

var UPPER_CASE = {
  A: 'A',
  B: 'B',
  C: 'C'
};

var NUMBERS = {
  1: 1,
  2: 2,
  3: 3
};

var LETTER_MAP = Object.assign({}, LETTERS, NUMBERS, UPPER_CASE, { ' ': ' ' });

var upperCase = function upperCase(input) {
  var result = "";

  for (var index = 0; input.length; index++) {
    var previous = index > 0 ? input[index - 1] : undefined;
    var currentChar = input[index];

    // Add spaces before upper case letters if letter is preceeded by another character
    result += previous && UPPER_CASE[currentChar] && !UPPER_CASE[previous] && LETTER_MAP[previous] ? ' ' : '';

    // Add spaces before numbers preceeded by a character
    result += previous && NUMBERS[currentChar] && LETTERS[previous] && UPPER_CASE[previous] ? ' ' : '';

    // Turn non (letter or number) into spaces
    // Make lower case characters upper case
    result += LETTER_MAP[currentChar] || ' ';
  }

  var resultIndex = 0;
  var finalResult = "";

  // Trim at beginning
  while (result[resultIndex] === ' ') {
    resultIndex++;
  }

  for (; resultIndex < result.length; resultIndex++) {
    var _previous = finalResult.length > 0 ? finalResult[finalResult.length - 1] : undefined;

    // We add the character if the previous thing is not a space OR
    // We add the character if the previous thing is a space AND the current thing is not a space
    finalResult += result[resultIndex];
  }
  // Collapse successive spaces


  // Trim spaces at beginning and end


  return finalResult;
};

exports.upperCase = upperCase;