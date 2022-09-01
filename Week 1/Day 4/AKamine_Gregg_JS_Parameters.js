//Level 1
function greeting(person) {
    if(person === "Anakin") {
        console.log("Good day, Anakin!");
    }
    else {
        console.log("Howzit Goin,", person +"!");
    }
}

greeting("Anakin");
greeting("DarthVader")

//Level 2
function greeting2(person, time) {
    if (person === "Anakin") {
        console.log("Good Day, Anakin! It is",time)
    }
    else if (person === "ObiWan") {
        console.log("Hello there! It is", time);
    }
    else {
        console.log("Greetings,", person + "!", "It is", time);
    }
}

/*
greeting2("Anakin", "midnight")
greeting2("ObiWan", "2:00pm");
greeting2("Gregg", "morning");
*/

//Level 3
function greeting3(person, time) {
    if (person === "Anakin") {
        console.log("Good Day, Anakin! It is",time)
    }
    else if (person === "ObiWan") {
        console.log("Hello there! It is", time);
    }
    else if (person === "Count Dooku") {
        console.log("I'm coming for you, Dooku! The time is now", time);
    }
    else if (person === "Yoda") {
        console.log(time, "it is! Do or do not, there is no try!");
    }
    else {
        console.log("Greetings", person +"!", "The time is now", time);
    }
}

/*
greeting3("Count Dooku", "for your demise!");
greeting3("Yoda", 10);
*/