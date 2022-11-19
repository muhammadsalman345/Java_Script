
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

// now work with let 

let varlet=200;
console.log(varlet);

//  again  declear

// let varlet=2001; error
// but 
varlet =203;
console.log("lat again reasighn",varlet);

// scope of let


let scoop1=205

{

    console.log("this block",scoop1);
// in block scope 
    let scope2=104
    console.log("delear in block in braket",scope2);
}
// console.log("delear in block",scope2); // here erro
function funlet(){

    console.log("here funcscope_let",scoop1);

    let infunc =110;

    console.log(infunc);
}
// console.log(infunc)  erro because function scope

funlet()

/**---------------------------------end--------------let------------- */

// now working with const 

const constv=500;

console.log("const1",constv);

// constv =501;  again reasign error
{
    console.log("here const",constv); // here error
    const constv2=510;
    
    
}
// console.log("here const",constv2);  erro because blog scope


function cons1(){

    console.log("here in fcin",constv);
    const constv3=600;
}

// console.log(constv3);   error here this is

cons1()


/** Cons ----------------------------  end*/