//logical operater  //to check the multiple condition 
//logical and console.log("------------")
console.log("&& operater")
let marks=75;
if(marks>=33 &&marks>=80){
    console.log("pass")
    console.log("A+")
}
else {
    console.log("not executed")
}
console.log("------------")
console.log("|| operater")
let markss=75;
if(markss>=33 ||markss>=80){
    console.log("pass")
    console.log("A+")
}
else {
    console.log("not executed")
}
console.log("------------")
console.log("! operater")
let mark=75;
if(!mark<=33 ){
    console.log("pass")
    console.log("A+")
}
else {
    console.log("not executed")
}
console.log("----flow of execution left to right--------")
let maarks=75;
if((maarks>33 && maarks<=80) && !false){
    console.log("pass")
}