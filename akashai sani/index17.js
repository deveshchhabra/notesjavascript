let name={
    firstname:"Sachin",
    lastname:"tendulakar",
}

let printfulname=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+"from"+hometown+","+state)
}
// printfulname.call(name,"delhi","uttarpradesh");
// printfulname.apply(name2,["delhi","uttarpradesh"]);

let name2={
    firstname:"sachin ",
    lastname:"tendulakar"
}

// printfulname.call(name2,"");

let printfulMyName=printfulname.bind(name2,"delh12i","maharastra");
console.log(printfulMyName);