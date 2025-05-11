// Using an example, explain the difference between block,global and function scope in variables.
"Global Scope"
"A variable declared outside any function or block is in the global scope — accessible anywhere in your code."

"Function Scope"
"A variable declared inside a function using var, let, or const is in function scope — accessible only within that function."

"Block Scope"
"A variable declared with let or const inside a block (like inside {} of an if, for, or while) is in block scope — accessible only within that block."

let globalVar = "I'm global"; // Global scope

function myFunction() {
  var functionVar = "I'm in a function"; // Function scope

  if (true) {
    let blockVar = "I'm in a block";
    console.log(globalVar);
    console.log(functionVar);
    console.log(blockVar);
  }

  console.log(globalVar);
  console.log(functionVar);
  // console.log(blockVar);
}

myFunction();

console.log(globalVar);
// console.log(functionVar);
// console.log(blockVar);
