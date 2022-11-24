
// const a=[1,2,3,4,5,6,7]
// for (let i = 0; i < 7; i++) {
// 		setTimeout(()=>console.log(a[i]),10000)
// }
// for (var b = 0; b < 7; b++) {
// 	setTimeout(()=>console.log("var",a[b]),5000)
// }


function a(x){
    for (var i= 1; i<=3; i++){
        
        setTimeout(function log(){
            console.log(   i * x);
        }, 1000)
    }
}
a(2);

function b(c){
    for (let i= 1; i<=3; i++){
        
        setTimeout(function log(){
            console.log("2nd",   i * c);
        }, 1000)
    }
}
b(3);