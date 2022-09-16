//1. Print odds 1-20
//Using a loop write code that will console.log all of the odd values from 1 up to 20.
function ifOddNum() {
    for (let i=1; i<=20; i++) {
        if (i % 2 === 1) { //divides i by 2 and checks for remainder. if remainder = true, print i
            console.log (i);
        }
    }
}
ifOddNum ();

//1a. Print odds 1-20 using a while loop
function ifOddNumWhile() {
let i=1;
while (i<=20) {
    if (i % 2 === 1) {
        console.log(i);
    }
    i++;
}
}
ifOddNumWhile ();

//2. Decreasing Multiples of 3
//Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
function decreasingMult3 () {
    for (let i = 100; i>=0; i--) {
        if (i % 3 === 0) {//divides if i is a multple of three by dividing by 3 and checking if the remainder is 0. if so, prints i
            console.log(i);
        }
    }
}
decreasingMult3();

//Rewritten as a while loop
function decreasingMult3While () {
    let x = 100
    while (x>=0) {
        if (x % 3 === 0) {
            console.log(x);
        }
        x--;
    }
}
decreasingMult3While();

//3. Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
function theSequence() {
    for (let i = 4; i >= -4; i -= 1.5) { //for loop starts at 4 and decrements by 1.5 each iteration until i reaches less than -4
        console.log (i);
    }
}
theSequence();

//Rewritten as a while loop
function theSequenceWhile () {
    let x = 4;
    while (x>=-4) {
        console.log (x);
        x = x - 1.5;
    }
}
theSequenceWhile();


//4. Sigma
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
function sigma1() {
    let sum=0; //declares varaible sum and assigns it the number 0
    for (let i=1; i<=100; i++) {
        sum += i; //loop will adds value of i to value of sum, the reassigns the new value to sum. repeats each iteration.
    }
    console.log(sum);
}
sigma1();

//Rewritten as a while loop
function sigma2() {
    var x=0;
    let sum=0;
    while (x<=100) {
        sum = sum + x;
        x++;
    }
    console.log (sum);
}
sigma2();


//5. Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function factorial1 () {
    var total=1
    for (let i = 1; i<=12; i++) {
        total *= i; //loop multiples total by value of i, then reassigns that value to total. repeats each iteration.
    }
    console.log (total);
}
factorial1();

//Rewritten as While loop
function factorial2 () {
    var x=1;
    let total = 1;
    while (x<13) {
        total = total * x;
        x++;
    }
    console.log (total);
}
factorial2();