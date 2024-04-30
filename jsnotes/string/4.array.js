console.log("------array mutable-----")
let name="rohit";
console.log(name[0]="m")
console.log(name)
let fruits=["mango","apple","litchi"]
console.log(fruits)
fruits[0]="avacado"
console.log(fruits)
fruits[10]="papita"
console.log(fruits)

console.log("------array method-----")

let cars=["audi","bmw","maruti","xuv"]
console.log(cars.push("toyota"));//add to last
console.log(cars)
console.log(cars.pop());//remove from last 
console.log(cars)

console.log("shift and unshift")
let cars1=["audi","bmw","maruti","xuv"]
console.log(cars.unshift("lamborgini"))//add to 1st
console.log(cars)
console.log(cars.shift("lamborgini"))//remove to 1st
console.log(cars)


let followes=["a","b","c"];
let blocked=followes.shift();
console.log(followes)
console.log(blocked)
