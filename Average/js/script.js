'use strict';

const average = (arr) =>
  arr.reduce((num1, num2) => num1 + num2, 0) / arr.length;

const result = average([5, 5, 6, 4]);

alert(result);
