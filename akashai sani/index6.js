// if(true){
//     var a=10;
//     console.log(a);
// }

// {
//     var a=101;
//     const b=110;
//     let c=255;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);


//     let b=10;
//     var a=20;//----->shadowing
//     const c=30;
// {
//     var  a=100;
//     const b=200;
//     let c=300;
//     console.log(a);//->a=10
//     console.log(b);//->
//     console.log(c);
// }
// console.log(a); ///->a=100
// console.log(b);
// console.log(c);

const c  = 100;
function x(){
    const c = 30;
    console.log(c);
}
x();
console.log(c);


//--<ill-legal shadowing-->//
// let a=20;
// {
//     var a=10;
// }

// let a=20;

// function x(){
//     var a=20;
// }


// lexal scopr

const a=20;
{
    const a=100;
    {
        const a=200;
        
    }
}
console.log(a);