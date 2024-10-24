// Modules protectes their variables and functions from leaking

console.log("Sum Module Executed");

var x="Hello World";

function calculateSum(a,b) {
    const sum=a+b;

    console.log(sum);
}

module.exports={    // remember spell "exports" not "export"
    x:x,
    calculateSum:calculateSum,
};   // remember spell "exports" not "export"
