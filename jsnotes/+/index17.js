// 
// 

//

// let a=prompt('enter the number a')
// let b=prompt('enter the number b')
// let c=prompt('enter the number c')

// let D=b*b-4*a*c
// console.log(D)
// if(D>0){
//     root1=-b+Math.sqrt((D)/(2*a))
//     root2=-b-Math.sqrt((D)/(2*a))
//     console.log(root1,root2);
// }

// else if(D==0){
//     root2=root1=-b/(2*a)
//     console.log(root1,root2);
// }




// let a=prompt('enter the number a')

// if(a%2==0){
//     console.log('The number is is even',a)
// }


// else{
//     console.log('The is odd',a)
// }

// 1 2 3  4 5 6 7 8 9 11 12 13 14 15 16 17 18 19 20 21 22 23  24 25 26 27
// 1 3 5 7 9 11 13 17 19 21 23 27 

// factorial of the number 


//     for(let m = 2; m  <= 30 ; m++){
//         for (let j = 2; j < m; j++) {
       
//             let flag=0
//             if(m%j==0){
//                 // console.log(m)
//                 flag=+1
//                 break;
//             }
       
//              if(m>1){
//                 console.log(m)
//                 // console.log(flag)

       
// }
// }
// }
// 



    

// 1*2*3*4*5 m*n 1*2=2*3
// let m=1;
// for(let n=1;n<=5;n++){
//      m =n*m;
// // console.log(m)
    
// }
// console.log(m)

// let r;
// for(let n=1;n<=5;n++){
//     for(let m=1;m<=10;m++){
//      r =n*m;
//      console.log(`${n}X${m} =`,r);
//     }
//     console.log('\t')
// }


//  0 1 1 2 3 5 8 13 21 34

// let a=0;
// let b=1;
// let c,d;
// for(let n=0;n<10;n++){
   
//     console.log(b)
//     let c=a+b;
//     a=b;
//     b=c;
// }


// 1^3+5^3+3^3=153
// let a=parseInt(prompt('enter the a'))
// let b=parseInt(prompt('enter the b'))


// for(let i=a;i<=b;i++){
//     let c=i.toString().length()
//     let sum=0;
//     let temp=i;
//     while(temp>0){
//         let rem=temp%10;
//         sum+=rem**c
//         temp=parseInt(temp/10);
//     }

//     if (sum == i) {
//         console.log(i);
//     }
// }





// check weither the number is prime or not 
// 1 2 3 4 5 6  7 8 9 10 11  12 13 14 15 16 17 18 19
// 2 3 5 7 11 13

//   const low = 0;
// const high = 10;

// console.log(`prime numbers between ${low} and ${high} are : `);

// // looping from lowerNumber to higherNumber
// for (i = low; i <= high; i++){
//   let flag = 0;
  
//   // looping through 2 to user input number
//   for(j = 2; j < i; j++){
//     if(i % j == 0){
//       flag = 1;
//     }
//   }
  
//   if(i > 1 && flag == 0){
//     console.log(i);
//   }
  
// }

// const low=0;
// const high=10;

// for( i=low;i<=high;i++){
//     let flag=0;
//   for( j=2;j<i;j++){
//     if(i%j === 0){
//         flag=1;   
// }
// }
//     if(i>1 && flag==0  ){
//       console.log(i)
//     }
// }



// console.log('+++----++')

// let n=1;
// for(let i=1;i<=5;i++){
//     n=n*i;
//     // j=n;s
// }
// console.log(n) 


//fibnachi series //
// 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9 

// let ip=0,jp=1;
// for(i=0;i<10;i++){
//      tp=ip+jp;
//     console.log(ip)
//     ip=jp;
//     jp=tp

// }


// check the amstrong number 


// const amstrong=(number)=>{
//     // console.log(number);
//     let sum=0;
//     let temp=number;
//     // console.log(temp)
//     let remdiner;
//     while(temp>0){
//     // console.log(number);
//      remdiner=temp%10;
//     sum+=remdiner*remdiner*remdiner;
//      temp=parseInt(temp/10);
//     }
//     temp=number;

// if(sum==number){
//     console.log(number)
//     console.log("amstrong sir g is back",number);
// }
// console.log(temp)

// }

//     amstrong(number=153);



   
// const lowerNumber=parseInt(prompt('Enter the number'));
// const highestNumber=parseInt(prompt('Enter the number'));

// for(let i=lowerNumber;i<=highestNumber;i++){
    // let numberofDigits=i.toString().length;
//     let sum=0;
//     let remainder
//     let temp=i;
//     while(temp>0){
//         // console.log(number);
//          remainder=temp%10;
//         sum+=remainder**numberofDigits;
//          temp=parseInt(temp/10);
//         }
//     if(sum==i){
//         console.log(i);
//     }

// }


// ---> check amstrong series 

   
const lowerNumber=parseInt(prompt('Enter the number'));
const highestNumber=parseInt(prompt('Enter the number'));
for(i=lowerNumber;i<=highestNumber;i++){
    let pow=i.toString().length;
    let sum=0;
    let temp=i;
    while(temp>0){
      let remainder=temp%10;
      sum+=remainder**pow;
       temp = parseInt(temp / 10)
    }
    if(sum == i){
        
      console.log(i)
    }
  }
  console.log('hello')


  // program to find Armstrong number between intervals

// take an input
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}