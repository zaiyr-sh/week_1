/* TASK 16 MINI-MAX SUM */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    var max = 0;
    var min = Infinity;
    var sumMax;
    var sumMin;

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        sumMax = arr.reduce((a, b) => a + b, 0);
        if (min > arr[i]) {
            min = arr[i];
        }
        sumMin = arr.reduce((a, b) => a + b, 0);
    }
    console.log((sumMax - max),(sumMin - min));

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
