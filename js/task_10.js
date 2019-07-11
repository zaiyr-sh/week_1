/* TASK 10 */
var arr = ["Targaryen", "Arryn", "Stark", "Lannister", "Baratheon", "Greyjoy"];

console.log(arr[3]);

/* Два способа вывести первый и последний элементы массива*/
console.log(arr[0]);
console.log(arr[arr.length - 1]);

firstArr = arr.shift();
lastArr = arr.pop();
console.log(firstArr);
console.log(lastArr);