// function x(){
//     var i=10;
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("Nameste javascript");
// }
// x();

function x(){
    for (var i=0;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    } 
    console.log("Nameste javascript");
}
x();

function x(){
    for (let i=0;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    } 
    console.log("Nameste javascript");
}
x();