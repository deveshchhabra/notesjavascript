// let arr=[1,2,3,4];
// let arr2=[1,2,3,4];

// console.log(arr.__proto__)
// arr.__proto__.push=(n)=>{console.log("print the number",n)}
// console.log(arr.push(5))
// arr.sayHello=()=>{
//     console.log('Hello, I am Sir')
// }
// arr2.sayHello=()=>{
//     console.log('Hello, I am Sir')
// }
// console.log(arr2.sayHello===arr.sayHello)

// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi My name is${this.name}`);
//     },
// }
// return person;
// }
// let p1=personMaker("eve",19);
// console.log(p1)
// let p2=personMaker("r",19);
// console.log(p2)
// console.log(p1.talk===p2.talk)

function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this)
}
Person.prototype.talk=function(){
    console.log(`Hi my name is${this.name}`)
}
Person();
// let p1=new Person("adam",25)
// let p2=new Person("eve",25)

