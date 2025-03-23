let counter=0;
const getData=()=>{
    console.log("Counter-",counter++)
}

const debounce=function(fn,d){
    let timer;
    return function(){
        let context=this
        clearInterval(timer);
        timer=setTimeout(()=>{
            fn.apply(context,arguments);
        },d)
    }
}
const betterFuntion=debounce(getData,7000)