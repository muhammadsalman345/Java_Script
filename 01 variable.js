
// there three types of variable 

// var let const 

// var here is is working

var variable=10;

console.log(variable);
console.log(variable);

// here again declear

console.log(agrain_variable); // here undefined becase js excute line by line
var agrain_variable= 19;
console.log(agrain_variable);


// here give value 

variable= 30;
console.log(variable);// get latest vaue becase store in stack


// now check scope 

var variablescope= 100;

{

    console.log(variablescope);

    
var blok=101

}
console.log(blok);// becase only functinal scope


function scope(params) {
    

    var func = 102

    console.log(102);

    // if we declear with_out data type 
    // than the have window scope becase window is also fucntionn

    variwithout = 555;
}

scope()
// console.log("here funcrt",func); here eror becase function scop 

console.log(variwithout);


/**---------------------------------end--------------var------------- */

