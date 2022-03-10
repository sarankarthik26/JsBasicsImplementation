"use strict";

var resultArray = [];
function Main() {
    var inputGiven = document.getElementsByName('InputArray');
    var arrayObtained = inputGiven[0].value.split(",");

    document.getElementById("MapOutputOne").innerHTML = map(arrayObtained, eval('Math.sqrt'));
    document.getElementById("MapOutputTwo").innerHTML = map(arrayObtained, multiplyByTen);
    document.getElementById("FilterOutput").innerHTML = filter(arrayObtained, checkIfEven);
    document.getElementById("ReduceOutput").innerHTML = reduce(arrayObtained, findSum);
    document.getElementById("ForeachOutput").innerHTML = forEach(arrayObtained, multiplyByTen);
    //console.log(arrayObtained); forEach modifies the array given to it, whereas map returns a new array.
}

function multiplyByTen(value) {
    return value * 10;
}

function checkIfEven(value) {
    return value % 2 == 0 ? true : false;
}

function findSum(previous, current) {
    return parseInt(previous) + parseInt(current);
}

function map(arrayToOperate, functionToRun) {
    resultArray = [];

    for (i = 0; i < arrayToOperate.length; i++) {
        resultArray[i] = functionToRun(arrayToOperate[i]);
    }
    return resultArray;
}

function filter(arrayToOperate, functionToRun) {
    resultArray = [];
    for (i = 0; i < arrayToOperate.length; i++) {
        if (functionToRun(arrayToOperate[i])) {
            resultArray.push(arrayToOperate[i]);
        }
    }
    return resultArray;
}

function reduce(arrayToOperate, functionToRun) {
    var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var previousValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var currentValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var currentIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;


    if (initialValue == 0) {
        previousValue = arrayToOperate[0];
        currentIndex = 1;
        currentValue = arrayToOperate[currentIndex];
    } else {
        previousValue = initialValue;
        currentValue = arrayToOperate[currentIndex];
    }

    while (currentIndex < arrayToOperate.length) {
        previousValue = functionToRun(previousValue, currentValue);
        currentIndex += 1;
        currentValue = arrayToOperate[currentIndex];
    }

    return previousValue;
}

function forEach(arrayToOperate, functionToRun) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var currentValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arrayToOperate[index];
    var thisArg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

    for (i = index; i < arrayToOperate.length; i++) {
        arrayToOperate[i] = functionToRun(arrayToOperate[i]);
        console.log(arrayToOperate[i]);
    }
    return arrayToOperate;
}