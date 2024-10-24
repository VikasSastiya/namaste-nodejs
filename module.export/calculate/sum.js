// Modules protectes their variables and functions from leaking

console.log("Sum Module Executed");

z="Hvmv"  // this will not showing error in cjs but showing in ejs
// export var x="Hello World";
 var x="Hello World";

// export function calculateSum(a,b)  {   // now we can directly export function like this by changing type:"module" in package.json
     function calculateSum(a,b)  {  
    const sum=a+b;

    console.log(sum);
    
}

console.log(module.exports);  // when we console module.export it shows empty object

module.exports={    // remember spell "exports" not "export"
    x,calculateSum,     // or we can write simply module.exports={x,calculateSum}
};   // remember spell "exports" not "export"

//  we can also write this as
// module.exports.x=x;
// module.exports.calculateSum=calculateSum;