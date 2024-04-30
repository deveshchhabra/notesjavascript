// // async function greet(){
// //     return "result";
// // }
// // greet()
// //     .then((result)=>{
// //     console.log("Promise was resolved",result);
// // })
// // .catch((err)=>{
// //     console.log("rejected");
// // })


// // async function greet1(){
// //     return ell;
// //     throw "weak";
// // }
// // greet1()
// //     .then(()=>{
// //     console.log("Promise was resolved");
// // })
// // .catch((err)=>{
// //     console.log("rejected");
// // })



// // function getNum()
// //  {
// //     return new Promise((reject,result) =>{
// //         setTimeout(() => {
// //             let num=Math.floor(Math.random()*10)+1
// //             console.log(num);
// //         }, 1000);
// //     })
// // }

// // async function demo(){
// //     await getNum();
// //      getNum();
// //     await getNum();
// // }


// h1=document.querySelector("h1")

// function ColorChange(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num=Math.floor(Math.random()*5)+1;
//             if(num >3){
//                 reject("promise rejected");
//             }
//             h1.style.color=color;
//             console.log(`color Changed${color}`)           
//             resolve("color changed")
//         }, delay);
        
//     });
    

// }
// async function demo(){
// // await ColorChange("italic bold 20px arial,serif",0)
// await ColorChange("red",100)
// await ColorChange("pink",100)

// let a=5;
// console.log(a);
// console.log("new number=",a+3);
// }

let jsonRes=
'{"fact":"appromaxitmatl","length":70}'

let validRes =JSON.parse(jsonRes);
console.log(validRes)
console.log(validRes.fact)



let student={
    name:"devesh",
    marks:95
};
console.log(JSON.stringify(student))

// console.log(a);
// console.log("new number=",a+3);