// //solve the quardatic equation 

// // -b-+(d)^1/2/2a

// const quardatic=(a,b,c)=>{
//     let d=b**2-4*a*c
//     let root1,root2;
//     console.log(d)
//     if(d==0){
//          root1=-b/2*a;
//          root2=-b/2*a;

//     }
//     else if (d>0){
//          root1=-b/2*a-Math.floor(Math.sqrt(d))
//          root2=-b/2*a+Math.floor(Math.sqrt(d))

//     }
//     console.log(root1,root2)
// }

// quardatic(1,2,1)
// quardatic(2,4,1)

// //odd -even find 

// const odd_even=(number)=>{
//     if(number%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// odd_even(3)

// //check the weither the number is prime of not 
// number=prompt(parseInt('Enter the number'))
// const prime=(number)=>{
//     let isPrime=true;
//     if(number==1){
//         console.log('Number is composite')
//     }
//     else if (number>1){
//         for(i=2;i<number;i++){
//         if(number%i==0){
//             isPrime=false;
//             break;
//         }
//         }
//         if(isPrime){
//             console.log(`${number}isprime`)
//         }
//         else{
//             console.log(`${number}is nonprime`)
//         }
//     }
// }

// prime(number)


// // series of prime number 


let howmuchprimeneed=19;
let flag;
for(i=0;i<=howmuchprimeneed;i++){
    flag=0;
    if(i==1){
        console.log(`It's is prime number${i}`)
    }
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(i>1 &flag==0){
        console.log(`${i}number is prime`)
    }
}


//amstrong number is 
let number=1534
const amstrong=(number)=>{
    console.log(number)
    let sum;
    let lengh=number.toString.length;
    console.log(lengh)
    let remainder;
    let temp=number;
    while(temp>0){
        remainder=number%10;
        sum+=remainder**length;
        temp=parseInt(number/10)
    }
    if(sum==number){
        console.log('This is a amstrong number')
    }
    else{
        console.log(`non prime number this have`)
    }

}

amstrong(number)