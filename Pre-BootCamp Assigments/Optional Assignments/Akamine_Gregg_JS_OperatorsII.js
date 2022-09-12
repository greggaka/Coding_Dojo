/*MPV
Input - Number of pieces of cake, number of people
Process
1. Take number of pieces of cake / number of people to get remainder
2. Print remainder
Output - Remaining pieces of Cake
*/


//Feature 1
//function divides numberofPieces by numberOfPeople and calculates how many remaining pieces of cake there will be
//Note functions assumes each person only gets 1 piece of cake.
function howMuchLeftOverCake (numberOfPieces, numberOfPeople) {
    let remainder = numberOfPieces - numberOfPeople; //assigns the remainder of numberOfPieces - numberOfPeople to the var remainder
    console.log(remainder); //prints value of remainder
}

howMuchLeftOverCake(111,5);

//Feature 2
//function calculates remaining pieces of cake and displays message according to how many remaining pieces of cake there are
//Note functions assumes each person only gets 1 piece of cake.
function howMuchLeftOverCake1 (numberOfPieces, numberOfPeople) {
    let remainder = numberOfPieces - numberOfPeople; //assigns the remainder of numberOfPieces - numberOfPeople to the var remainder
    //checks if remainder equals 0 and prints out following message
    if (remainder === 0) {
        console.log("You have " + remainder + " left overs. No leftovers for you!");
    }
    //checks if remainder is 1 or 2 and prints following message
    else if (remainder<=2) {
        console.log("You have " + remainder + " left overs!");
    }
    //checks if reaminder is equal to or greater than 3 and less than or equal to 5 and prints following message
    else if (remainder>=3 && remainder <= 5) {
        console.log("You have " + remainder + " left overs to share!");
    }
    //checks if remainder is greater than 5 and prints following message
    else if (remainder>5) {
        console.log("You have " + remainder+ " left overs. Hold another party!")
    }
}

howMuchLeftOverCake1(10, 3);