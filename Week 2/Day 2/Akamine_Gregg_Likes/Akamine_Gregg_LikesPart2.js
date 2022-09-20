let count = [9,12,9];
let countElement1 = document.querySelector("#friend0");
let countElement2 = document.querySelector("#friend1");
let countElement3 = document.querySelector("#friend2");


function addlike() {
    count[0] += 1;
    countElement1.innerText = count[0] + " like(s)";
}


function addlike1() {
    count[1] += 1;
    countElement2.innerText = count[1] + " like(s)";
    }

function addlike2() {
    count[2] += 1;
    countElement3.innerText = count[2] + " like(s)";
}