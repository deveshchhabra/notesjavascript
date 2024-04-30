const student={
    name:"dev",
    age:23,
    marks:99.3,
    city:"new delhi"
}
console.log(student.city);
student.city="Mumbai";
console.log("add new city")
console.log(student);
console.log("add new gender")
student.gender="Male";
console.log(student);
student.marks="A"
console.log("change type marks")
console.log(student);
console.log("delete gender")
delete student.gender;
console.log(student);

console.log("------------")
const classInfor={
    devesh:{
        grade:"A",
        city:"new delhi"
    },
    diya:{
        grade:"B",
        city:"gurgaon"
    }
}

console.log(classInfor.diya);
classInfor.diya.city="Mumbai";
console.log(classInfor.diya);

