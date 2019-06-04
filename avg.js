'use strict';

function average(arr){
  let sum = 0;
  let avg = 0;
  arr.forEach(function (item) {
    sum += item;
  });
  return avg = sum / arr.length;
}

function average(arr){
  let sum = 0;
  let avg = 0;
  arr.forEach(item => sum += item);
  return avg = sum / arr.length;
}

let arr = [1, 2, 3];
console.log(average(arr));