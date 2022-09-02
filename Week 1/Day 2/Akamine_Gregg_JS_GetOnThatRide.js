var riderName; //var riderName is an optional string variable displaying the rider's name. It can be set to any person's name.
var minHeight = 52; //var minHeight is a number variable representing a rider's height in inches. It must be set to a number greater than or equal to 52(inches) in order to ride
var minAge = 10; //var minAge is a number variable that must be set to a number greater than or equal to 10 in order to ride
var canRide; //var canRide is a boolean variable that must be set to true in order to ride.

console.log("Step 2");
if (minHeight >= 52) {
    console.log ("Get on that ride, kiddo!1");
}
else {
    console.log("Sorry kiddo. Maybe next year.1");
}

console.log ("Stretch 1");
if (minHeight >= 52 && minAge >= 10) {
    console.log ("Get on that ride, kiddo!2")
}
else {
    console.log("Sorry kiddo. Maybe next year.2")
}

console.log("Stretch 2");
if (minHeight >= 52 || minAge >= 10) {
        console.log ("Get on that ride, kiddo!3");
}
else {
        console.log("Sorry kiddo. Maybe next year.3");
}