//for loop
for (let i = 0; i < 5; i++) {
    console.log("vanilohana");
}

//whie loop
{
    let i = 0;
    while (i < 5) {
        console.log("vani lohana");
        i++
    }
}
//do while loop -> run at least once
{
    let i = 20;
    do {
        console.log("vani lohana");
        i++
    } while (i < 10)
}

//for-of loop -> print character one by one in strings  :used for strings and arrays
let str = "vani lohana";
for (let i of str) {
    console.log(i);
}

//for-in loop ->used for objects
let student = {
    name: "vani",
    age: 20,
    cgpa: 3.66,
    isPass: true,
};
for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}