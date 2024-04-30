// ----->map

// const arr=[5,1,3,2,6]


// function double(x){
//     // return x*2;
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }
// // const output=arr.map(double);
// // const output=arr.map(binary);


// // const output=arr.map(function binary(x){
// //     return x.toString(2);
// // });

// const output = arr.map((x) => x.toString(2));



// console.log(output);

// ---->filter function is used to filter the values
// const arr=[5,1,3,2,6]

// function isODD(x){
//     return x%2;
// }

// function isEven(x){
//     return x%2==0;
// }

// const output=arr.filter(isEven);
// console.log(output)

// const output=arr.filter((x)=>{
//     return x>4;
// });
// console.log(output)


// reduce---->//

const arr=[5,1,3,2,6];

// function findSum(arr){
//     let sum=0;
//     for (let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     } 
//     return sum;
// }

// console.log(findSum(arr));


// // by reduce way 
// const output=arr.reduce(function(acc, curr){
//     acc=acc+curr;
//     return acc;
// },0);

// console.log(findSum(arr));


// const output=arr.reduce(function(max,curr){
//   if (curr>max){
//     max=curr;
//   }
//   return max;
// },0);

// console.log(output);
// ========================[==]=====[TRICKY EXAMPLE OF MAP REDUCE AND FILTER]===========[==]====================================
// ========================[==]=====[]===========[==]====================================


// const users=[
//     {FistName:'akashya' ,lastname:'saini',age:26},
//     {FistName:'donal' ,lastname:'trump',age:75},
//     {FistName:'elon' ,lastname:'musk',age:35},
//     {FistName:'akashya' ,lastname:'saini',age:26}

// ];

// const output=users.reduce(function(acc,curr){
//     if (acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age];
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});

// const output=
// users.filter((x) => x.age <30).map((x) => x.lastname);

// console.log(output);
