// document.querySelector('#category').addEventListener('click',(e)=>{
//     console.log(e.target.id);
//     if(e.target.id=="LI"){
//     window.location.href="/"+e.target.id;
// }})

document.querySelector('#form').addEventListener('keyup',(e)=>{
    if(e.target.dataset.uppercase !=undefined){
    e.target.value=e.target.toUpperCase();
}})