var riderName; //var riderName is an optional string variable displaying the rider's name. It can be set to any person's name.
var minHeight = 51; //var minHeight is a number variable representing a rider's height in inches. It must be set to a number greater than or equal to 52(inches) in order to ride
var minAge = 9; //var minAge is a number variable that must be set to a number greater than or equal to 10 in order to ride
var canRide; //var canRide is a boolean variable that must be set to true in order to ride.

if (minHeight >= 52 || minAge >= 10) {
        canRide = true;
        console.log ("Get on that ride, kiddo!");
    }
else
    {
        canRide = false;
        console.log("Sorry kiddo. Maybe next year.");
    }