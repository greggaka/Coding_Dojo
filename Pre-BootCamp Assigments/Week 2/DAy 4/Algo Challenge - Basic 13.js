//1. Print 1-255
//Prints all the integers from 1 to 255
/*
function print1To255 () {
    for (let x = 1; x<= 255; x++) {
        console.log (x);
    }
}

print1To255();


//2. Print Odds 1-255
//Print all odd itegers from 1 to 255
function printOdds1To255 () {
    for (let x = 1; x<=255; x++) {
        if (x % 2 === 1) { //divide by 2 and check to see if there is a remainder. if there is a remainder that equals an odd number
            console.log (x);
        }
    }
}
printOdds1To255();


//3. Print Ints and Sums 0-255
//Print integers from 0 to 255, and with each integer print the sum so far
function printIntsAndSum0To255 () {
    let sum = 0;
    for (let i = 0; i<=255; i++) {
        console.log(i);
        sum += i;
        console.log(sum);
    }
}
printIntsAndSum0To255();


//4. Iterate and Print Array
//Iterate through a given array, printing each value
var arr1 = [1,2,3,4,5];
function printArrayVals (arr) {
    for (let i = 0; i<arr.length; i++) {
        console.log (arr[i]);
    }
}
printArrayVals(arr1);


//5. Find and Print Max
//Given an array, find and print its largest element
function printMaxOfArray(arr) {
    let max = arr[0];
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
printMaxOfArray(arr1);


//6. Get and Print Average
//Analyze an array's values and print the average
function printAverageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum/arr.length);
}
printAverageOfArray(arr1);


//7. Array with Odds (Sensei Bonus)
//Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddssArray() {
    let arr2 =[];
    for (let x = 1; x<256; x++) {
        if (x % 2 === 1) {
            arr2.push(x);
        }
    }
    return arr2;
}
var arr3=returnOddssArray();
console.log(arr3);


//8. Square the Values (Sensei Bonus)
//Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr4) {
    let numSquared = 0;
    for (let x = 0; x<arr4.length; x++) {
        numSquared = arr4[x] * arr4[x];
        arr4[x] = numSquared;
    }
    return arr4;
}
console.log(squareArrayVals(arr1));
*/

//9. Greater than Y
//Given an array and a value Y, count, and print the number of array values greater than Y
arr1=[1,2,3,4,5]
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for (let x = 0; x<arr.length; x++) {
        if (arr[x]>y) {
            count ++;
        }
    }
    return count;
}
console.log(returnArrayCountGreaterThanY(arr1, 1));