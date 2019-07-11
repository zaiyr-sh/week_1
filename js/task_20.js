/* TASK 20 BINARY GAP */
var n = 15;
var binary = n.toString(2);
var binaryArr = binary.split("");
var zero = "0";
var one = "1";
var count = 0;
var countMax = 0;
for (var i = 0; i < binary.length; i++){ 
    if (one === binaryArr[i]){
        if (countMax < count){
            countMax = count;
            count = 0;
        }
    }
    else if (zero === binaryArr[i]){
        count = count + 1;
    }  
}
console.log(countMax);