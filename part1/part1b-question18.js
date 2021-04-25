let d = new Date();
let time = d.toLocaleTimeString();

var intervalID = setInterval(printTime, 1000, time);

function printTime(time) {
    console.log(time);
}
