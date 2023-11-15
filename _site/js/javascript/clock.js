function getMonthName(monthNumber) {
    // Array of month names
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Check if the provided number is within the valid range
    if (monthNumber >= 1 && monthNumber <= 12) {
        // Subtract 1 from the month number to get the correct index in the array
        const monthIndex = monthNumber - 1;

        // Return the corresponding month name
        return months[monthIndex];
    } else {
        // If the number is outside the valid range, return an error message
        return "Invalid month number";
    }
}

function getDayWithSuffix(day) {
    if (day >= 11 && day <= 13) {
        return day + "th";
    } else {
        switch (day % 10) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }
}

let div_width = document.getElementById('profile-header').offsetWidth;
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;


function setup() {
    let elt = document.getElementById('clock-face');
    let fontBold = loadFont('../../css/Digital7Italic-BW658.ttf');
    const canvas = createCanvas(div_width, h/7.5);
    canvas.addClass('fade-in-canvas');
    canvas.parent(elt);
    textFont(fontBold);
    // canvas.style("display", "block")
    // canvas.style("position", "fixed")
    // canvas.style("top", "0")
    // canvas.style("left", "0")
    // canvas.style("z-index", "-1")
    // canvas.style("opacity", "0.6")
}
  
function draw() {
    var currentYear = year();
    var currentMonth = month();
    var currentDay = day();
    var currentHour = hour();
    var currentMinute = minute();
    var currentSecond = second();
    var currentDate = getDayWithSuffix(nf(currentDay, 2)) + ' ' + getMonthName(nf(currentMonth, 2)) + ' ' + currentYear;
    var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2) + " GMT";
    background('#fff');
    fill('#00b3ff');
    noStroke();
    textSize(40);
    textWrap(WORD);
    text(currentDate, 0, 45);
    text(currentTime, 0, 85);
}  

function clock() {
    const element = (
    <div>
        <div id="clock-face"></div>
    </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('clock_component')
    );
}

clock();




  




