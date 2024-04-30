// let arr=[1,2,3,4,5]
// let print=function(el){
//     console.log(el);
// }

// arr.forEach(print);

// //by normal function
// arr.forEach(function(el){
//     console.log(el);
// });

// //by arrow function

// arr.forEach((el)=>{
//     console.log(el);
// });



// for objects
// let arr=[
//     {
//         name:"devesh",
//         marks:99,
//         subject:"Maths"
//     },
//     {
//         name:"Vishnu",
//         marks:100,
//         subject:"Maths"
//     },
//     {
//         name:"lakhraj",
//         marks:100,
//         subject:"Math",
//     },
// ];

// arr.forEach((student)=>{
//     console.log(student)
//     console.log(student.marks)

// });

// let num=[1,2,3,4];

// let double=num.map((el)=>{
//     console.log(el*2,"double")    
//     console.log(el*el,"square")
// })




// let student=[
//     {
//         name:"devesh",
//         marks:99.9
//     },
//     {
//         name:"VishnU",
//         marks:100
//     },
//     {
//         name:"Shyam",
//         marks:99.9
//     }
// ]

// let percentage=student.map((el)=>{
//     return el.marks/100*100
// })
// console.log(percentage)




// let num=[1,5,6,4,7,8,9,2,3];

// let even=num.filter((el)=>{
// return el%2==0;
// })
// console.log(even);



// console.log([2,4,6].every((el)=>el%2==0));
// console.log([2,4,5].every((el)=>el%2==0));
// console.log([5,7,9].every((el)=>el%2!=0));
// console.log([5,7,8].every((el)=>el%2!=0));


// let num=[1,2,3,4]
// let result=num.reduce((acc,rel)=>{
//     console.log(acc)
//     // console.log(rel)
//     return acc+rel
// })
// console.log(result)

// let arr=[7,8,9,5,6,4,3,2,1];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max < arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max)

// let max=arr.reduce((maximum,rel)=>
// {
//     if(maximum < rel){
//         return rel;
//     }
//     else{
//         return maximum;
//         }
// })

// console.log(max);

// function sum(a,b=2){
//     return a+b;
// }

// // invalid
// function sum(a,b=2){
//     return a+b;
// }
// function sum1(a=2,b){
//     return a+b;
// }

// let arr=[1,2,3,4,5];
// let newArr=[...arr];
// let chars=[..."hello"];

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];

// let nums=[...odd,...even]


// const data ={
//     email:"ironman@gmail.com",
//     password:"abcd",
// };
// const dataCopy= {...data,id:"123"};

// let arr=[1,2,3,4,5];//val
// let obj1={...arr};

// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("You gave us argument",args[i])
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments.length);
//     arguments.push();
// }



// function sum(...args){
//     return arguments.reduce((sum,el)=>sum+el);
// }
// function sum(...args){
//     return (args.reduce((sum,el)=>sum+el));
// }


// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }




// let names=["tony","bruces","steve","peter"];
// let winner=names[0];
// let runnerup=names[1];
// let secondrunnerup=names[2];

// let names1=["tony","bruces","steve","peter"];
// let [winner1,runnerup1,secondrunnerup1]=names1;

// let names2=["tony","bruces","steve","peter","harry","234","Asd"];
// let [winner2,runnerup2,...others]=names2;


// const student={
//     name:"karan",
//     age:14,
//     class:9,
//     subjects:["hindi","english","math","science"],
//     username:"karen@123",
//     password:"abcd",
//     city:"delhi"
// }

//let username=student.username;

// let {username,user,password}=student;
// console.log(student);


// let {username:user,password:secret,city:located="newdelhi"}=student;








