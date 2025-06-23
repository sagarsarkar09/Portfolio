// Create a closure that returns a function to add a number to a given value
function createAdder(value) {
    return function (num) {
        return value + num;
    };
    }
// Create an adder function that adds 5
const add5 = createAdder(5);
// Create an adder function that adds 10
const add10 = createAdder(10);
// Use the adder functions
console.log(add5(3));  // Output: 8
console.log(add10(3)); // Output: 13