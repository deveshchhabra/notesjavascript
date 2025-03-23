// let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let len= alpha.length
// let generateStr=(length)=>{
//     let str=' '
//     for(i=0;i<length;i++){
//         str+=alpha.charAt(Math.floor(Math.random()*len))
//     }
//     return str;
// }
// console.log(generateStr(5))

function splitArray(array,chunk){
    for(i=0;i<array.length;i+chunk){
        let tempArray;
        tempArray=array.splice(i,i+chunk)
        console.log(tempArray)

    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
console.log(splitArray(array,chunk))