//arrow function

const arrowSum = (a, b) => {
    console.log(a + b);
};

const arrowMul = (a, b) => {
    return a * b;
};

const printHello = () => {
    console.log("hello");
};

// Q: create a function that takes string as an argument and return the number of vowels in the string

function vowelsCount(str) {
    let count = 0;
    for (ch of str) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;

        }
    }
    console.log(count);
};

//for each loops in arrays => also known as higher order function which is used to take as a parameter or return in  another funvtion

let arr = ["delhi", "hyderabad", "karachi"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

//Q: print the square of each value in an array using the for each loop

let array = [1, 2, 3];
array.forEach((num) => {
    console.log(num * num);
})

//for each loop used as callback
let nums = [3, 4, 5, 6];
let squares = (num) => {
    console.log(num * num);
}

nums.forEach(squares);

//Reduce method => Performs some operations and reduces the array to a single value.It returns that single value
let values = [1, 2, 3, 4];

const val = values.reduce((prev, curr) => {
    return prev + curr;
})
console.log(val);