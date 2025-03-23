// //Intersection Using Filter 

// let Intersection=(str1,str2)=>{
//     let str=str1.filter((x)=>str2.indexOf(x)!==-1)
//     // return str;
//     console.log(str);
// }
// let str1=[1,3,4,5];
// let str2=[2,6,4,9];
// Intersection(str1,str2);
// let str1=[1,3,4,5];
// let str2=[2,6,4,9];
//Without using filter
// for(i=0;i<str1.length;i++){
//     for(j=0;j<str2.length;j++){
//         if(str1[i]==str2[j]){
//             console.log(str1[i])
//         }
//     }
// }
// let arr1=[1,2,3,4,5,6]
// function splitArray(chuncks){
//     for(i=0;i<arr1.length;i+chuncks){
//         let arr=arr1.splice(i,i+chuncks);
//         console.log(arr);
//     }
// }
// splitArray(2);

// const array = [1, 'hello', 5, 8];
// let Random=(length)=>{
//     let random=Math.floor(Math.random()*length);
//     console.log(array[random]);
// }

// Random(4)

// function FindA(objArray,prop){
//     // let str=objArray.map((a)=>a[prop])
//     // console.log(str);
//     let str=[];
//     for(i=0;i<objArray.length;i++){
//         str.push(objArray[i][prop])
//     }
//     console.log(str);
// }
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// FindA(objArray,"a")

// function compare(a,b){
//     let A=a.name.toUpperCase;
//     let B=b.name.toUpperCase;
//     if(A<B){
//         return -1;
//     }
//     else{return 1}
// }
// function compare(a,b){
// //    return b.age-a.age;
// let A=a.name.toUpperCase();
// let B=b.name.toUpperCase();
// if(A<B){
//     return -1;
// }
// else{
//     return 1;
// }
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];
// console.log(students.sort(compare))

// let twoDimensional=(a,b)=>{
//     let str=[]
//     for(i=0;i<a;i++){
//         str[i]=[];
//     }
//     for(i=0;i<a;i++){
//         for(j=0;j<b;j++){
//             str[i][j]=i;
//         }
//     }
//     console.log(str);
// }
// twoDimensional(2,3)
// let new=[];
//check the number is prime 
//153=1*1*1+5*5*5+3*3*3


const number = 153
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}