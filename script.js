//Prompt visitor for flavors
const visitor = prompt("vanilla,vanilla,strawberry,coffee,coffee");

const flavors = visitor.split(',')

const flavorCounts = {};

flavors.forEach(flavor => {
    flavor = flavor.trim();
    if (flavor) {
        flavorCounts[flavor] = (flavorCounts[flavor]|| 0) + 1;
    }
});

console.table(flavorCounts);    

if (!visitor) {
     console.log("No flavors enetered!");
}
