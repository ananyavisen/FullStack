const student={
    name: "Ananya",
    age:21,
    branch: "CSE"
}

const newStudent={
    ...student,
    sec: "CSE-11"
}
console.log("new object name: ",newStudent.name)
console.log("new object age: ", newStudent.age)
console.log("new object branch: ", newStudent.branch)
console.log("new object section: ", newStudent.sec)