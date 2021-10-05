valueX = prompt('Enter value \"X\"');

if (isNaN(+valueX) === false && typeof (+valueX) === 'number') {
    console.log(valueX + " - Число");
} else if (valueX === 'true' || valueX === 'false') {
    console.log(valueX + " - Логический");
} else if (typeof valueX === 'string') {
    console.log(valueX + " - Строка");
} else {
    console.log("Тип \"X\" не определён");
}