console.log("Arrays are mutable");

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Q: Marks of students -> [85,97,44,37,76,60] calculate the average marks of the entire class
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

}
let avg = sum / marks.length;
console.log("Sum = " + sum);
console.log("Average of marks = " + avg);

// Q: prices of 5 items -> [250,645,300 ,900 ,50] ,all items have 10% off .change the array and store the final results.

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
    let discount = items[i] / 10;
    items[i] -= discount;

}
console.log("Prices after discount : " + items);


//push ->add items in end
//  pop -> remove item from end
//unshift -> add item at start
//shift -> remove item from start

let foodItems = ["litchi", "choclates"];
foodItems.unshift("toffies");

console.log(foodItems);

foodItems.shift();
console.log(foodItems);

//concat
let marvelHeroes = ["thor", "spiderman", "ironman"];

console.log(marvel);
let dcHeroes = ["superman", "batmen"];
marvelHeroes.shift();

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);


