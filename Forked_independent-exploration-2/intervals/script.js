// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

setInterval(pause, 1000)

function pause(){
    time += 1
    counterElement.innerHTML = time
}

