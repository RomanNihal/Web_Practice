function evenOdd(){
let num = prompt("Please Enter your roll number: ");

    let evenCount = 0;
    let oddCount = 0

    if (num.length == 0){
        evenOdd();
    }

    while(num != 0){
        n = num % 10;
        if (n % 2 == 0){
            evenCount += 1;
        }
        else {
            oddCount += 1;
        }

        num = Math.floor(num / 10);
    }

    console.log(`Number of even digits: ${evenCount}`);
    console.log(`Number of odd digits: ${oddCount}`);
}