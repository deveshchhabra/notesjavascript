// // 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });
  
//   Promise.all([p1, p2, p3]).then((results) => {
//     console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
//   });

//   // 📌 Second Scenario


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Fail');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });
  
//   Promise.all([p1, p2, p3])
//     .then(results => console.log(results))
//     .catch(err => console.error(err)); // throws error after 1 sec i.e. 'P2 Fails'

// Promise.allSettled()
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });
  
//   Promise.allSettled([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));
  
  // Over here, it will wait for all promises to be either settled or rejected and then return,
    /*
      [
        {status: 'fulfilled', value: 'P1 Success'},
        {status: 'fulfilled', value: 'P2 Success'},
        {status: 'rejected', reason: 'P3 Fail'}
      ]
    */


    //   Promise.race() 
    // 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });
  
//   Promise.race([p1, p2, p3])
//     .then((results) => console.log(results))
    // .catch(err => console.error(err));
  
   // It will return as soon as first promise is resolved or rejected.
   // In above example O/P: "P2 Success"
// function outest(c){
//    function outer(b){
//     function inner(){
//       console.log('outervariable'+outervariable+b+c)
//     }
//     // let outervariable=10;

// return inner;
//   }
// return outer
// }
// let outervariable=100;

// outest("loveshiva")("hello")();

// function counter(){
//   var count=0;
//   return function incrementCounter(){
//     count++;
//     console.log(count);
//   }
// }

// var counter1=counter()
// counter1();
// counter1();
// console.log(`\n`)
// let counter2=counter();
// counter2();


function Counter(){
  var count=0;
  this.incrementCounter=function(){
    count++;
    console.log(count)
  }
  this.decrementCounter=function(){
    count--;
    console.log(count)
  }
}

var counter=new Counter();
counter.incrementCounter()
counter.incrementCounter()
counter.decrementCounter()

function a (){
  var a=0,z;
  return function b(){
    console.log(a)
  }
}
var y=a();
y()