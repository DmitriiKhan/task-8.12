arr = [null, undefined, {}, 1,2,3,4,5,6];
zero = 0;
even = 0;
odd = 0;
nullElement = 0;
otherElement = 0;

for (i = 0; i < arr.length; i++) {

    if (arr[i] === null) {
        nullElement = nullElement + 1;
    } else if (isNaN(+arr[i]) === false && typeof (+arr[i]) === 'number') {
        if (arr[i] === 0) {
            zero = zero + 1;
        } else if (arr[i] % 2 === 0 && arr[i] !== null) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }

    } else {
        otherElement = otherElement + 1;
    }

}

console.log('Ноль - ' + zero);
console.log('Чётные числа - ' + even);
console.log('Нечётные - ' + odd);
console.log('Null - ' + nullElement);
console.log('Прочее - ' + otherElement);