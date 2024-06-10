function myFun(msg, n){
    for(let i=0; i<n; i++){
        console.log(msg);
    }
    return n+5;
}

let x = myFun("My name is Roman Nihal", 9);

console.log(x);

function sum(a, b){
    return a+b;
}

//Arrow functions
const arrowSum = (a, b) => {
    console.log(a+b);
    return a+b;
}

console.log(arrowSum);
let s = arrowSum(1, 2);
console.log(s);

let arr = [1, 2, 3, 4, 5];
arr.forEach(function print(val){
    console.log(val);
});

let arr2 = ["Dhaka", "Sylhet", "Cumilla"];
arr2.forEach((val, i, arr2) => {
    console.log(val.toUpperCase(), i, arr2);
});

let arr3 = arr.map((val) => {
    return val*val;
});
console.log(arr);
console.log(arr3);

let arr4 = arr.filter((val) => {
    return val%2 == 0;
});
console.log(arr4);

let output = arr.reduce((res, curr) => {
    return res+curr;
});
console.log(output);

let max = arr.reduce((prev, curr) => {
    return prev >= curr ? prev : curr;
});
console.log(max);