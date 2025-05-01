//Task 1
    let flattenObject = (nestedObj, parentKey = '') => {
        let flatObj = {};
    
        Object.entries(nestedObj).forEach(([key, value]) => {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
    
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively flatten nested objects
            flatObj = { ...flatObj, ...flattenObject(value, newKey) };
        } else {
            // Add the key-value pair to the flat object
            flatObj[newKey] = value;
        }
        });
    
        return flatObj;
    };
    
    // Test cases
    let nestedUser = {
        user: {
        name: "Alice",
        age: 25,
        address: {
            street: "123 Main St",
            city: "Wonderland",
            coordinates: {
            lat: 42.123,
            lng: -71.456
            }
        }
        },
        preferences: {
        theme: "dark",
        notifications: true
        }
    };
    
    console.log("--- Flattened Object ---");
    let flatUser = flattenObject(nestedUser);
    console.log(`Flattened object:\n${JSON.stringify(flatUser, null, 2)}`);
    
    let simpleNested = {
        a: 1,
        b: {
        c: 2,
        d: {
            e: 3
        }
        }
    };
    
    console.log("\n--- Simple Nested Object ---");
    console.log(`Flattened simple object:\n${JSON.stringify(flattenObject(simpleNested), null, 2)}`);





//Task 2
    let groupBy = (array, key) => {
        return array.reduce((accumulator, currentItem) => {
        let groupKey = currentItem[key];
        
        // If the group doesn't exist yet, create it with an empty array
        if (!accumulator[groupKey]) {
            accumulator[groupKey] = [];
        }
        
        // Add the current item to its group
        accumulator[groupKey] = [...accumulator[groupKey], currentItem];
        
        return accumulator;
        }, {});
    };
    
    // Test data
    let products = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999 },
        { id: 2, name: "Shirt", category: "Clothing", price: 25 },
        { id: 3, name: "Phone", category: "Electronics", price: 699 },
        { id: 4, name: "Pants", category: "Clothing", price: 45 },
        { id: 5, name: "Book", category: "Stationery", price: 15 }
    ];
    
    let people = [
        { name: "Alice", age: 25, city: "New York" },
        { name: "Bob", age: 30, city: "Chicago" },
        { name: "Charlie", age: 25, city: "New York" },
        { name: "David", age: 35, city: "Chicago" }
    ];
    
    // Test cases
    console.log("--- Products Grouped by Category ---");
    let productsByCategory = groupBy(products, 'category');
    console.log(`Electronics: ${productsByCategory.Electronics.length} items`);
    console.log(`Clothing: ${productsByCategory.Clothing.length} items`);
    console.log(`Stationery: ${productsByCategory.Stationery.length} items`);
    console.log(JSON.stringify(productsByCategory, null, 2));
    
    console.log("\n--- People Grouped by Age ---");
    let peopleByAge = groupBy(people, 'age');
    console.log(`25 year olds: ${peopleByAge[25].length} people`);
    console.log(`30 year olds: ${peopleByAge[30].length} people`);
    console.log(`35 year olds: ${peopleByAge[35].length} people`);
    console.log(JSON.stringify(peopleByAge, null, 2));





//Task 3
    let transformData = (array, config = {}) => {
        // Input validation
        if (!Array.isArray(array)) {
        throw new Error('First argument must be an array');
        }
        if (typeof config !== 'object' || config === null) {
        throw new Error('Second argument must be a configuration object');
        }
    
        let { rename = {}, filter = {}, add = {} } = config;
    
        return array
        // Filter items based on filter conditions
        .filter(item => {
            return Object.entries(filter).every(([key, value]) => {
            return item[key] === value;
            });
        })
        // Transform each item
        .map(item => {
            // Rename properties
            let renamedItem = Object.entries(rename).reduce((acc, [oldKey, newKey]) => {
            if (item.hasOwnProperty(oldKey)) {
                acc[newKey] = item[oldKey];
                delete acc[oldKey];
            }
            return acc;
            }, { ...item });
    
            // Add new properties
            return { ...renamedItem, ...add };
        });
    };
    
    // Test data
    let employees = [
        { id: 1, name: 'John Doe', department: 'Engineering', level: 'Senior', active: true },
        { id: 2, name: 'Jane Smith', department: 'Marketing', level: 'Junior', active: false },
        { id: 3, name: 'Mike Johnson', department: 'Engineering', level: 'Mid', active: true },
        { id: 4, name: 'Sarah Williams', department: 'HR', level: 'Senior', active: true }
    ];
    
    // Configuration
    let config = {
        rename: {
        name: 'fullName',
        department: 'dept'
        },
        filter: {
        active: true
        },
        add: {
        company: 'TechCorp',
        yearHired: 2023
        }
    };
    
    // Test case
    console.log("--- Original Data ---");
    console.log(JSON.stringify(employees, null, 2));
    
    console.log("\n--- Transformed Data ---");
    let transformedEmployees = transformData(employees, config);
    console.log(JSON.stringify(transformedEmployees, null, 2));
    
    // Additional test with partial config
    console.log("\n--- Partial Transformation (only rename) ---");
    let partialConfig = { rename: { name: 'employeeName' } };
    console.log(JSON.stringify(transformData(employees, partialConfig), null, 2));