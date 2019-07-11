/* TASK 5 */
var firstValue = parseInt(prompt("Введите первое число: "));
var secondValue = parseInt(prompt("Введите второе число: "));

var addition = firstValue + secondValue;
var subtraction = firstValue - secondValue;
var multiplication = firstValue * secondValue;

if (secondValue === 0){
    var division = "Ошибка! На ноль делить нельзя!";
}else{
    division = firstValue / secondValue;
}


alert(
    "\n" + firstValue +  " + " + secondValue +  " = "  + addition
    + "\n" + firstValue +  " - " + secondValue +  " = "  + subtraction
    + "\n" + firstValue +  " * " + secondValue +  " = "  + multiplication
    + "\n" + firstValue +  " / " + secondValue +  " = "  + division
);