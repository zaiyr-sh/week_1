/* TASK 20 BINARY GAP */
var N = 74901729;
var binary = N.toString(2);
    var binaryArr = binary.split("");
    var zero = "0";
    var one = "1";
    var count = 0;
    var countMax = 0;
    for (var i = 0; i < binary.length + 1; i++){ 
        if (one === binaryArr[i] && countMax < count){
                countMax = count;
                count = 0;
        }
        if (one === binaryArr[i] && countMax > count){
                count = 0;    
        }
        if (one === binary[i]){
                count = 0;  
        }
        if (zero === binaryArr[i]){
            count = count + 1;
        }  
    }
console.log(countMax);