// 1.ways to print inn javascript//
// console.log('hello world')
// alert("me");
// document.write("this is document");

//2 Javascript console api
// console.log('hello world,',(4+6),'another');
// console.warn("warning");
// console.error("this is error ");
// // console.clear()
// console.assert(4==6)

//3 Javascript Variables
// what is container?container to stores data values
// const number1=16;
// const number2=56;
// console.log(number1+number2);

// Data types in javascript 

// Number

// const num1=455;
// const num2=57.57;

// String

// const str1="This is a string";
// const str2="This is also a string";

// object 
// const marks={
//     ravi:34,
//     shubham:78,
//     harry:99.9771

// }
// console.log(marks);

// Boolean 
// const a=true;
// const b=false;
// console.log(a);

// // banaa di gyii hai 
// const und=undefined;
// console.log(und);

// const n=null;
// console.log(null);

/* there are two types in data types in javascript 
1.primitive data types :undefined,null,number,string,boolean,symbol
2.reference data types:arrays and object 
*/
// var  arr=[1,2,"devesh",4,5]


// arithemetics operater
// const a=100;
// const b=10;
// console.log("The value of a+b",a+b)
// console.log("The value of a-b",a-b)
// console.log("The value of a*b",a*b)
// console.log("The value of a/b",a/b)

// assignment operater

// var c=b;
// c+=2;
// c=21;
// c-=2;
// console.log(c)


// comparison operater 
// const x=34;
// const y=36;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// Logical operater 
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false  ||false);

// logical not
// console.log(!true);


// fuction in javascript 
// do not repeat iteself 
// function avg(a,b){
//     c=a+b/2;
// return c;
// }


// c1=avg(4,6)
// c2=avg(14,16)
// console.log(c1,c2)


// --->blue represent number
// --->black represt string 
// const age=50;
// if(age<19){
//     console.log('You can drink ransna water')
// }
// else{
//     console.log('you yoy drink ')
// }

// if -else ladder 

// const age=50;

// if(age>20){
//     console.log("You are a kid")

// }
// else if (age<56){
//     console.log("You are a  not a kid")

// }
// else{
//     console.log('mere bache')
// }

//
// 

// const arr=[1,2,3,4,5,6];
// console.log(arr);


// loops --->in javascript 
 

// for(var a=0;a<arr.length;a++){
//     if(a==2){
            /* break and continue statement*/ 

//         // break; //---->chodo aur bhar nikalo 
//         continue; //--->isse iteration ko cancel 
//     }
//     console.log(arr[a])
// }
// arr.forEach(function(element){
// console.log(element)
// })


// console.log('end of ladder')

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);


// let myARR=["FAN","CAMERA",34,null,true]
// ARRAY METHOD 
// console.log(myARR.length);
// myARR.pop()
// console.log(myARR)
// myARR.push("FAN")
// console.log(myARR)
// myARR.shift()
// // myARR.unshift("CAMERA")
// const new_length=console.log(myARR.unshift("CAMERA"))

// console.log(new_length)

// array method 
// d=[1,4,6,44,53,33243]

// // first covert into string then set values like a string 

// console.log(d.sort())


// string method 
// let myLovely="Harry good is good boy";
// console.log(myLovely.length)
// console.log(myLovely.indexOf("good"))
// console.log(myLovely.lastIndexOf("good"))


// dates 
// let mydates=new Date();
// console.log(mydates.getTime());
// console.log(mydates.getFullYear());
// console.log(mydates.getDay());
// console.log(mydates.getMinutes());
// console.log(mydates.getHours());


// DOM MANULATION 
// let elem=document.getElementById('click');
// console.log(elem);

// let elemClass=document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].style.background="yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem[0].innerHTML);
// console.log(elem[0].innerText);


// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);


// tn=document.getElementsByTagName('button');
// console.log(tn);
// tn=document.getElementsByTagName('div')
// console.log(tn);
// createdElement=document.createElement('p');
// createElement.innerText="This is created para"
// tn[0].appendChild(createdElement);



// const arr=[1,2,3,4]
// console.log("----------------------")
// console.dir(arr)

// let a=20
// let b
// =
// 221111111111111111
// console.log(b)
// // let a
// // a=3
// // console.log(a)

// // let a;
// // a=3555555555;
// console.log(a);

let y = x + f
(a+b).toString()
console.log(y)