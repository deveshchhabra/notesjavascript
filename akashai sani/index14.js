// function x(){
//     console.log("Nameste jaavascript");
// }

// function y(x){
//     x();
// }

// const  radius=[3,4,5,6,1];
// const calculate=function(radius){

// }


// const radius=[3,1,2,4]

// const calculatearea=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI=radius[i]*radius[i]);
//     }
//     return output;

// };

const area=function(radius){
    return Math.PI=radius*radius

};

const calculatecircumference=function(radius){
    return 2*Math.PI*radius;

};



const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;

};
const diameter=function(radius){
    return 2*radius;
}
console.log((radius.map(area)))

console.log(calculate(radius,area))
console.log(calculate(radius,calculatecircumference))
console.log(calculate(radius,diameter))


































// console.log(calculatearea(radius));

// const calculatecircumference=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;

// };
// console.log(calculatecircumference(radius));


// const calculatediameter=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;

// };
// console.log(calculatediameter(radius));
