// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

//1. Write a for loop that will traverse through an array of numbers, and print each number.
console.log("FOr loop to check Arr1");
//for loop declares and sets 0 to var x; runs if x is less than the array length. 
for (let x = 0; x<arr1.length; x++) {
    console.log(arr1[x]); //prints number in each position of the array
}
console.log("For loop to check Arr2");
for (let x = 0; x<arr2.length; x++) {
    console.log(arr2[x]); //prints number in each position of the array
}

console.log("While Loop to Check Arr3"); // Optional while loop that will traverse through an array of numbers, and print each number.
let y = 0; // declaring a variable y to increment and index array
while (y<arr3.length) { //while loop runs as long as y is less than the lenght of arr2
    console.log(arr3[y]);
    y += 1;
}

//-------------------------------------------
//2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
console.log("For loop to print sum of the numbers in array1");
let sum = 0; //declaring variable sum
for (let x = 0; x<arr1.length; x+=1) {
    sum = x + arr1[x]; //assigns sum the value of x + index of the number in the array
    console.log (sum);
}

console.log("For loop to print sum of the numbers in array2");
sum = 0; //declaring variable sum
for (let x = 0; x<arr2.length; x+=1) {
    sum = x + arr2[x]; //assigns sum the value of x + index of the number in the array
    console.log (sum);
}

//-------------------------------------------
//3. Write a for loop that will traverse through an array of numbers, and print ONLY the numbers greater than 5.
console.log("For loop to print only the numbers greater than 5");
for (let x = 0; x<arr2.length; x++) {
    if (arr2[x] > 5) { //if statement checks that number in array index is above 5
        console.log (arr2[x]);
    }
}

//-------------------------------------------
//Ninja Bonus
//Modify Solution 3 so numbers <=5 are replaced with string "No dice."
console.log("For loop to print only the numbers greater than 5, change #<=5 to 'no dice'");
for (let x = 0; x<arr2.length; x++) { //arr2.length can be switched with arr1 or arr3
    if (arr2[x] > 5) { //if statement checks that number in array index is above 5
        console.log (arr2[x]);
    }
    else {
        arr2[x] = "No dice" // else statement that changes array index to "No dice" if number is less than or equal to five.
        console.log (arr2[x]);
    }
}
