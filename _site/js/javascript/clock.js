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

// first sketch
var sketch1 = function (p) {

  
    p.setup = function () {
let elt = document.getElementById('clock-face');
    let fontBold = p.loadFont('../../css/Digital7Italic-BW658.ttf');
      const sketch1 = p.createCanvas(div_width, h/7.5);
      sketch1.addClass('fade-in-canvas');
      sketch1.parent(elt);
      p.textFont(fontBold);
      
    };
  
    p.draw = function () {
    var currentYear = p.year();
    var currentMonth = p.month();
    var currentDay = p.day();
    var currentHour = p.hour();
    var currentMinute = p.minute();
    var currentSecond = p.second();
    var currentDate = getDayWithSuffix(p.nf(currentDay, 2)) + ' ' + getMonthName(p.nf(currentMonth, 2)) + ' ' + currentYear;
    var currentTime = currentHour + ':' + p.nf(currentMinute, 2) + ':' + p.nf(currentSecond, 2) + " GMT";
    p.background('#fff');
    p.fill('#00b3ff');
    p.noStroke();
    p.textSize(40);
    p.textWrap(p.WORD);
    p.text(currentDate, 0, 45);
    p.text(currentTime, 0, 85);      
        
    };
  };
  new p5(sketch1);

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




  




