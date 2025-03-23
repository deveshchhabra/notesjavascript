// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P1 Sucess"),3000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P2 sucess"),1000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P3 Sucess"),2000);
// })
// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{console.error(err.errors)});

// 


//Printing Star
//
// let CompareName=(a,b)=>{
//     let A=a.age
//     let B=b.age
//     if(A<B){
//         return 1
//     }
//     return -1
// }

// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];
// console.log(students.sort(CompareName))

//
// let create2Darray=(a,b)=>{
//     let st=[]
//     for(i=0;i<a;i++){
//         st[i]=[]
//     }
//     for(i=0;i<a;i++){
      
//     for(j=0;j<b;j++){
//         st[i][j]=j
//     }
// }
//     console.log(st)
// }
// console.log(create2Darray(2,3))

// let extractArray=(objArray,cons)=>{
//     let res=objArray.map((i)=>i[cons])
//    return res;
// }
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// console.log(extractArray(objArray,'a'))

// let splitArray=(array,chunck)=>{
//     for(i=0;i<array.length;i+chunck){
//         let tempArray;
//         tempArray=array.splice(i,i+chunck)
//         console.log(tempArray)
//     }
// }
// let array=[1, 2, 3, 4, 5, 6, 7, 8];
// let chunck=2;
// console.log(splitArray(array,chunck))

// le
// let removeDuplicates=(a,b)=>{
 
//     let A=[...a,...b]
//     let B=[...new Set(A)]
//     return B

// }
// let removeDuplicates=(a,b)=>{
//     let arr=a.concat(b)
//     let uniqueArray=[];
//     for(i of arr){
//         if(arr.includes(i)){
//             uniqueArray.push(i)
//         }
//     }
//     return uniqueArray
// }
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 5]
// console.log(removeDuplicates(array1,array2))
