// //amstrong number 
// let number = 92727;

// const { Console } = require("console")



// const amstrong=(number)=>{
//     let remainder;
//     let sum=0;
//     let temp=number;
//     while(temp>0){
//         remainder=temp%10;
//         sum+=remainder*remainder*remainder;
//         temp=parseInt(temp/10)
//     } 
//     if(sum === number){
//         console.log('you are best')
//     }
//     else{
//         console.log("you are not best")
//     }
// }

// console.log(amstrong(number));


//Check weith the number is prime or not 
// const number=9;
// const primenumber=(number)=>{
//     let isPrime=true;
//     if(number ===1){
//         console.log('this is the composite number');
//     }
//     else if(number>1){
//         for(i=2;i<number;i++){
//             if(number%i==0){
//                 isPrime=false;
//                 break
//             }
//         }
//         if(isPrime){
//             console.log(`this number is prime number${number}`)
//         }
//         else{
//             console.log(`this is not prime number ${number}`)
//         }
//     }
//     return number;
// }
// console.log(primenumber(number));



// //find the factorial of number 

// let number=10;
// let fact=1;
// for(i=1;i<=number;i++){
//     fact*=i;
// }
// console.log(fact)

// // 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
// let t1=0;
// let t2=1;
// for(i=0;i<=10;i++){
//     let temp;
//     let t3=t2+t1;
//     temp=t1;
//     t1=t2;
//     t2=t3;


// console.log(t3);
// }


//hcf and lcm 



// program to find the HCF or GCD of two integers

// take input
// let number1=1;
// let number2=5;

// while(number1!=number2){
//     if(number1>number2){
//         number1-=number2
//     }
//     else{
//         number2-=number1;
//     }
// }

// console.log(`${number1}`)

// let temp1=13;
// let temp2=26;

// let number1=temp1;
// let number2=temp2;

// while(number1!=number2){
//     if(number1>number2){
//         number1-=number2
//     }
//     else{
//         number2-=number1
//     }
// }

// console.log(`Hcf=${number1}`)
// const lcm=temp1*temp2/number1;
// console.log(`lcm=${lcm}`)


 //Array sort the age 
// const students = [{name: 'Sara', age:24},{name: 'John', age:27}, {name: 'Sackk', age:26}]

// console.log(students.sort(function(a,b){ return   b.age -a.age }))
// console.log(students.sort(
//     function(a,b){ 
//     let name1=a.name.toUpperCase(); 
//     let name2=b.name.toUpperCase();
//     let comparsion=0;
//     if(name1>name2){
//         comparsion=1;
//     }      
//     else{
//         comparsion=-1
//     }
//     return comparsion
// }))


//to create 2darray

// const darr=(a,b)=>{
//     let arr=[];
//     for(i=0;i<a;i++){
//         arr[i]=[]
//     }
//     console.log(arr)
//     for(i=0;i<a;i++){
//         for(j=0;j<b;j++){
//             arr[i][j]=j
//         }
//     }
//     return arr;
// }
// a=2;
// b=3;
// console.log(darr(a,b));

// const expected=(objArray,b)=>{

//     let object=objArray.map(a=>a[b])
//     return object;

// }
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// const result =expected(objArray,"a")
// console.log(result);


//JavaScript Program to Compare Elements of Two Arrays

// const compare=(array1,array2)=>{
//     if(array1.length != array2.length){
//         return false;
//     }
//     else{
//         let result=false;
//         for(i=0;i<array1.length;i++){
//             if(array1[i] !=array2[i]){
//                 return result;
//             }
//             else{
//                 result=true;
//                 return result;
//             }
//         }

//     }
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];

// console.log(compare(array1,array2))

//to get the number -->random 
// const random=(array1)=>{
//     let random=Math.floor(Math.random()*array1.length);
//     console.log(array1[random])

// }
// const array1 = [1, "hello", 8];
// random(array1)


//to get the intersection 

// const intersection=(array1,array2)=>{
//     for(i=0;i<array1.length;i++){
//     if(array1[i]===array2[i]){
//         console.log(array1[i])
//     }}
// }

// const array1 = [1, 2, 5, 6];
// const array2 = [1, 7, 5, 8];
// intersection(array1,array2)

//

//strings
//reverse the string

// const str="MaMaMaM"
// const reverstr=str.split('').reduce((p,a)=>a+p+"")
// console.log(reverstr)
// if(str ===reverstr){
//     console.log('This is the reverse string syntax')
// }
// const word=str.split('')
// console.log(word.sort().join(''))

// const firstcharacter=str.replace("M","D")
// console.log(firstcharacter)
// const Upper=str.toUpperCase()
// console.log(Upper)


// // Count the Number of Vowels Using for Loop
// // a e i o u 

// const Vowels=["a","e","i","o","u"]
// const str1="IloveCoding"
// const checkVowels=(Vowels,str1)=>{
//     let count=0;
//     for(i of Vowels){ 
//         if(str1.includes(i)){ //includes
//             console.log(i)
//             count++
//         }

//     }
//     return count;

// }

// console.log(checkVowels(Vowels,str1));

//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters


// string1="IloveShivBaba"
// const strendstart=(string1)=>{
//     console.log(string1)
    
//     if(string1.startsWith('I') && string1.endsWith('a')){
//         console.log('yes')
//     }

// //    else
//     if(string1.startsWith('I')){
//         console.log('yes')
//     }
    
//      if(string1.endsWith('a')){
//         console.log('Yes')
//     }
    
// }
// strendstart(string1)

// const checkString=(string1)=>{
//     if(string1.includes('love')){
//         console.log('loves')
//     }
// }
// checkString(string1)

// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;


// const result=string.split('\n').join('')
// console.log(result)


// // Generate Range of Characters
// function *iterate(a,b){
//     for(i=a;i<=b;i++){
//         yield i;
//     }
// }

// const range =(a,b)=>{
//     if(typeof a==="string"){
//     //  let result=[...iterate(a.charCodeAt(),b.charCodeAt())].map(n=>String.fromCharCode(n))
//      let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
//     console.log(result.join(''))

//     }
//    else{
//      let result=[...iterate(a,b)]
//     console.log(result)
// }
// }

// range(1,5)
// range("a","g")


// //higher or function 

// const side1=2;
// function square(side1){
//     return side1*side1;
// }
// function  cal(side1,logic){
//     const result=[];
   
//     result.push(logic(side1))
//      return result;

// }
// console.log(cal(side1,square))



// //Array shuffle the cards
// const suits=["spade","diamond","club","heart"]

// const cards=[
//     "A","2","3","4","5","6","7","8","9","10","jack","queen","king"
// ]
// const deck=[]

// for(i=0;i<suits.length;i++){
//     for(j=0;j<cards.length;j++){
//         const card={ suit:suits[i],card:cards[j]}
//         deck.push(card)
    
//     }
// }

// for(p=0;p<=deck.length;p++){
//     const rand=Math.floor(Math.random*i)
//     const temp=deck[p]
//     deck[p]=deck[rand]
//     deck[rand]=temp
// }

// for(i=0;i<6;i++){
//     console.log(`${deck[i].card} of ${deck[i].suit}`)
//     console.log(`happy`)
// }




// const arr=[1,2,3,4]

// arr.sayhello=()=>{
//     console.log("Hello, i am sir");
// };
// const arr2=[1,2,3,4]

// arr2.sayhello=()=>{
//     console.log("Hello, i am sir");
// };

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi,my name is dj nanu${this.name}`);
//         }
//     }
//     return person;

// }




// function Person(name,age){
//     this.name;
//     this.age;
//     // console.log(this)
// }
// Person.prototype.talk=function(){
//     console.log(`Hi,mY name is ${this.name}`)
// }
// let p1 =new Person("adam",25);
// let p2 =new Person("adam",25); 

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi,my name is${this.name}`)
//     }

// }
// let p1=new Person("adam",25)
// let p2=new Person("eve",25)
class Person{ 
    constructor(name,age){
        console.log("person class constructor")
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, i am${this.name}`)
    }
}
class Student extends Person{
    constructor(name,age,marks){
            console.log("student class constructor")
       super(name,age);
        this.marks=marks;
    }
    talk(){
        console.log(`Hi, i am${this.name}`)
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
       super(name,age);   
        this.subject=subject;
    }  
}