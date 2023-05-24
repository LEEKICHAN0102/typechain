"use strict";
const last = (arr) => {
    return arr[arr.length - 1];
};
last([1, 2, 3, 4, 5]);
const prepend = (arr, item) => {
    return [item, ...arr];
};
const arr = ([1, 2, 3, 4]);
const arrPrepend = prepend(arr, 5);
const mix = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
mix([1, 2, 3], ["a", "b", "c"]);
const count = (arr) => {
    return arr.length;
};
count([1, 2, 3, 4, 5]);
function slice(arr, startIndex, endIndex) {
    if (!endIndex) {
        return arr.slice(startIndex);
    }
    else {
        return arr.slice(startIndex, endIndex);
    }
}
//When writing an arrow function, an error such as "react is not found" occurs. Why is that? 😂 
//It's just a playground error, right?
slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 7);
