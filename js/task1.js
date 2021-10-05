EnteredNum = prompt('Введите любое число');
EnteredNum = +EnteredNum;

if (isNaN(EnteredNum) === true || typeof (EnteredNum) !== 'number') {
  console.log("Упс, кажется, вы ошиблись");
} else if (EnteredNum % 2 === 0) {
  console.log("Вы ввели чётное число");
} else {
  console.log("Вы ввели нечётное число");
}