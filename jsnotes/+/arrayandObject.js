// // Shuffle The deck Card
// const Value=["diamond","heart","club","spade"]   //-->must

// const Suits=[
//     "Ace",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "King",
//     "Jack",
//     "Queen"
// ]

// const deck=[]

// for(let i=0;i<Value.length;i++){
//     for(let j=0;j<Suits.length;j++){
//         let card={Value:Value[i],Suit:Suits[j]}
//         deck.push(card)
//        }
// }

// console.log(deck)


// //suffle the cards 
// for(i=deck.length-1;i>0;i--){
//     let k=Math.floor(Math.random()*i);  ///----->
//     let temp=deck[i];
//     deck[i]=deck[k];
//     deck[k]=temp;
    
// }


// for(i=0;i<5;i++){
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)  ////------>
// }


// const objects={
//     name:"devesh",
//     age:20,
//     hobbies:["cricket","badminton","basket-ball"],
//     person:function (){
//         console.log('i am besh')
//     },
//     score:{
//         math:90,
//         science:18
//     }
// }

// console.log(typeof objects)

// console.log(objects["name"])
// console.log(objects.name)
// console.log(objects["hobbies"][0])
// console.log(objects.hobbies[0])
// objects.person()
// console.log(objects.score)

// delete objects.name;

//remove the object 
// console.log(objects)


// console.log(objects.score)


// const hasKey="score" in objects;
// const hasKey=objects.hasOwnProperty("score")
// if(hasKey){
//     console.log("key have")
// }
// if(!hasKey){
//     console.log("key is not present Sir")
// }


// ///clone the js object 

// const clone ={...objects}
// console.log(clone)

// const clone2=Object.assign({},objects);
// console.log("ji",clone2)

// for(keys in objects){ ///----> important
//     let value=objects[keys];
//     console.log('key -'+keys)
//     console.log('value-'+value)
// }

// for (let [key,object] of Object.entries(objects)){ /// ---->important 
//     console.log(key+object)

// }


//join two array using spread operate
// let object={
//     name:"devesh",
//     god:"krishnaji",
// }
// let object2={
//     name:"Ishan",
//     god2:"Ramji",
// }
//using  -----> merge only new property 
// let merge=Object.assign(object,object2)
// console.log(merge)

// const merge2={...object,...object2}
// console.log(merge2)


//remove duplicate from the array

//to find the index of the
//  first occurrence of the search element provided as the argument to the method.


// let arr=[1,5,5,6,7,7]



// const duplicateremove=(arr)=>{
//     let newarr=[]
//     for(i of arr){
//         if (newarr.indexOf(i)===-1){
//             newarr.push(i)
//         }
        
//     }
// console.log(newarr)
// }

// duplicateremove(arr)




///Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.


// However, WeakSet can only contain objects whereas a Set can contain any data types such as strings, numbers, objects, etc.




//merge and remove duplicte   ///->must

// let   arr=[1,2,3,3,3]

// let arr2=[2,3,3,5]

// let ar=[...arr,...arr2]
// let newar=[...new Set(ar)]

// console.log(newar)

// let arr3=arr.concat(arr2)


// const removeduplicate=(arr3)=>{
//     // console.log(arr3)
//     let newarr=[]
//     for(i of arr3){
//         if(newarr.indexOf(i)=== -1){
//             // console.log(newarr)
//             newarr.push(i)
        
//         }
//     }
//     console.log(newarr)
// }

// removeduplicate(arr3)
// 


//If comparing two names results in 1, then their order is changed.
// If comparing two names results in -1 or 0, then their order is left as is.

// const points = [40, 100, 1, 5, 25, 10];
// // console.log();
// points.sort(function(a, b){return a - b});



// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

// console.log(students.sort(function(a, b){return a.age - b.age}))
// //string ka sath nahi hota hai 
// console.log(students.sort(function(a, b){return a.name - b.name}))


// console.log(students.sort(function(a,b){
// const name1=a.name.toUpperCase();
// const name2=b.name.toUpperCase();
// let comparison=0;
// if(name1>name2){
//     comparison=1
// }

// else{
//     comparison =-1;
// }
// return comparison;
// }))

// //extract the value using map function 


// const extractvalue=(obj,prop)=>{
//     // console.log(obj["prop"])
//     const extract=obj.map((item)=>item[prop])
//     return extract;
// }
// const obj=[{a:"10"},{a:"20"},{a:"30"}]

// console.log(extractvalue(obj,"a"));

// console.log(obj[0].a)
// console.log(obj[1].a)
// console.log(obj[2].a)


///Find the random Element 


// const randomelement=(arr)=>{

//     const item=Math.floor(Math.random()*arr.length)
//     console.log(item)
//     const randomnumber=arr[item]
//     console.log(randomnumber)

// }


// const arr=["hello",1,2,8]

// randomelement(arr)


// const arr1=[1,4,3,4]
// const arr2=[4,4,3,3]

// const commonElemnt=(arr1,arr2)=>{
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     else{
//             for(let i =0;i<arr1.length-1;i++){
//                 if(arr1[i]===arr2[i]){
//                       console.log(arr1[i]);
//         }
//     }
// }

// }

// console.log(commonElemnt(arr1,arr2))



///filter method 

///why s

// const splitarr=(arr,chunk)=>{
//     for(let i=0;i<arr.length;i=i){
//         let  tempchunk;
//         tempchunk=arr.splice(i,i+chunk);
//         console.log(tempchunk)
//     }


// }

// const arr=[1,2,3,4,5,6]
// const chunk=2;
// splitarr(arr,chunk)


/// ---->variable is undefined hai yai nahi

// function checkVariable(variable){
//     if( variable ==null || variable === 'undefined'){
//         console.log('Null or not defined',variable)
//     }
//     else{
//         // console.log(`defined {variable}`,variable)
//     }



// }


// let newVariable;

// checkVariable(5);
// checkVariable(null);
// checkVariable(newVariable);
// checkVariable("Hello");


// const setUnion=(a,b)=>{
//     let c=new Set(a);
//     for(let i in b){
//         c.add(i)
//     }
//     return c;
// }



// Intersection 

// function Union(a, b){
//   let setC=new Set();
//     // for(let i of   b){ //in for objects
//     //     setC.add(i);
//     // }
//     // return setC;

//     for(let i of b){
//         if(a.has(i)){
//             setC.add(i)
//         }
//     }
//     return setC;
// }

// const A=new Set(["Grappies","Apple","Mango"]);
// const B=new Set(["Grappies","Apple","Papita"]);
// const results=Union(A,B);
// console.log(results);


/// ---> Good question 
// const string='Learning javascript program'

// const split=string.split('j')
// console.log(split)
// const results=split.join('A')

// console.log(results)


///----->check particualr element present or not

// const A=["Grappies","Apple","Mango"];
// let consist=A.includes('Mango')

// console.log(consist)

// let array = [1, 2, 3, 4];
// let array2=array[3]=5
// console.log(array)


//append --->add to last

// let array = [1, 2, 3, 4];
// array.push(5)
// console.log(array)


// let array = [1, 2, 3, 4];
// let arr=array.unshift(5)
// console.log(array)

// const p=new Promise((resolve, reject) => {
//     setTimeout(()=>{resolve("Promise is resolved Value yts5000!!!")},10000);    
// });

// const p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{resolve("Promise is resolved Value yts 10000!!!")},20000);    
// });
// async function handlepromise(){
//     console.log('Hello')
//     const val=await p;
//     console.log("Nameste Javascript")
//     console.log(val)
//     const val2=await p2;
//     console.log(val2);
//     console.log("Nameste Javascript -2")


// }
// handlepromise();


// function getDATA(){
//     // return "Nameste";
//      p.then((res)=>console.log(res));
//      console.log("Nameste javascript");
// }


// const result=getDATA();
// console.log(result);

// result.then((res)=>console.log(res))




const API_URL="https://github.com/deveshchhabra"

async function handlepromise(){
      const data=await fetch(API_URL)
    const jsonValue=await data.json();
    console.log(jsonValue);
    
    //fetch() => Response.json() => jsonValue
   

}
handlepromise().catch((err)=>console.log(err));