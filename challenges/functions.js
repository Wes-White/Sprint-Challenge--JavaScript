// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let consume = function (a, b, cb){ 
  return cb(a, b)
}

let add = function(a, b){ 
  return a + b
}

let multiply = function(a, b){ 
  return a * b
}

let greeting = function(a, b){ 
  return `Hello ${a} ${b}, nice to meet you!`
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:  

// The nestedFunction can access the variable 'internal' because it is within the lexical scope and do to closures it will have access. Since 
// Since nestedFunctionis a  function within  myFunction wish is also a function the inner function in this case nestedFunction will have access to outer functions and variables. 



const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();