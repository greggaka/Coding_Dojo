console.log("page loaded...");

//takes video element (using 'this' from html) and plays the video
//will play video when mouse is over video (from onmouseover in html)
function playVid (element) { 
    element.play();
}

//takes the video element (using'this' from html) and pauses the video
//will pause when mouse is not over video (from onmouseout in html)
function pauseVid (element) {
    element.pause();
}