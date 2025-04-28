// If Statements for Grading
let score = 88;

let grade;

if (score >= 90){
    grade = "A";
}else if (score >= 80){
    grade = "B";
}else if(score >= 70){
    grade = "C";
}else{
    grade = "F";
}
console.log(`Score ${score} earns Grade: ${grade}`); // Grade: B


//For Loop with Arrays
let numbers = [10,15,20,25,30];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 5 === 0){
        console.log(numbers[i]);
    }
}
// using for...of
for (let num of numbers){
    if (num % 5 === 0) {
        console.log(num);
    }
}
// using forEach
numbers.forEach(function(num){
    if (num %5 === 0){
        console.log(num);
    }
})



//While Loop Countdown
let count = 10;

while(count > 0){
    console.log(count);

    if (count === 5){
        console.log("Stopped early!");
        break;
    }
    count--;
}
//rewrite the count using a for loop
for (let count = 10; count > 0; count--){
    console.log(count);

    if (count === 5){
        console.log("stopped early");
        break;
    }
}