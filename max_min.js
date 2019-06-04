'use strict';

function findMax(numbers){
    let max= numbers[0];

    let  i = 1;

    while (i < numbers.length){
        if (numbers[i]>max){
            max = numbers[i];
            i++;
        }
    }
    return max;
}

function findMin(numbers){
    let min= numbers[0];

    let  i = 1;

    while (i < numbers.length){
        if (numbers[i]<min){
            min = numbers[i];
        }
        i++;
    }
    return min;
}

numbers = [1, 2, 3, 4, 5]
console.log(findMax(numbers));
console.log(findMin(numbers));