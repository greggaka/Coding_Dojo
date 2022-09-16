function fizzbuzz() {
    for (let i=1; i<=100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log ("FizzBuzz"); //prints "FizzBuzz" if i is a multiple of BOTH 3 AND 5 (15, 30, 45,60, 75, 90)
        }
        else if (i % 3 == 0 ) {
            console.log("Fizz");//prints "Fizz" if i is ONLY a multiple of 3 (3,6,9,12,18,etc)
        }
        else if (i % 5 == 0) {
            console.log("Buzz");//prints "Buzz if i is ONLY a multiple of 5" (5,10,20,25,35,etc)
        }
        else {
            console.log(i);//prints i if not a multiple of 3 or 5.
        }
    } 
}

fizzbuzz();