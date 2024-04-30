// "use strict";
// console.log(this)

// function x(){
//     console.log(this)
// }
// x();
// window.x();

// const obj={
//     a:10,
//     x:function (){
//         console.log(this)
//     },
// };
// obj.x();


// const student={
//     name:"Aksahay",
//     printName:function(){
//         console.log(this.name)
//     },
// }
// student.printName();
// const student2={
//     name:"devesh",
// }
// student.printName.call(student2)


// const obj={
//     a:10,
//     x:()=>{
//         console.log(this)
//     }
// }
// obj.x();

// const obj2={
//     a:10,
//     x:function(){
//         const y=()=>{
//             console.log(this)
//         }
//         y();
//     }
// }
// obj2.x();

// //count the number of vowel
// let vowel=["a","e","i","o","u"]
// let count=0;
// let countVowel=(string)=>{
//     for(i of string){
//         if(vowel.includes(i)){
//             count++;
//         }
//     }
//     return count

// }
// console.log(countVowel("devesh"))

// //check for the substring
// let checkforthesubstring=(string1,string2)=>{
//     if(string1.includes(string2)){
//         return true;
//     }
// }
// console.log(checkforthesubstring("devesh","dev"))

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i)
//     }, 3000);
//     console.log("nameste Javascript")
// }
// x()


// function x(){
//     for(i=0;i<=5;i++){
//         console.log(i)

//         setTimeout(function(){
//             console.log(i)
//         }, i*1000);
//     }
//     console.log("nameste Javascript")
// }
// x()


