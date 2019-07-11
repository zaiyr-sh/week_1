/* TASK 15 */
var data = prompt();
var result = [];
for (var i = 0; i < data.length; i++){
  for (var j = i + 1; j < data.length + 1; j++){
    result.push(data.slice(i, j));
  }
}
console.log(result);




