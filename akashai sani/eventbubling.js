document.querySelector("#grandparent")
.addEventListener('click',(e)=>{
    console.log('Grandparent Clicked');
    e.stopPropagation()
},true);//capturing

document.querySelector("#parent")
.addEventListener('click',(e)=>{
    console.log('parent clicked');
},true);//bubbling

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log('Child Clicked');
// },true);//capturing

document.querySelector("#child")
.addEventListener('click',(e)=>{
    console.log('Child Clicked');
    e.stopPropagation()
},  true);//capturing