//Question 1
function calculateArea(width, height = 1) {
    return width * height;
  }
  
  // Test cases
  console.log(`Area with width 5 and height 10: ${calculateArea(5, 10)}`);
  console.log(`Area with width 7 (default height): ${calculateArea(7)}`);

  
  const calculateAreaArrow = (width, height = 1) => width * height;

  // Test cases
  console.log(`Area with width 4 and height 3: ${calculateAreaArrow(4, 3)}`);
  console.log(`Area with width 6 (default height): ${calculateAreaArrow(6)}`);
  


//Question 2
// Global variable
let message = "Global greeting";

// Arrow function with default parameter and local variable
const sayHello = (name = "User") => {
  let message = "Hello from function";
  return `${message}, ${name}!`;
};

// Print global message
console.log(`Global message: ${message}`);

// Call sayHello with argument
console.log(sayHello("Alice"));

// Call sayHello without argument (uses default "User")
console.log(sayHello());
