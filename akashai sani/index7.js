//          function x(){
//     let a=10;
//     {
//         function y(){
//             console.log(a);
//         }
//         y();
//     }
// }
// x();



// function x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();


// function x(){
//     let a=7;
//     return function y(){
//         console.log(a);
//     }

// }
// var z=x();
// console.log(z);
// z();


// function x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();


function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

