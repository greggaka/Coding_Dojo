let count = 3;
let countElement = document.querySelector("#numlikes")
console.log(countElement);

function addlike () {
    count++;
    countElement.innerText = count + " like(s)"
    console.log(count);
}