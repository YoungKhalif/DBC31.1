//Task 1
let islimit = 20;

let primes = [];

//loop from 2 to limit
for(let num = 2; num <= islimit; num++){
    let isPrime = true;

    //check divisibility up to square root of num
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            isPrime = false;
            break;
        }
    }

    //if prime, add to primes array
    if(isPrime){
        primes.push(num);
    }
}

//print primes using forEach and template literals
primes.forEach(prime => {
    console.log(`Prime number found: ${prime}`);
});


//Task 2
let text = "Hello World";

//convert to lowercase and remove non-letters
let cleanText = text.toLowerCase().replace(/[^a-z]/g, "");

//object to store character counts
let counts = {};

//loop through each character
for (const char of cleanText) {
    if (counts[char]){
        counts[char]++;
    }else {
        counts[char] = 1;
    }
}

//print the counts object using template literals and JSON.stringify
console.log(`Character counts: ${JSON.stringify(counts)}`);


//Task 3
let rules = {3: "Fizz", 5: "Buzz", 7: "Bang"};
let limit = 21;

//create an array of numbers from 1 to limit
let numbers = Array.from({length: limit}, (_, i) => i + 1);

//process each number
numbers.forEach(num => {
    let output = "";

    //check divisibility against each rule
    for (const key in rules){
        if (num % key === 0){
            output +=rules[key];
        }
    }

    //if output is empty, use the number
    if (output === ""){
        output = num;
    }

    //print result using template literals
    console.log(`${output}`);
});