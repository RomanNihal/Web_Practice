const prompt = require('prompt-sync')();

function IsPalindrome(string) {
    var len = string.length;
    for (var i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
    return 0;
    }
    }
    return 1;
    }
    var inputString = prompt("Enter a string: ");
    if (IsPalindrome(inputString)) {
    console.log("${inputString} is a palindrome.");
    } else {
    console.log("${inputString} is not a palindrome.");
}