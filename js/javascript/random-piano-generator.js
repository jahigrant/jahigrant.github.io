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

var notes = [
    {note: 'A0', url: '/assets/keys/A0.mp3' },
    {note: 'A#0', url: '/assets/keys/Bb0.mp3' },
    {note: 'B0', url: '/assets/keys/B0.mp3' },
    {note: 'C1', url: '/assets/keys/C1.mp3' },
    {note: 'C#1', url: '/assets/keys/Db1.mp3' },
    {note: 'D1', url: '/assets/keys/D1.mp3' },
    {note: 'D#1', url: '/assets/keys/Eb1.mp3' },
    {note: 'E1', url: '/assets/keys/E1.mp3' },
    {note: 'F1', url: '/assets/keys/F1.mp3' },
    {note: 'F#1', url: '/assets/keys/Gb1.mp3' },
    {note: 'G1', url: '/assets/keys/G1.mp3' },
    {note: 'G#1', url: '/assets/keys/Ab1.mp3' },
    {note: 'A1', url: '/assets/keys/A1.mp3' },
    {note: 'A#1', url: '/assets/keys/Bb1.mp3' },
    {note: 'B1', url: '/assets/keys/B1.mp3' },
    {note: 'C2', url: '/assets/keys/C2.mp3' },
    {note: 'C#2', url: '/assets/keys/Db2.mp3' },
    {note: 'D2', url: '/assets/keys/D2.mp3' },
    {note: 'D#2', url: '/assets/keys/Eb2.mp3' },
    {note: 'E2', url: '/assets/keys/E2.mp3' },
    {note: 'F2', url: '/assets/keys/F2.mp3' },
    {note: 'F#2', url: '/assets/keys/Gb2.mp3' },
    {note: 'G2', url: '/assets/keys/G2.mp3' },
    {note: 'G#2', url: '/assets/keys/Ab2.mp3' },
    {note: 'A2', url: '/assets/keys/A2.mp3' },
    {note: 'A#2', url: '/assets/keys/Bb2.mp3' },
    {note: 'B2', url: '/assets/keys/B2.mp3' },
    {note: 'C3', url: '/assets/keys/C3.mp3' },
    {note: 'C#3', url: '/assets/keys/Db3.mp3' },
    {note: 'D3', url: '/assets/keys/D3.mp3' },
    {note: 'D#3', url: '/assets/keys/Eb3.mp3' },
    {note: 'E3', url: '/assets/keys/E3.mp3' },
    {note: 'F3', url: '/assets/keys/F3.mp3' },
    {note: 'F#3', url: '/assets/keys/Gb3.mp3' },
    {note: 'G3', url: '/assets/keys/G3.mp3' },
    {note: 'G#3', url: '/assets/keys/Ab3.mp3' },
    {note: 'A3', url: '/assets/keys/A3.mp3' },
    {note: 'A#3', url: '/assets/keys/Bb3.mp3' },
    {note: 'B3', url: '/assets/keys/B3.mp3' },
    {note: 'C4', url: '/assets/keys/C4.mp3' },
    {note: 'C#4', url: '/assets/keys/Db4.mp3' },
    {note: 'D4', url: '/assets/keys/D4.mp3' },
    {note: 'D#4', url: '/assets/keys/Eb4.mp3' },
    {note: 'E4', url: '/assets/keys/E4.mp3' },
    {note: 'F4', url: '/assets/keys/F4.mp3' },
    {note: 'F#4', url: '/assets/keys/Gb4.mp3' },
    {note: 'G4', url: '/assets/keys/G4.mp3' },
    {note: 'G#4', url: '/assets/keys/Ab4.mp3' },
    {note: 'A4', url: '/assets/keys/A4.mp3' },
    {note: 'A#4', url: '/assets/keys/Bb4.mp3' },
    {note: 'B4', url: '/assets/keys/B4.mp3' },
    {note: 'C5', url: '/assets/keys/C5.mp3' },
    {note: 'C#5', url: '/assets/keys/Db5.mp3' },
    {note: 'D5', url: '/assets/keys/D5.mp3' },
    {note: 'D#5', url: '/assets/keys/Eb5.mp3' },
    {note: 'E5', url: '/assets/keys/E5.mp3' },
    {note: 'F5', url: '/assets/keys/F5.mp3' },
    {note: 'F#5', url: '/assets/keys/Gb5.mp3' },
    {note: 'G5', url: '/assets/keys/G5.mp3' },
    {note: 'G#5', url: '/assets/keys/Ab5.mp3' },
    {note: 'A5', url: '/assets/keys/A5.mp3' },
    {note: 'A#5', url: '/assets/keys/Bb5.mp3' },
    {note: 'B5', url: '/assets/keys/B5.mp3' },
    {note: 'C6', url: '/assets/keys/C6.mp3' },
    {note: 'C#6', url: '/assets/keys/Db6.mp3' },
    {note: 'D6', url: '/assets/keys/D6.mp3' },
    {note: 'D#6', url: '/assets/keys/Eb6.mp3' },
    {note: 'E6', url: '/assets/keys/E6.mp3' },
    {note: 'F6', url: '/assets/keys/F6.mp3' },
    {note: 'F#6', url: '/assets/keys/Gb6.mp3' },
    {note: 'G6', url: '/assets/keys/G6.mp3' },
    {note: 'G#6', url: '/assets/keys/Ab6.mp3' },
    {note: 'A6', url: '/assets/keys/A6.mp3' },
    {note: 'A#6', url: '/assets/keys/Bb6.mp3' },
    {note: 'B6', url: '/assets/keys/B6.mp3' },
    {note: 'C7', url: '/assets/keys/C7.mp3' },
    {note: 'C#7', url: '/assets/keys/Db7.mp3' },
    {note: 'D7', url: '/assets/keys/D7.mp3' },
    {note: 'D#7', url: '/assets/keys/Eb7.mp3' },
    {note: 'E7', url: '/assets/keys/E7.mp3' },
    {note: 'F7', url: '/assets/keys/F7.mp3' },
    {note: 'F#7', url: '/assets/keys/Gb7.mp3' },
    {note: 'G7', url: '/assets/keys/G7.mp3' },
    {note: 'G#7', url: '/assets/keys/Ab7.mp3' },
    {note: 'A7', url: '/assets/keys/A7.mp3' },
    {note: 'A#7', url: '/assets/keys/Bb7.mp3' },
    {note: 'B7', url: '/assets/keys/B7.mp3' },
    {note: 'C8', url: '/assets/keys/C8.mp3' }
];

const chords = [
    {name: 'A-flat major', key: 'G# major', url: '/assets/chords/a-flat-major-chord.mp3', chord_notes: ['G#', 'C', 'D#']},
    {name: 'A-flat minor', key: 'G# minor', url: '/assets/chords/a-flat-minor-chord.mp3', chord_notes: ['G#', 'B', 'D#']},
    {name: 'A major', key: 'A major', url: '/assets/chords/a-major-chord.mp3', chord_notes: ['A', 'C#', 'E']},
    {name: 'A minor', key: 'A minor', url: '/assets/chords/a-minor-chord.mp3', chord_notes: ['A', 'C', 'E']},
    {name: 'A-sharp major', key: 'A# major', url: '/assets/chords/a-sharp-major-chord.mp3', chord_notes: ['A#', 'C##', 'F']},
    {name: 'A-sharp minor', key: 'A# minor', url: '/assets/chords/a-sharp-minor-chord.mp3', chord_notes: ['A#', 'C#', 'F']},
    {name: 'B-flat major', key: 'A# major', url: '/assets/chords/b-flat-major-chord.mp3', chord_notes: ['A#', 'D', 'F']},
    {name: 'B-flat minor', key: 'A# minor', url: '/assets/chords/b-flat-minor-chord.mp3', chord_notes: ['A#', 'C#', 'F']},
    {name: 'B major', key: 'B major', url: '/assets/chords/b-major-chord.mp3', chord_notes: ['B', 'D#', 'F#']},
    {name: 'B minor', key: 'B minor', url: '/assets/chords/b-minor-chord.mp3', chord_notes: ['B', 'D', 'F#']},
    {name: 'C-flat major', key: 'B major', url: '/assets/chords/c-flat-major-chord.mp3', chord_notes: ['B', 'D#', 'F#']},
    {name: 'C-flat minor', key: 'B minor', url: '/assets/chords/c-flat-minor-chord.mp3', chord_notes: ['B', 'D##', 'F#']},
    {name: 'C major', key: 'C major', url: '/assets/chords/c-major-chord.mp3', chord_notes: ['C', 'E', 'G']},
    {name: 'C minor', key: 'C minor', url: '/assets/chords/c-minor-chord.mp3', chord_notes: ['C', 'D#', 'G']},
    {name: 'C-sharp major', key: 'C# major', url: '/assets/chords/c-sharp-major-chord.mp3', chord_notes: ['C#', 'F', 'G#']},
    {name: 'C-sharp minor', key: 'C# minor', url: '/assets/chords/c-sharp-minor-chord.mp3', chord_notes: ['C#', 'E', 'G#']},
    {name: 'D-flat major', key: 'C# major', url: '/assets/chords/d-flat-major-chord.mp3', chord_notes: ['C#', 'F', 'G#']},
    {name: 'D-flat minor', key: 'C# minor', url: '/assets/chords/d-flat-minor-chord.mp3', chord_notes: ['C#', 'E', 'G#']},
    {name: 'D major', key: 'D major', url: '/assets/chords/d-major-chord.mp3', chord_notes: ['D', 'F#', 'A']},
    {name: 'D minor', key: 'D minor', url: '/assets/chords/d-minor-chord.mp3', chord_notes: ['D', 'F', 'A']},
    {name: 'D-sharp-major', key: 'D#', url: '/assets/chords/d-sharp-major-chord.mp3', chord_notes: ['D#', 'F##', 'A#']},
    {name: 'D-sharp-major', key: 'D#', url: '/assets/chords/d-sharp-minor-chord.mp3', chord_notes: ['D#', 'F#', 'A#']},
    {name: 'E-flat major', key: 'D# major', url: '/assets/chords/e-flat-minor-chord.mp3', chord_notes: ['D#', 'G', 'A#']},
    {name: 'E-flat minor', key: 'E-flat minor', url: '/assets/chords/e-flat-minor-chord.mp3', chord_notes: ['D#', 'F#', 'A#']},
    {name: 'E major', key: 'E major', url: '/assets/chords/e-major-chord.mp3', chord_notes: ['E', 'G#', 'B']},
    {name: 'E minor', key: 'E minor', url: '/assets/chords/e-minor-chord.mp3', chord_notes: ['E', 'G', 'B']},
    {name: 'F-flat major', key: 'E major', url: '/assets/chords/f-flat-major-chord.mp3', chord_notes: ['E', 'G#', 'B']},
    {name: 'F-flat minor', key: 'E minor', url: '/assets/chords/f-flat-minor-chord.mp3', chord_notes: ['E', 'G##', 'B']},
    {name: 'F major', key: 'F major', url: '/assets/chords/f-major-chord.mp3', chord_notes: ['F', 'A', 'C']},
    {name: 'F minor', key: 'F minor', url: '/assets/chords/f-minor-chord.mp3', chord_notes: ['F', 'G#', 'C']},
    {name: 'F-sharp major', key: 'F-sharp major', url: '/assets/chords/f-sharp-major-chord.mp3', chord_notes: ['F#', 'A#', 'C#']},
    {name: 'F-sharp minor', key: 'F-sharp minor', url: '/assets/chords/f-sharp-minor-chord.mp3', chord_notes: ['F#', 'A', 'C#']},
    {name: 'G-flat major', key: 'F# major', url: '/assets/chords/g-flat-major-chord.mp3', chord_notes: ['F#', 'A#', 'C#']},
    {name: 'G-flat minor', key: 'F# minor', url: '/assets/chords/g-flat-minor-chord.mp3', chord_notes: ['F#', 'A##', 'C#']},
    {name: 'G major', key: 'G major', url: '/assets/chords/g-major-chord.mp3', chord_notes: ['G', 'B', 'D']},
    {name: 'G minor', key: 'G minor', url: '/assets/chords/g-minor-chord.mp3', chord_notes: ['G', 'A#', 'D']},
    {name: 'G-sharp major', key: 'G# major', url: '/assets/chords/g-sharp-major-chord.mp3', chord_notes: ['G#', 'C', 'D#']},
    {name: 'G-sharp minor', key: 'G# minor', url: '/assets/chords/g-sharp-minor-chord.mp3', chord_notes: ['G#', 'B', 'D#']}
  ];


const note_note = [];
const note_url = [];

for (let j = 0; j < notes.length; j++) {
    const element = notes[j];
    note_note.push(element.note);
    note_url.push(element.url);
}
console.log(note_note, note_url);
let randomKeys = _.sample(note_note);
console.log(randomKeys);


console.log(notes, chords);

const chord_name = [];
const chord_key = [];
const chord_url = [];
const chord_notes = [];

for (let j = 0; j < chords.length; j++) {
    const element = chords[j];
    chord_name.push(element.name);
    chord_key.push(element.key);
    chord_url.push(element.url);
    for (let i = 0; i < element.chord_notes.length; i++) {
        const elements = element.chord_notes[i];
        chord_notes.push(elements);
    } 
}
console.log(chord_name, chord_key, chord_url, chord_notes);

let currentAudio = null;

function volAudio(audioSrc) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    const audio = new Audio(audioSrc);
    currentAudio = audio;
    audio.volume = 0.3;
    let loopCount = 0;
    const maxLoops = 9; // Change this to the desired number of loops
    audio.addEventListener('ended', function () {
      loopCount++;
      if (loopCount < maxLoops) {
        this.currentTime = 0; // Reset the audio to the beginning
        this.play(); // Play again
      }
    });
    // Play the audio
    audio.play();
}

function playAudio(audioSrc) {
    
    const audio = new Audio(audioSrc);
    let loopCount = 0;
    const maxLoops = 6; // Change this to the desired number of loops
    audio.addEventListener('ended', function () {
      loopCount++;
      if (loopCount < maxLoops) {
        this.currentTime = 0; // Reset the audio to the beginning
        this.play(); // Play again
      }
    });
    // Play the audio
    audio.play();
}


function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let octave_1 = 1;
let octave_2 = 2;
let octave_3 = 3;
let octave_4 = 4;
let octave_5 = 5;
let octave_6 = 6;
let octave_7 = 7;
let octave_8 = 8;

function gen_song() {
   $(document).ready(() => {     
    
  $('[id="generate-music"]').on("click", function() {

    playAudio();

    const numberOfChords = 1;
    for (let i = 0; i < numberOfChords; i++) {
        
let write_to_div = document.getElementById('piano-notes');

if (notes && chords !== undefined) {
    if (Math.random() < 0.1) {
        // // Play a single note
        // const randomNote = getRandomElement(note_url);
        // const randomTiming = 5000; // Adjust the timing range as needed
        // setTimeout(() => playAudio(randomNote), randomTiming);
        // const res = notes.find(x => x.url ===  randomNote);
        // console.log(randomNote, res);
    } else {
        // Play a chord
        const randomChord = getRandomElement(chord_url);
        const randomTiming = Math.floor(Math.random() * [i]*1000);
        setTimeout(() =>volAudio(randomChord), randomTiming);
        const res = chords.find(x => x.url ===  randomChord);
        const res_keys = Object.values(res.chord_notes);
        console.log("Random Chord URL xxxxxxxx ", randomChord);
        console.log("Random Chord Search xxxxxxxx ", res);
        console.log("Random Chord Keys xxxxxxxx ", res_keys);

        write_to_div.insertAdjacentHTML(
            'afterBegin', 
            `<h1>` + res.name + ` <small class="fs-6">keys(` + res_keys + `)</small></h1>`
        );
        // write_to_div.innerHTML += `<h1>` + res.name + `</h1>`;

for (let j = 0; j < res_keys.length; j++) {
    const element_key = res_keys[j];
    if (element_key.includes("##")) {
        const transpose_key = element_key.replace(/##/g, '#');
        const get_key = notes.find(x => x.note === transpose_key+octave_2);
        setTimeout(() => playAudio(get_key.url), Math.floor(Math.random() * [j]*1000));
        console.log("Random Key ", [j], " xxxxxxxx ", get_key.note, get_key.url); 
    } else {
        const get_key = notes.find(x => x.note === element_key+octave_3);
        setTimeout(() => playAudio(get_key.url), Math.floor(Math.random() * [j]*1000));
        console.log("Random Key ", [j], " xxxxxxxx ", get_key.note, get_key.url);  
    }
}

      } 
}


    }
});
})
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
        
   
        <div id="piano">
            <div id="generate-music" className="piano-key btn btn-primary btn-lg">Generate piano</div>
            <div id="piano-notes" className="mt-4"></div>
        </div>

    </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('random_piano_generator_component')
    );
}

randomPianoGenerator();
gen_song();


  




