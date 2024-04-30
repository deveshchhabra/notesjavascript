// find the leap year //366 days wala or 2000%4===0 and 2000%100!===0 or 2000%400===0
// year %4 ===0  || year %400===0 || year %100!===0


// let cleapyear=(year)=>{
//    if((year%4 ===0) && (year %100 !==0) || (year %400===0)){
//     console.log(year +"Leap Year")
//    }

//    else{
//     console.log(year+"Not a Leap Year")
//    }
// }

// let year=prompt("please enter the year sir")
// cleapyear(year)
// console.log(year)


//OR
//0 0 0
//0 1 1
//1 0 1
//1 1 0

// and 
//0 0 0
//0 1 0
//1 0 0
//1 1 1


// Mam to mam



// const string=prompt("enter the character sir")
// const reversestring=string.split("").reduce((ch,re)=>re+ch)
// if(string===reversestring){
//     console.log("Palandrome string",string)
// }


//Check palandrom number


/// |    4 --->length
/// 
/// |M| M M |M| 
/// |0| 1 2 |3| ----> index
///          
/// string [0]=== string[length - 1]
/// string [0]=== string[4 - 1]
/// string [0]=== string[3]  ---> palindrome hai 

/// M  M   M  M
/// 0 |1| |2| 3 ----> index

/// string [1]=== string[length - 1 - 1]
/// string [1]=== string[4 - 1-1]
/// string [1]=== string[2]  ---> palindrome hai 


/// M M M M M M M M
///----> for loop 

// const palandrom1=(Palandrome)=>{
//     const length=Palandrome.length
//     for(let i=0;i<length/2;i++){
//         if(Palandrome[i]=== Palandrome[length - 1 - 1]){
//             console.log(Palandrome)
//         }

//     }

// }


//---->palandrome

// const Palandrome=prompt("We are checking the palendrome String")
// palandrom1(Palandrome)



//    const palandrom=(string)=>{
   
//     const splitstring=string.split('');

//    const reversestring=splitstring.reverse();

//    const reversestringjoin=reversestring.join('');
//    console.log(reversestringjoin)
   
//    if(string==reversestringjoin){
//      console.log(string)
//    }
// }

// const string=prompt("enter the string")

// palandrom(string)



//---->  reverse the character

// let str="iamdonofthiscollege";
// let n=str.length;
// let str1=str.split('')
// console.log(str1.join(''))

// for(let i=0;i<n-1;i++){
//     for(let j=i+1;j<n;j++){
//         if(str1[i]>str1[j]){
//             var temp;
//             temp=str1[i];
//             str1[i]=str1[j];
//             str1[j]=temp;
            
//         }
//     }
// }

// console.log(str1.join(''))



//----> reversing the word


// const string=prompt("enter the string");

// const word=string.split(' ');

// word.sort();

// for (let i of word){
//     console.log(i);
// }




//----> Checking the occurence in the string 
// D E V E S H  ----> E has occured 2 X times



// const lettercheck=(string,Checkletter)=>{

//     let count=0;
//     let n=string.length
//     for(let i=0;i<n;i++){
//         if(string.charAt(i)===Checkletter){
//             count+=1;
//         }
        
//     }
//     return count;

// }


// const string=prompt('enter the string');
// const Checkletter=prompt('Enter the letter');

// let result=lettercheck(string,Checkletter)

// console.log(result)



// /devesh  --> Devesh
// const str=prompt("enter the string");
// const first=str.split('');

// let check=first[0].toUpperCase();
// if(first[0]!==check){

//     console.log(check+str.slice(1))
// }

// else{
//     console.log(check+str.slice(1))

// }


//aeiou  ---->display karna hai 


// const 

// const checkVowel=(string)=>{
//     let Vowel='aAeEiIoOuU';
//     let VowelCount=0;
//     for(let i=0;i<string.length;i++){
//         if(Vowel.indexOf(string[i])!==-1){
//             VowelCount+=1;
//         }
//     }

//     return VowelCount;
// }


// const string=prompt('Enter the string')
// // console.log(string)

// console.log(checkVowel(string));



//2,4000 -> two 

// const number=12345.78855555;
// const numberformatt="$"+number.toFixed(2);
// console.log(numberformatt)


// //d --->startwith h---> endwith



// const string=prompt('enter the string')
// console.log(string)




//  && 
/// I am the boy --->  < am > hai yai nahi 

// const check=(string,wordforundfirst,wordforundlast)=>{
//     console.log(string);
    
//     if(string.startsWith(wordforundfirst)){
//         console.log('word is h')
//     }
//     if(string.lastIndexOf(wordforundlast)){
//         console.log('Word is there')

//     }

// }


// const string=prompt('Enter the string')
// const wordforundfirst=prompt('The word is start with')
// const wordforundlast=prompt('The word ends with')
// check(string,wordforundfirst,wordforundlast)



// const string='  devesh dev'

// const stringtrim=string.trim()
// console.log(stringtrim)



// to Check Whether a String Contains a Substring

// const string=prompt('Enter the string present or not')
// const checkstring=prompt('Enter Check the string')


// const check=(string,checkstring)=>{
//     if(string.indexOf(checkstring)!== -1){
//         console.log('Checked string',string)
//     }

//     else{
//         ('Not In checked in string',string)
//     }
// }

// check(string,checkstring);



// Remove white spaces from the string


// const string=' I am Peaceful  Soul '

// const Substring=string.split('')
// console.log(Substring.join(''))




// ---> ///
// function* iterable(a,b){
//     for(let i=a;i<=b;i++){
//         yield i;
//     }
// }

// const  range=(a,b)=>{
//     if(typeof a ==='string'){
//         console.log(a.charCodeAt())
//         console.log(b.charCodeAt())
//         console.log(String.fromCharCode(1))
//         const result=[...iterable(a.charCodeAt(),b.charCodeAt())].map(n=>String.fromCharCode(n));
//         console.log(result.join(''));

//     }

//     else{
//     const result =[...iterable(a,b)]
//     console.log(result.join(''))
// }
// }

// range('a','d');

range(1,5)

  