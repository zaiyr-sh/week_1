/* TASK 12 */
var int;
for (int = 1; int < 100; int++){
    if (int % 5 === 0 && int % 3 === 0){
        console.log("fizzbuzz");
    } else if(int % 5 === 0){
        console.log("buzz");
    } else if (int % 3 === 0){
        console.log("fizz");
    } else{
        console.log(int);
    }
}
console.log(int);

