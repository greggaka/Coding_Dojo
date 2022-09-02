/*We need to repeatedly track when a runner finishes the next mile.
We know we need to give a candy every 2 miles and when we can stop giving them out.
*/
//The starting point of the loop is 0 since the runner begins at 0 miles.
//The loop should when the runner finishes.
//It will know to stop bc it'll track when the variable hits 6 miles.
//Incrementation should be every mile.
//We need a variable to keep track of number of miles and for stretch 1, a var for speed/mph.




//Base Loop
console.log("Base loop");
for (var x=0; x<=6; x=x+2) {
    if(x != 0) { //this if statement is so piece of candy is not given at 0 miles
    console.log("You ran 2 miles! Here is a piece of candy!");
    }
}





//Base Loop that tracks every mile
console.log("Tracking every mile");
x = 0;
while (x<=7) { //can change 7 to however many miles one plans to run
    if (x != 0) { //this if statement is so piece of candy is not given at 0 miles
        if (x <= 6) { //candy not given at 0 miles and only when less than or equal to 6 miles
            if (x%2 == 0) {//checks if the mile ran is every second mile. divides mile by two and checks if remainder is 0
        console.log("You ran 2 miles! Here is a piece of candy!");
            }
            else {
                console.log("You completed a mile. Do one more for a piece of candy!"); //prints for every odd number mile
        }
        else {
            console.log ("You completed another mile. Keep going for your own good!"); //prints if mile ran is above 6 (no candy given)
        }
    }
    x++;
}

//Stretch 1
console.log ("Stretch 1");
var speed = 5.5;
for (var x=0; x<=6; x=x+2) {
    if (x != 0) { //candy not given at 0 miles and only when less than or equal to 6 miles
        if (speed >= 5.5) { //checks speed, compares to minimum spped to determine candy
        console.log("You ran 2 miles at a speed of at least 5.5mph! Here is a piece of candy!");
        }
        else {
        console.log("You ran 2 miles! No Candy");
        }
    }
}

//Stretch 1a - Tracking every mile
console.log("Stretch 1a: Tracking every mile");
x = 0;
speed = 5.5; //can change to whatever speed
while (x<=7) { //can change 7 to however many miles one plans to run
    if (x > 0) { //written so that candy is not given on 0 miles
        if (x <= 6) {  //condition - candy only given within first six miles
            if (x%2 === 0) { //condition to show even number mile (every 2 miles)
                if (speed >=5.5) { //checks speed, compares to minimum spped to determine candy
                    console.log("You ran 2 miles at a speed of at least 5.5mph! Here is a piece of candy!");
                }
                else {
                    console.log ("You ran 2 miles! Run at a faster pace for candy!");
                }
            }
            else {
            console.log("You completed a mile. Keep Going!"); //prints for every odd number mile
            }
        }
        else {
            console.log ("You completed another mile. Keep going for your own good!"); //prints if mile ran is above 6 (no candy given) regardless of mile number
        }
    }
    else{
    }
    x++; //increases mile count
}