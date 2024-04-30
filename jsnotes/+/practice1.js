
// const student={
//     name:"dev",
//     age:28,

// };

// let tudent2={
//     fame:"ved",
//     tage:410,
// }

// let find='name' in student ;
// let find=student.hasOwnProperty('name')
// console.log(find)

// for(key in student){
//     let value;
//     value=student[key];
//     console.log(key+"-"+value);
// }

// for(let [key,value] of Object.entries(student)){
    
//     console.log(key+"-"+value);
// }

// program to loop through an object using for...in loop

// let obj=Object.assign(student,tudent2);

// let ib={...student, ...tudent2}
// console.log(ib)


// const result=Object.keys(student).length;
// console.log(result)


// let string="IamtheBose"
// let split1=string.split('a')
// let result=split1.join('A')
// console.log(result);



//Diffferent set of opereration 

// const union=(a,b)=>{
//     let unionset=new Set(a)
//     for(i of b){
//         unionset.add(i)

//     }
//     return unionset;

// }
// const intersetion=(a,b)=>{
//     let intersect=new Set();
//     for(let i of b){

//     if(a.has(i)){

//         intersect.add(i);
//     }

// }
// return intersect;
// }
// const a=new Set(["apple","mango","banana"])
// const b=new Set(["grapes","apple","strawberry","apple"])

// console.log(union(a,b));
// console.log(intersetion(a,b));

// let chunck=(arr,part)=>{

// for(let i=0;i<arr.length;i+=part){
//     let tempArry;
//     tempArry=arr.slice(i,i+part);
//     console.log(tempArry)
// }
// }


// let chunck=(arr,part)=>{
//     while(arr.length>0){
//         let tempArry;
//         tempArry=arr.splice(0,part)
//         console.log(tempArry)
//     }

// }

// const arr=[1,2,3,4,5,6,7,8]
// const part=3;
// chunck(arr,part);



// let student=[{name:"dev",age:63},{name:"Virbadra",age:48}]

// console.log(student.sort(function(a,b){return a.age-b.age}));
// console.log(student.sort(function(a,b){return a.name-b.name}));


// let arr=[]
// for(i=0;i<2;i++){

//         arr[i]=[]
//     }

// for(a=0;a<2;a++){
//     for(b=0;b<3;b++){
//         arr[a][b]=b
//     }
// }
// console.log(arr)

// const expected=(arr,value)=>{
//     return arr.map(item=>item[value])

// }

// const arr=[{a:2,b:3},{a:3,b:2}]
// const value="a"

// console.log(expected(arr,"a"))



// .// revese the string 
//_// check a palindrome or not 
// const str2="Iamthebose"
// const str="dad"
// let split1=str.split('')
// let revese=split1.reduce((res,ed)=>ed+res+"")
// let revese2=split1.reverse().join('')
// console.log(revese2);
// if(str==revese2){
//     console.log('same same')
// }


//_// sort in alphabatical order

// const str1="iamtherose"
// const words=str1.split('')
// words.sort().join('');
// console.log(words.join(''))
// for(i of words){
//     console.log(i)
// }
//



// //_+_+_+_+_//
// let str="iwastheBose"

// let str1=str.replace("was","am")

// console.log(str1)


// //__++---++Check If StartWith +---++//




// if(str.startsWith('Ir')){
//     console.log("yes")
// }

// else{
//     console.log('No')
// }


// if(str.endsWith('e')){
//     console.log("yes")
// }

// else{
//     console.log('No')
// }


// const check=(string,letter)=>{
//     let count=0;
//     for(i=0;i<=string.length;i++){
//         if(str.charAt(i)==letter)
//         count++;
//     }
//     return count;
// }

// let string=prompt('Enter the string')
// let letter=prompt('Enter the letter')

// console.log(check(string,letter))


// //++_+_To Convert the letter +_+_++//
// let str3=str.charAt(0).toUpperCase()+str.slice(1)
// console.log(str3)


// // +++_++_++_++_++_++_++_+
// // 
// const spliting=str.split()
// let count=0;
// const vowel=["a","e","i","o","u"]
// for(letter of string.toLowerCase()){
//     if(vowel.includes(letter)){
//         count++;
//     }
// }
// console.log(count)

// let promise;

// let promise=new Promise(function(resolve,reject){
//     const x="IamtheBose";
//     const y="IamtheBose";
//     if(x==y){
//         resolve();
//     }
//     else{
//         reject()
//     }

// });

// promise
// .then(function(){console.log("IamHAPPY")})
// .catch(function(){console.log('IamnotHPPT')})

// const promse=async()=>{

// }


//check the amtrong number or not 
const number=153
let f21=(number)=>{
    console.log(number)
    let sum=0;
    let temp=number;
    while(temp>0){
       let remainder=number%10;
        sum+=remainder*remainder*remainder;
        temp=parseInt(number/10);
    }
    if(sum==number){
        console.log("sir")

    }

}

f21(number)