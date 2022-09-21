console.log("page loaded...");

function editName () {
    let elementName = document.querySelector("#name");
    console.log (elementName);
    elementName.innerText = "Jade Smith";
}

function removeName1 (element) {
    element.remove();
    let numRequest = document.querySelector("#requests-num");
    let count = Number (numRequest.innerText)
    count --;
    numRequest.innerText = String (count);
    if ("#accept-request") {
        let connections = document.querySelector("#connections-num");
        let count1 = Number (connections.innerText);
        count1 ++;
        connections.innerText = String (count1);
    }
}

function removeName2 (element) {
    element.remove();
    let numRequest = document.querySelector("#requests-num");
    let count = Number (numRequest.innerText)
    count --;
    numRequest.innerText = String (count);
}
