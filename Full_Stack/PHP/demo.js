// console.log("Roman");

// let fName = "Roman";
// console.log(fName);

// const student = {
//     fName: "Roman",
//     age: 23,
//     CGPA: 3.8
// }

// console.log(student)
// console.log(student.age);

// fName = prompt("Enter your name: ");
// console.log(fName);

// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");

// let sum = num1 + num2;

// alert(sum);

function findSmall(){
    let num1 = parseInt(document.getElementById("initial").value);

    let i = num1;

    let sum = 0;

    while(i!=0){
        let x = i%10;
        sum += x;
        i=parseInt(i/10); 
    }
    alert(sum);
}

