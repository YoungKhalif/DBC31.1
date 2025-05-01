let inventory = [
    { id: 1, name: "Laptop", price: 1000, stock: 5 },
    { id: 2, name: "Phone", price: 500, stock: 10 },
    { id: 3, name: "Tablet", price: 300, stock: 0 }
    ];

    let manageInventory = (items, action) => {
        switch (action.type) {
        case "filterStock":
            let minStock = action.minStock || 0;
            return items.filter(item => item.stock > minStock);
        
        case "highValue":
            return items.filter(item => item.price > 600);
        
        case "summary":
            return items.reduce((acc, item) => {
            return {
                totalValue: acc.totalValue + (item.price * item.stock),
                itemCount: acc.itemCount + 1
            };
            }, { totalValue: 0, itemCount: 0 });
        
        default:
            return items;
        }
    };

    // Test cases
    console.log("--- Filter Stock (default minStock 0) ---");
    let inStockItems = manageInventory(inventory, { type: "filterStock" });
    console.log(`In stock items: ${JSON.stringify(inStockItems)}`);

    console.log("\n--- Filter Stock (minStock 5) ---");
    let highStockItems = manageInventory(inventory, { type: "filterStock", minStock: 5 });
    console.log(`Items with stock > 5: ${JSON.stringify(highStockItems)}`);

    console.log("\n--- High Value Items (price > 600) ---");
    let expensiveItems = manageInventory(inventory, { type: "highValue" });
    console.log(`High value items: ${JSON.stringify(expensiveItems)}`);

    console.log("\n--- Inventory Summary ---");
    let inventorySummary = manageInventory(inventory, { type: "summary" });
    console.log(`Summary: Total value = $${inventorySummary.totalValue}, Item count = ${inventorySummary.itemCount}`);