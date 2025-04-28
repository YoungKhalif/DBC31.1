let numbers = [12, -5, 20, 7, -3, 15, 8];

//Use loops and conditionals to:
let analysis = {positiveCount: 0, evenSum: 0, maxNumber: numbers[0]};

for (const num of numbers){
    //Count positive numbers.
    if(num > 0){
        analysis.positiveCount++;
    }

    //Sum even numbers.
    if(num % 2 === 0){
        analysis.evenSum += num;
    }

    //Find maximum number.
    if(num > analysis.maxNumber){
        analysis.maxNumber = num;
    }
}
console.log(`Positive Count: ${analysis.positiveCount}`);
console.log(`Even Sum: ${analysis.evenSum}`); 
console.log(`Maximum Number: ${analysis.maxNumber}`); 