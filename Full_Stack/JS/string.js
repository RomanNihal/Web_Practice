let str = "Roman Nihal";
console.log(str);

let size = str.length;
console.log(size);

console.log(str[1]);

//Template Literals
let specialString = `This is a template literal ${1+2}`;
console.log(specialString);
console.log(typeof specialString);

//why?
let obj = {
    item: "pen",
    price: 10,
};

console.log(`The cost of the ${obj.item} is ${obj.price} tk`);

console.log(str.toUpperCase());
str.toLocaleLowerCase();
console.log(str);
let newStr = str.toLocaleLowerCase();
console.log(newStr);

newStr = "   java script   ";
console.log(newStr);
console.log(newStr.trim());
console.log(newStr.slice(5, 9)); //exclude 9

let str2 = str.concat(newStr);
console.log(str2);

str2 = newStr + str;
console.log(str2);

str2 = "Roman" + newStr + 23;
console.log(str2);

console.log(newStr.replace("a", "A"));
console.log(newStr.replaceAll("a", "A"));

console.log(newStr.charAt(5));
