function reverse(reversePhrase) {

    reversePhrase = prompt('Введите текст');
    reversePhrase = reversePhrase + "";
    return reversePhrase.split("").reverse().join("");

}

console.log(reverse());