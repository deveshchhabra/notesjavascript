// 1+2+3+4+5_ _ _ _ _ _ sn using recuirson

const sumofNatural=(n)=>{
    if(n>0){
        console.log('enter the sum')
        return n+sumofNatural(n-1);
    }

    else{
        return n;
    }

}

const enter= prompt('enter the number')
console.log(sumofNatural(enter));
