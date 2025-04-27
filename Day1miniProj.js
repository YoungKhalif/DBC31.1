let income = 1000; //(monthly income)
let rent = 400;
let groceries = 150;
let savingsRate = 0.2; //(20% of remaining income)

// Calculate
//Total expenses (rent + groceries)
let totalExpenses = rent + groceries;
console.log(totalExpenses);

//Remaining income (income - totalExpenses)
let remainingIncome = income - totalExpenses;
console.log(remainingIncome);

// Savings amount (remaining * savingsRate)
let savingsAmount = remainingIncome * savingsRate;
console.log(savingsAmount);

// Final balance (remaining - savings)
let finalBalance = remainingIncome - savingsAmount;
console.log(finalBalance);

//Store results in an object budget with properties: totalExpenses, remaining, savings, balance.
let budget = {totalExpenses,  remainingIncome,  savingsAmount,  finalBalance};
console.log(budget);


//Print the budget object and a summary string (e.g., "Balance after savings: $450").
console.log(`The total expenses amounted to: $${budget.totalExpenses}`);
console.log(`The remaining income is: $${budget.remainingIncome}`);
console.log(`The savings amount is: $${budget.savingsAmount}`);
console.log(`The final balance is: $${budget.finalBalance}`);
