setTimeout(function(){
    console.log("hello moto sir")
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});