'use strict';
let arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtleMoving(arr){
  let filtered = arr.filter(function(steps) {
    if (steps[0] >= 0 && steps[1] >= 0){
      return true;
    } else {
      return false;
    }
  });
  return filtered;
}

function totalSteps(){
  let array = turtleMoving(arr);
  let totalStep = array.map((steps) => steps[0] + steps[1]);
  return totalStep; 
}

function howManySteps(){
  let numberOfSteps= totalSteps(); //[0, 5, 5]

  let message = numberOfSteps.forEach(function(turtle, index) {
    console.log(`Movement #${index + 1}: ${turtle} step`);
  });
  
}

console.log(turtleMoving([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));
console.log(totalSteps());
console.log(howManySteps());
