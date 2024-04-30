// function SortingArray(a,b){
//     let A=a.name.toUpperCase();
//     let B=b.name.toUpperCase();
//     if(A<B){
//         return 1
//     }
//     return -1
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];
// console.log(students.sort(SortingArray));

// function SortingAge(a,b){
//     return a.age-b.age
// }

// const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

// console.log(students.sort(SortingAge));
// function ExtractValue(objArray,cont){
//     let res=[];
//     for(d=0;i<objArray.length;i++){
//         res.push(objArray[i][cont])
//     }
//     return res;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// console.log(ExtractValue(objArray,"a"))
    

// function compareArray(a,b){
//     if(JSON.stringify(a)===JSON.stringify(b))return true;
//     return false;
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];

// console.log(compareArray(array1, array2));
// function CompareElement(array1,array2){
//     let res=array1.filter((x)=>array2.indexOf(x)!==-1)
//     return res;
// }
// console.log(CompareElement([1, 2, 3, 5, 9], [1, 3, 5, 8]))


// let findSubsets=(X,Y)=>{

//     for(i of Y){if(!X.has(i))return false}return true;
    
//     }



// let B= new Set(["Maruti"," pavana putra","Hanuman"])
// let C=new Set(["Hanuman"])
// console.log(findSubsets(A,C))


// console.log(Difference(A,C))
function AddElement(array){
    array.splice(0,0,9)
    console.log(array)
}
const array = [1, 2, 3, 2, 3];
console.log(AddElement(array))
