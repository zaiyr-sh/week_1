/* TASK 8 */
var drink = prompt("Выберите напиток: ");

switch(drink){
    case "beer":
    case "vodka":    
        alert(drink = "Не забывайте, чрезмерное употребление алкоголя вредно для здоровья.");
        break;
    case "coffee":    
        alert(drink = "Не забывайте, чрезмерное употребление кофеина вредно для здоровья.");
        break;
    case "milk":    
        alert(drink = "Отличный выбор!");
        break;
    case !isNaN(drink):
        alert("Ошибка!"); 
        break;
    default:
        alert("Выбор сделан");
}