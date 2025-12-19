console.log("first program");

//varaibles declaration var,let const

// var can be redaclared with the same varialble name
/*var name = "vani";
var name = "lohana";*/

//let cannot redaclared but can be update
/*let name = "vani";
name = "lohana"; //update*/

//object
const student = {
    fullName: "tisha",
    age: 20,
    cgpa: 3.66,
    isPass: true,


};

console.log(student.age);//first method to print
//if we want to update the value
student["age"] = student["age"] + 1
console.log(student["age"]);//second method to print
