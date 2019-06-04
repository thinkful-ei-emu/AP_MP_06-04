'use strict';

function hazardWarningCreater(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`);
    }
}

const rocksWarning = hazardWarningCreater("Rocks on the Road");
const iceWarning = hazardWarningCreater("Ice on the Road");
const earthquake = hazardWarningCreater("Warning Earthquake");

rocksWarning("Main st");
rocksWarning("Main st");
iceWarning("VB BLVD");
earthquake("holland rd");
