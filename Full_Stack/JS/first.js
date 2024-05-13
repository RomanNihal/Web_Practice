console.log("Roman");

fullName = "Md Roman Nihal";

console.log(fullName);

const student = {
    fullName: "Roman",
    age: 23,
    CGPA: 3.84,
};

console.log(student.fullName);
console.log(student["fullName"]);

student["age"] = student["age"] + 1;
console.log(student.age);

student.age = student.age + 2;
console.log(student.age);