/* TASK 19 ALTERNATING CHARACTERS */
'use strict';

const fs = require('fs');

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

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    var arr = s.split("");
    var A = "A";
    var B = "B";
    var count = 0;

    for (var i = 0; i < s.length; i++) {
        if (A === arr[i] && arr[i] === arr[i + 1]) {
            count = count + 1;
        }
        if (B === arr[i] && arr[i] === arr[i + 1]) {
            count = count + 1;
        }

    }
    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}
