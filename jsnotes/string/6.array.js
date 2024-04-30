
console.log("--------Concat---------")
let primary=["red","yellow","blue"];
let secondary=["orange","green","voilet"];
let allcolor=primary.concat(secondary);
console.log(allcolor);
console.log(primary);
console.log(secondary);

console.log("---------Reverse----------")
console.log(primary.reverse());//immutable
console.log(primary);

console.log("--------------IndexOf-----------");
console.log(primary.indexOf("red"));
console.log(primary.indexOf("Grenn"))
console.log(primary.indexOf("Yellow"));

console.log("--------Include------------");
console.log(primary.includes("red"));
console.log(primary.includes("Green"));
console.log(primary.includes("Yellow"));

console.log("-----slice-----")
console.log(primary.slice());
console.log(primary.slice(2,3));
console.log(primary.slice(3));
console.log(primary.slice(5));
console.log(primary.slice(-3));




