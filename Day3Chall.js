//Task 1
function createFactorial() {
    const cache = {};
  
    return (n) => {
      // Validate input
      if (!Number.isInteger(n) || n < 0) {
        return "Invalid input";
      }
  
      // Check if result is in cache
      if (n in cache) {
        return cache[n];
      }
  
      // Calculate factorial iteratively
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
  
      // Store in cache
      cache[n] = result;
      return result;
    };
  }
  
  // Usage
  const factorial = createFactorial();
  
  const inputs = [5, 7, 5, -3, 3.2, 0];
  inputs.forEach(n => {
    console.log(`Factorial of ${n}: ${factorial(n)}`);
  });

  

//Task 2
const formatString = (str, options = { uppercase: false, reverse: false, trim: false }) => {
    // Validate input
    if (typeof str !== 'string') {
      return "Invalid input";
    }
  
    let result = str;
  
    // Apply transformations
    if (options.trim) {
      result = result.trim();
    }
    if (options.uppercase) {
      result = result.toUpperCase();
    }
    if (options.reverse) {
      result = result.split('').reverse().join('');
    }
  
    return result;
  };
  
  // Usage examples
  const examples = [
    { str: "  Hello World  ", options: { trim: true, uppercase: true } },
    { str: "JavaScript", options: { reverse: true } },
    { str: " Functional ", options: { trim: true, reverse: true } },
    { str: 12345, options: { uppercase: true } },  // invalid
    { str: "  memoize  " }  // defaults
  ];
  
  examples.forEach(({ str, options }) => {
    const result = formatString(str, options);
    console.log(`Formatted result: ${result}`);
  });

  


//Task 3
function createFilter(condition) {
    // Supported conditions
    const validConditions = ["even", "odd", "positive"];
    
    // Validate condition
    if (!validConditions.includes(condition)) {
      return () => "Invalid input";
    }
  
    // Closure to track filter call count
    let callCount = 0;
  
    // Return arrow function that filters array
    return (arr) => {
      if (!Array.isArray(arr)) {
        return "Invalid input";
      }
  
      // Increment call counter
      callCount++;
  
      // Define filter logic
      let filtered = [];
      switch (condition) {
        case "even":
          filtered = arr.filter(num => typeof num === 'number' && num % 2 === 0);
          break;
        case "odd":
          filtered = arr.filter(num => typeof num === 'number' && num % 2 !== 0);
          break;
        case "positive":
          filtered = arr.filter(num => typeof num === 'number' && num > 0);
          break;
      }
  
      return {
        result: filtered,
        callCount
      };
    };
  }
  
  // Usage
  const evenFilter = createFilter("even");
  const oddFilter = createFilter("odd");
  
  const testArrays = [
    [1, 2, 3, 4, 5],
    [-1, -2, 0, 6, 8],
    [10, 15, 20, 25]
  ];
  
  testArrays.forEach(arr => {
    const output = evenFilter(arr);
    console.log(`Even Filter Result: ${output.result}, Call Count: ${output.callCount}`);
  });
  
  testArrays.forEach(arr => {
    const output = oddFilter(arr);
    console.log(`Odd Filter Result: ${output.result}, Call Count: ${output.callCount}`);
  });
  