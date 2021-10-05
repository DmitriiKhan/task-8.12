valueX = prompt('Введите значение \"X\" в диапазоне от 0 до 1000');

    while (true) {
        if (isNaN(+valueX) === false && typeof (+valueX) == 'number' && valueX > -1 && valueX < 1001 || valueX === null) break
        alert('Извините вы ввели некоректные данные');
        valueX = prompt('Введите значение \"X\" в диапазоне от 0 до 1000');
    }

    answer = true;

for (let i = 2; i < valueX ; i++) {
  if (valueX % i === 0) {
    answer = false;
    break;
  }
}

if (valueX === 0) {
  console.log('The number \"0\" was entered"');
} else if (answer === true) {
  console.log('Введённое число простое');
} else {
  console.log('Введённое число сложное');
}