export {};

// Using arrow function to filter string values that equal "Ace"
function onlyTheAces(arr: string[]) {
    return arr.filter(word => word == "Ace");
};

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
