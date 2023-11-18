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

const pianoNotes = [
{ key: 65, note: "C", keyboard: "A", url: "/assets/notes/040.wav" },
{ key: 87, note: "C#", keyboard: "W", url: "/assets/notes/041.wav" },
{ key: 83, note: "D", keyboard: "S", url: "/assets/notes/042.wav" },
{ key: 69, note: "D#", keyboard: "E", url: "/assets/notes/043.wav" },
{ key: 68, note: "E", keyboard: "D", url: "/assets/notes/044.wav" },
{ key: 70, note: "F", keyboard: "F", url: "/assets/notes/045.wav" },
{ key: 84, note: "F#", keyboard: "T", url: "/assets/notes/046.wav" },
{ key: 71, note: "G", keyboard: "G", url: "/assets/notes/047.wav" },
{ key: 89, note: "G#", keyboard: "Y", url: "/assets/notes/048.wav" },
{ key: 72, note: "A", keyboard: "H", url: "/assets/notes/049.wav" },
{ key: 85, note: "A#", keyboard: "U", url: "/assets/notes/050.wav" },
{ key: 74, note: "B", keyboard: "J", url: "/assets/notes/051.wav" },
{ key: 75, note: "C", keyboard: "K", url: "/assets/notes/052.wav" },
{ key: 79, note: "C#", keyboard: "O", url: "/assets/notes/053.wav" },
{ key: 76, note: "D", keyboard: "L", url: "/assets/notes/054.wav" },
{ key: 80, note: "D#", keyboard: "P", url: "/assets/notes/055.wav" },
{ key: 186, note: "E", keyboard: ";", url: "/assets/notes/056.wav" }
];
const chords = [
    ['/assets/chords/a-flat-minor-chord.mp3', '/assets/chords/a-major-chord.mp3'],
    ['/assets/chords/a-minor-chord.mp3', '/assets/chords/a-sharp-minor-chord.mp3'],
    ['/assets/chords/b-flat-minor-chord.mp3', '/assets/chords/b-major-chord.mp3', '/assets/chords/b-minor-chord.mp3'],
    ['/assets/chords/c-flat-minor-chord.mp3', '/assets/chords/c-major-chord.mp3', '/assets/chords/c-minor-chord.mp3'],
    ['/assets/chords/d-flat-minor-chord.mp3', '/assets/chords/d-major-chord.mp3', '/assets/chords/d-minor-chord.mp3', '/assets/chords/d-sharp-minor-chord.mp3'],
    ['/assets/chords/e-flat-minor-chord.mp3', '/assets/chords/e-major-chord.mp3', '/assets/chords/e-minor-chord.mp3'],
    ['/assets/chords/f-flat-minor-chord.mp3', '/assets/chords/f-major-chord.mp3', '/assets/chords/f-minor-chord.mp3', '/assets/chords/f-sharp-minor-chord.mp3'],
    ['/assets/chords/g-flat-minor-chord.mp3', '/assets/chords/g-major-chord.mp3', '/assets/chords/g-minor-chord.mp3', '/assets/chords/g-sharp-minor-chord.mp3'],
    // Add more chords as needed
  ];


const note_key = [];
const note_note = [];
const note_keyboard = [];
const note_url = [];

for (let j = 0; j < pianoNotes.length; j++) {
    const element = pianoNotes[j];
    note_key.push(element.key);
    note_note.push(element.note);
    note_keyboard.push(element.keyboard);
    note_url.push(element.url);
}
console.log(note_key, note_note, note_keyboard, note_url);
let randomKeys = _.sample(note_note);
console.log(randomKeys);




function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
  }

  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function generateRandomSong() {
    const numberOfNotes = 15; // Adjust the number of notes in the song as needed

    for (let i = 0; i < numberOfNotes; i++) {
      if (Math.random() < 0.5) {
        // Play a single note
        const randomNote = getRandomElement(note_url);
        const randomTiming = 2000; // Adjust the timing range as needed
        setTimeout(() => playAudio(randomNote), randomTiming);
      } else {
        // Play a chord
        const randomChord = getRandomElement(chords);
        const randomTiming = 8000; // Adjust the timing range as needed
        setTimeout(() => {
          randomChord.forEach(chordNote => playAudio(chordNote));
        }, randomTiming);
      }
    }
  }


  
function playNotess() {
for (let i = 0; i < randomNotes.length; i++) {
    const element = randomNotes[i].key;
    playNote(element);
    console.log(element);
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



function randomPianoGenerator() {
    const element = (
    <div>
        
        <div id="clock-face"></div>
        <div id="piano">
            <div className="piano-key" onClick={generateRandomSong}>123</div>
        </div>

    </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('random_piano_generator_component')
    );
}

randomPianoGenerator();



  




