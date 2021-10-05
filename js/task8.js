let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]

]);

for (let elem of fruits) { 
    console.log(`Ключ - ${elem[0]}, Значение - ${elem[1]}`);
}