// Question 1
let price = 100;
const taxRate = 0.1;
let quantity = 3;

let totalPrice = price * quantity * (1 + taxRate); // 100 * 3 * (1 + 0.1) = 330
console.log(totalPrice); // 330

quantity = 5; // Update quantity
totalPrice = price * quantity * (1 + taxRate); // 100 * 5 * (1 + 0.1) = 550
console.log(totalPrice);

// Question 2
let score = 95;
console.log(typeof score);

let message = "Great job!";
console.log(typeof message);

let isPassing = true;
console.log(typeof isPassing);

let grades = [90, 85, 88];
console.log(grades[1]);

let student = {name: "Emma", age: 20};
console.log(student.name);


// Question 3
let a = 10, b =3;
//arithmetic
console.log(a + b); 
console.log(a % b);
console.log(a ** 2);

//comparison
console.log(a > b)
console.log(a === b);

//logical
console.log((a > 5) && (b < 5));

//assignment
a +=5;
console.log(a);

//typeCoercion
console.log(5 == "5"); //true

console.log(5 === "5"); //false