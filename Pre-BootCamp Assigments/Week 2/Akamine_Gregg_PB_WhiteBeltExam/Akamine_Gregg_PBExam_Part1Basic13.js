//1. Print 1-255
//Prints all the integers from 1 to 255
function print1To255 () {
    //for loop checks number is less than or equal to 255 and if so prints the number, then increments the number by 1
    for (let x = 1; x<= 255; x++) {
        console.log (x);
    }
}

print1To255();


//2. Print Odds 1-255
//Print all odd itegers from 1 to 255
function printOdds1To255 () {
    for (let x = 1; x<=255; x++) {
        if (x % 2 === 1) { //divide by 2 and check to see if there is a remainder. if there is a remainder x equals an odd number
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
        console.log(i); //prints integer
        sum += i; //adds current integer to sum of all previous integers and assigns value to sum
        console.log(sum); //prints sum
    }
}
printIntsAndSum0To255();


//4. Iterate and Print Array
//Iterate through a given array, printing each value
var arr1 = [1,2,3,4,5];
function printArrayVals (arr) {
    //for loop will only run if i is less than the length of the array
    for (let i = 0; i<arr.length; i++) {
        console.log (arr[i]);
    }
}
printArrayVals(arr1);


//5. Find and Print Max
//Given an array, find and print its largest element
var arr1 = [1,5,2,4,3];
function printMaxOfArray(arr) {
    let max = arr[0]; //assigns first element of the array to max
    for (let i = 0; i<arr.length; i++) { //for loop will index through the array
        if (arr[i] > max) {
            max = arr[i]; //if statement will check if current value of index is larger than current value of max and if so will assign that value to max
        }
    }
    console.log(max); //after for loop breaks/ends, the largest element of the array 'max' will print
}
printMaxOfArray(arr1);


//6. Get and Print Average
//Analyze an array's values and print the average
var arr1 = [1,4,5,2,3];
function printAverageOfArray(arr) {
    let sum = 0; //declares a number var and sets it to zero
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i]; //for loop will index through array and add the current index's value to the sum of previous index's values
    }
    console.log(sum/arr.length); //average equals sum divided by length of array 
}
printAverageOfArray(arr1);


//7. Array with Odds (Sensei Bonus)
//Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddssArray() {
    let arr2 =[]; //creates a new, empty array
    for (let x = 1; x<=255; x++) {
        if (x % 2 === 1) { //checks if x is an even or odd number
            arr2.push(x); //if x is an odd number, it will be pushed into the next/last index of the new array
        }
    }
    return arr2; //after for loop breaks, returns value of the array
}

//below code checks basic 7
var arr3=returnOddssArray();
console.log(arr3);


//8. Square the Values (Sensei Bonus)
//Square each value in a given array, returning that same array with changed values
var arr1 = [1,4,5,2,3];
function squareArrayVals(arr4) {
    let numSquared = 0;
    for (let x = 0; x<arr4.length; x++) {
        numSquared = arr4[x] * arr4[x]; //squares the value of the current index
        arr4[x] = numSquared; //reassigns current index the squared value
    }
    return arr4;
}
console.log(squareArrayVals(arr1));


//9. Greater than Y
//Given an array and a value Y, count, and print the number of array values greater than Y
arr1=[1,2,3,4,5]
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0; //a counter variable to keep track how many values in the array are greater than y
    for (let x = 0; x<arr.length; x++) {
        if (arr[x]>y) {
            count ++; //if statement checks to see if value of current index is greater than the value of y and if so increments the counter
        }
    }
    console.log(count);
}
returnArrayCountGreaterThanY(arr1,5);

//10. Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero
arr1=[-1,4, -3,2,-5]
function zeroOutArrayNegativeVals(arr) {
    for (let x = 0; x<arr.length; x++) {
        if (arr[x]<0) {
            arr[x] = 0; //if statement checks if the value of the current index is less than zero. If it is, the current index will be reassigned the value 0.
        }
    }
    return arr
}
console.log (zeroOutArrayNegativeVals(arr1));