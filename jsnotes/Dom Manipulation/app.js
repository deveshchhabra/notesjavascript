// let p=document.querySelector("p")

// p.addEventListener("click",function(){
//     console.log("Para was clicked")
// })

// let box=document.querySelector(".box")
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside div")
// })



let  btn=document.querySelector("button")


//event
//eve
//e
// btn.addEventListener("click",function(e){
//     console.log(e);

//     console.log("button clicked");
// })


btn.addEventListener("dblclick",function(e){
    console.log(e);

    console.log("button clicked");
})



































// let btn=document.querySelectorAll("button");
// console.log(btn);

// for(btn of btn){
//     // btn.onclick=sayHello;
//     // btn.onclick=sayName;
//     // btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double Clicked")
//     });

// }

// btn.onclick=function(){
//     console.log("button was clicked")
//     alert("button was clicked")

// }


function sayHello(){
    alert("Hello!");
}


function sayName(){
    alert("name");
}
// btn.onclick=sayHello;