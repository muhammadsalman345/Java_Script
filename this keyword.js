// // in obj refer only object

// obj ={

//     name:"salman",
//     nam2:"salmN2",

//     name3: function fisrt(params) {


//         console.log(this.name);
        
//     },
//     name4:()=>{
        
//       console.log(this.nam2);  
//     }
    
    
// }

// obj.name3();
// obj.name4();

// in regular fucntion refer globaly
// in object use of this
// let var aur const k bht bngay hain 

var a =10
console.log(this.a);
function thisthis() {
    console.log(this);
     console.log(this.a);
    console.log( a);
}

thisthis()


let a={

    nar:"shehaz",
    nar2:function name(params) {
        
    }
} 


// note  this mostly used to this in use in objects



let obj ={

    name:"xyz",

    getname: function() {

        console.log(this);
        return this.name;
        
    }
}
console.log(obj.getname());