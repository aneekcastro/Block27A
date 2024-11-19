// Prompt visitor for froyo flavors
const visitor = prompt("Enter froyo flavors separated by commas:");

if (visitor) {
    // Function to count the frequencies of elements in an array
    function countFlavors(input) {
        const flavors = input.split(',');
        const flavorCounts = {};
        flavors.forEach(flavor => {
            flavor = flavor.trim();
            if (flavor) {
                flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
            }
        });
        return flavorCounts;
    }

    // Call the function and display the result
    const flavorCounts = countFlavors(visitor);
    console.table(flavorCounts);
} else {
    console.log("No flavors entered!");
}