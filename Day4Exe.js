//Question 1
let scores = [85, 92, 78, 95, 88];

//use map to add 5 points to each score
let updatedScores = scores.map(score => score + 5);
console.log(updatedScores); // [90, 97, 83, 100, 93]

//add 5 points to each score using a for loop
// let updatedScores2 = [];
// for (let i = 0; i < scores.length; i++) {
//     updatedScores2.push(scores[i] + 5);
// }

//use filter to select scores >=90
let highScores = updatedScores.filter(score => score >= 90);
console.log(highScores); // [90, 97, 100, 93]

//print results for updatedScores and highScores using template literals
console.log(`Updated Scores: ${updatedScores}`);
console.log(`High Scores: ${highScores}`);



//Question 2
let student =  { name: "Emma", age: 20, grade: "A", subjects: ["Math", "Science"] };

//destructure name and grade into variables
let { name, grade } = student;

//create a new object profile using shorthand, adding school: "Tech High"
let profile = {...student, school: "Tech High" };

//Print the destructured variables and profile using JSON.stringify
console.log(`Profile: ${JSON.stringify(profile)}`);
console.log(`Name: ${name}, Grade: ${grade}`);