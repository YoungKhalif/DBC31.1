// Task array
const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 }
  ];
  
  // Closure for tracking function calls
  const createPrioritizeTasks = () => {
    let counter = 0; // closure variable
  
    // prioritizeTasks function
    const prioritizeTasks = (taskList, minPriority = 1) => {
      counter++;
  
      // Filter and sort tasks
      const prioritized = taskList
        .filter(task => task.priority >= minPriority)
        .sort((a, b) => b.priority - a.priority);
  
      // Print results
      console.log(`\nCall #${counter}: Minimum Priority = ${minPriority}`);
      console.log(`Prioritized Tasks:`);
      prioritized.forEach(task =>
        console.log(`- ${task.name} (Priority: ${task.priority})`)
      );
  
      return prioritized;
    };
  
    // Expose the function and counter for testing
    return prioritizeTasks;
  };
  
  // Create an instance of the closure
  const prioritizeTasks = createPrioritizeTasks();
  
  // Test calls with different minimum priorities
  prioritizeTasks(tasks);        // Default minimum (1)
  prioritizeTasks(tasks, 2);     // Minimum 2
  prioritizeTasks(tasks, 3);     // Minimum 3
  