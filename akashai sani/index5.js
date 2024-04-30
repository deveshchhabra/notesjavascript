// function a(){
//     console.log(b);
// }
// var b=10;
// a();

// case2
// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b=110;
// a();

// case3
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();
