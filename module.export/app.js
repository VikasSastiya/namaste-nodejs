// require("./xyz.js");   // this file will run then below code will run
// (one module into another)
// const {obj}=require("./sum.js");
const {x,calculateSum}=require("./sum.js");   // we can also write above code like this (called as object destructuring) 
// const {calculateSum}=require("./sum.js")
//   import { calculateSum,x } from "./sum.js";


var name="Namaste NodeJS";

var a=10;

var b=20;


// console.log(name);
// console.log(a+b);
   calculateSum(a,b); // it will not work simply writing this

// if you type "window" in console in browser you find a big object, to find global object in node type below syntex
// console.log(global);
// console.log(this);   // empty object
// console.log(globalThis);
console.log(x) 