
//-------------//currying/---------------------//



// let multiply=function(x,y){
//     console.log(x*y)
// }


//------>instead of this currying method 
// let multiply=function(y){
//     let x=2
//     console.log(x*y)
// }

// let multiplybytwo=multiply.bind(this,2)
// multiplybytwo(3)


// let multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplybytwo=multiply(3);
// multiplybytwo(3);