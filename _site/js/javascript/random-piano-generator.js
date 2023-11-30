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
    {id: '1', note: 'A0', url: '/assets/keys/A0.mp3' },
    {id: '2', note: 'A#0', url: '/assets/keys/Bb0.mp3' },
    {id: '3', note: 'B0', url: '/assets/keys/B0.mp3' },
    {id: '4', note: 'C1', url: '/assets/keys/C1.mp3' },
    {id: '5', note: 'C#1', url: '/assets/keys/Db1.mp3' },
    {id: '6', note: 'D1', url: '/assets/keys/D1.mp3' },
    {id: '7', note: 'D#1', url: '/assets/keys/Eb1.mp3' },
    {id: '8', note: 'E1', url: '/assets/keys/E1.mp3' },
    {id: '9', note: 'F1', url: '/assets/keys/F1.mp3' },
    {id: '10', note: 'F#1', url: '/assets/keys/Gb1.mp3' },
    {id: '11', note: 'G1', url: '/assets/keys/G1.mp3' },
    {id: '12', note: 'G#1', url: '/assets/keys/Ab1.mp3' },
    {id: '13', note: 'A1', url: '/assets/keys/A1.mp3' },
    {id: '14', note: 'A#1', url: '/assets/keys/Bb1.mp3' },
    {id: '15', note: 'B1', url: '/assets/keys/B1.mp3' },
    {id: '16', note: 'C2', url: '/assets/keys/C2.mp3' },
    {id: '17', note: 'C#2', url: '/assets/keys/Db2.mp3' },
    {id: '18', note: 'D2', url: '/assets/keys/D2.mp3' },
    {id: '19', note: 'D#2', url: '/assets/keys/Eb2.mp3' },
    {id: '20', note: 'E2', url: '/assets/keys/E2.mp3' },
    {id: '21', note: 'F2', url: '/assets/keys/F2.mp3' },
    {id: '22', note: 'F#2', url: '/assets/keys/Gb2.mp3' },
    {id: '23', note: 'G2', url: '/assets/keys/G2.mp3' },
    {id: '24', note: 'G#2', url: '/assets/keys/Ab2.mp3' },
    {id: '25', note: 'A2', url: '/assets/keys/A2.mp3' },
    {id: '26', note: 'A#2', url: '/assets/keys/Bb2.mp3' },
    {id: '27', note: 'B2', url: '/assets/keys/B2.mp3' },
    {id: '28', note: 'C3', url: '/assets/keys/C3.mp3' },
    {id: '29', note: 'C#3', url: '/assets/keys/Db3.mp3' },
    {id: '30', note: 'D3', url: '/assets/keys/D3.mp3' },
    {id: '31', note: 'D#3', url: '/assets/keys/Eb3.mp3' },
    {id: '32', note: 'E3', url: '/assets/keys/E3.mp3' },
    {id: '33', note: 'F3', url: '/assets/keys/F3.mp3' },
    {id: '34', note: 'F#3', url: '/assets/keys/Gb3.mp3' },
    {id: '35', note: 'G3', url: '/assets/keys/G3.mp3' },
    {id: '36', note: 'G#3', url: '/assets/keys/Ab3.mp3' },
    {id: '37', note: 'A3', url: '/assets/keys/A3.mp3' },
    {id: '38', note: 'A#3', url: '/assets/keys/Bb3.mp3' },
    {id: '39', note: 'B3', url: '/assets/keys/B3.mp3' },
    {id: '40', note: 'C4', url: '/assets/keys/C4.mp3' },
    {id: '41', note: 'C#4', url: '/assets/keys/Db4.mp3' },
    {id: '42', note: 'D4', url: '/assets/keys/D4.mp3' },
    {id: '43', note: 'D#4', url: '/assets/keys/Eb4.mp3' },
    {id: '44', note: 'E4', url: '/assets/keys/E4.mp3' },
    {id: '45', note: 'F4', url: '/assets/keys/F4.mp3' },
    {id: '46', note: 'F#4', url: '/assets/keys/Gb4.mp3' },
    {id: '47', note: 'G4', url: '/assets/keys/G4.mp3' },
    {id: '48', note: 'G#4', url: '/assets/keys/Ab4.mp3' },
    {id: '49', note: 'A4', url: '/assets/keys/A4.mp3' },
    {id: '50', note: 'A#4', url: '/assets/keys/Bb4.mp3' },
    {id: '51', note: 'B4', url: '/assets/keys/B4.mp3' },
    {id: '52', note: 'C5', url: '/assets/keys/C5.mp3' },
    {id: '53', note: 'C#5', url: '/assets/keys/Db5.mp3' },
    {id: '54', note: 'D5', url: '/assets/keys/D5.mp3' },
    {id: '55', note: 'D#5', url: '/assets/keys/Eb5.mp3' },
    {id: '56', note: 'E5', url: '/assets/keys/E5.mp3' },
    {id: '57', note: 'F5', url: '/assets/keys/F5.mp3' },
    {id: '58', note: 'F#5', url: '/assets/keys/Gb5.mp3' },
    {id: '59', note: 'G5', url: '/assets/keys/G5.mp3' },
    {id: '60', note: 'G#5', url: '/assets/keys/Ab5.mp3' },
    {id: '61', note: 'A5', url: '/assets/keys/A5.mp3' },
    {id: '62', note: 'A#5', url: '/assets/keys/Bb5.mp3' },
    {id: '63', note: 'B5', url: '/assets/keys/B5.mp3' },
    {id: '64', note: 'C6', url: '/assets/keys/C6.mp3' },
    {id: '65', note: 'C#6', url: '/assets/keys/Db6.mp3' },
    {id: '66', note: 'D6', url: '/assets/keys/D6.mp3' },
    {id: '67', note: 'D#6', url: '/assets/keys/Eb6.mp3' },
    {id: '68', note: 'E6', url: '/assets/keys/E6.mp3' },
    {id: '69', note: 'F6', url: '/assets/keys/F6.mp3' },
    {id: '70', note: 'F#6', url: '/assets/keys/Gb6.mp3' },
    {id: '71', note: 'G6', url: '/assets/keys/G6.mp3' },
    {id: '72', note: 'G#6', url: '/assets/keys/Ab6.mp3' },
    {id: '73', note: 'A6', url: '/assets/keys/A6.mp3' },
    {id: '74', note: 'A#6', url: '/assets/keys/Bb6.mp3' },
    {id: '75', note: 'B6', url: '/assets/keys/B6.mp3' },
    {id: '76', note: 'C7', url: '/assets/keys/C7.mp3' },
    {id: '77', note: 'C#7', url: '/assets/keys/Db7.mp3' },
    {id: '78', note: 'D7', url: '/assets/keys/D7.mp3' },
    {id: '79', note: 'D#7', url: '/assets/keys/Eb7.mp3' },
    {id: '80', note: 'E7', url: '/assets/keys/E7.mp3' },
    {id: '81', note: 'F7', url: '/assets/keys/F7.mp3' },
    {id: '82', note: 'F#7', url: '/assets/keys/Gb7.mp3' },
    {id: '83', note: 'G7', url: '/assets/keys/G7.mp3' },
    {id: '84', note: 'G#7', url: '/assets/keys/Ab7.mp3' },
    {id: '85', note: 'A7', url: '/assets/keys/A7.mp3' },
    {id: '86', note: 'A#7', url: '/assets/keys/Bb7.mp3' },
    {id: '87', note: 'B7', url: '/assets/keys/B7.mp3' },
    {id: '88', note: 'C8', url: '/assets/keys/C8.mp3' }
];

const chords = [
    {id: '1', name: 'A-flat major', key: 'G# major', url: '/assets/chords/a-flat-major-chord.mp3', chord_notes: ['G#', 'C', 'D#']},
    {id: '2', name: 'A-flat minor', key: 'G# minor', url: '/assets/chords/a-flat-minor-chord.mp3', chord_notes: ['G#', 'B', 'D#']},
    {id: '3', name: 'A major', key: 'A major', url: '/assets/chords/a-major-chord.mp3', chord_notes: ['A', 'C#', 'E']},
    {id: '4', name: 'A minor', key: 'A minor', url: '/assets/chords/a-minor-chord.mp3', chord_notes: ['A', 'C', 'E']},
    {id: '5', name: 'A-sharp major', key: 'A# major', url: '/assets/chords/a-sharp-major-chord.mp3', chord_notes: ['A#', 'C##', 'F']},
    {id: '6', name: 'A-sharp minor', key: 'A# minor', url: '/assets/chords/a-sharp-minor-chord.mp3', chord_notes: ['A#', 'C#', 'F']},
    {id: '7', name: 'B-flat major', key: 'A# major', url: '/assets/chords/b-flat-major-chord.mp3', chord_notes: ['A#', 'D', 'F']},
    {id: '8', name: 'B-flat minor', key: 'A# minor', url: '/assets/chords/b-flat-minor-chord.mp3', chord_notes: ['A#', 'C#', 'F']},
    {id: '9', name: 'B major', key: 'B major', url: '/assets/chords/b-major-chord.mp3', chord_notes: ['B', 'D#', 'F#']},
    {id: '10', name: 'B minor', key: 'B minor', url: '/assets/chords/b-minor-chord.mp3', chord_notes: ['B', 'D', 'F#']},
    {id: '11', name: 'C-flat major', key: 'B major', url: '/assets/chords/c-flat-major-chord.mp3', chord_notes: ['B', 'D#', 'F#']},
    {id: '12', name: 'C-flat minor', key: 'B minor', url: '/assets/chords/c-flat-minor-chord.mp3', chord_notes: ['B', 'D##', 'F#']},
    {id: '13', name: 'C major', key: 'C major', url: '/assets/chords/c-major-chord.mp3', chord_notes: ['C', 'E', 'G']},
    {id: '14', name: 'C minor', key: 'C minor', url: '/assets/chords/c-minor-chord.mp3', chord_notes: ['C', 'D#', 'G']},
    {id: '15', name: 'C-sharp major', key: 'C# major', url: '/assets/chords/c-sharp-major-chord.mp3', chord_notes: ['C#', 'F', 'G#']},
    {id: '16', name: 'C-sharp minor', key: 'C# minor', url: '/assets/chords/c-sharp-minor-chord.mp3', chord_notes: ['C#', 'E', 'G#']},
    {id: '17', name: 'D-flat major', key: 'C# major', url: '/assets/chords/d-flat-major-chord.mp3', chord_notes: ['C#', 'F', 'G#']},
    {id: '18', name: 'D-flat minor', key: 'C# minor', url: '/assets/chords/d-flat-minor-chord.mp3', chord_notes: ['C#', 'E', 'G#']},
    {id: '19', name: 'D major', key: 'D major', url: '/assets/chords/d-major-chord.mp3', chord_notes: ['D', 'F#', 'A']},
    {id: '20', name: 'D minor', key: 'D minor', url: '/assets/chords/d-minor-chord.mp3', chord_notes: ['D', 'F', 'A']},
    {id: '21', name: 'D-sharp-major', key: 'D#', url: '/assets/chords/d-sharp-major-chord.mp3', chord_notes: ['D#', 'F##', 'A#']},
    {id: '22', name: 'D-sharp-major', key: 'D#', url: '/assets/chords/d-sharp-minor-chord.mp3', chord_notes: ['D#', 'F#', 'A#']},
    {id: '23', name: 'E-flat major', key: 'D# major', url: '/assets/chords/e-flat-minor-chord.mp3', chord_notes: ['D#', 'G', 'A#']},
    {id: '24', name: 'E-flat minor', key: 'E-flat minor', url: '/assets/chords/e-flat-minor-chord.mp3', chord_notes: ['D#', 'F#', 'A#']},
    {id: '25', name: 'E major', key: 'E major', url: '/assets/chords/e-major-chord.mp3', chord_notes: ['E', 'G#', 'B']},
    {id: '26', name: 'E minor', key: 'E minor', url: '/assets/chords/e-minor-chord.mp3', chord_notes: ['E', 'G', 'B']},
    {id: '27', name: 'F-flat major', key: 'E major', url: '/assets/chords/f-flat-major-chord.mp3', chord_notes: ['E', 'G#', 'B']},
    {id: '28', name: 'F-flat minor', key: 'E minor', url: '/assets/chords/f-flat-minor-chord.mp3', chord_notes: ['E', 'G##', 'B']},
    {id: '29', name: 'F major', key: 'F major', url: '/assets/chords/f-major-chord.mp3', chord_notes: ['F', 'A', 'C']},
    {id: '30', name: 'F minor', key: 'F minor', url: '/assets/chords/f-minor-chord.mp3', chord_notes: ['F', 'G#', 'C']},
    {id: '31', name: 'F-sharp major', key: 'F-sharp major', url: '/assets/chords/f-sharp-major-chord.mp3', chord_notes: ['F#', 'A#', 'C#']},
    {id: '32', name: 'F-sharp minor', key: 'F-sharp minor', url: '/assets/chords/f-sharp-minor-chord.mp3', chord_notes: ['F#', 'A', 'C#']},
    {id: '33', name: 'G-flat major', key: 'F# major', url: '/assets/chords/g-flat-major-chord.mp3', chord_notes: ['F#', 'A#', 'C#']},
    {id: '34', name: 'G-flat minor', key: 'F# minor', url: '/assets/chords/g-flat-minor-chord.mp3', chord_notes: ['F#', 'A##', 'C#']},
    {id: '35', name: 'G major', key: 'G major', url: '/assets/chords/g-major-chord.mp3', chord_notes: ['G', 'B', 'D']},
    {id: '36', name: 'G minor', key: 'G minor', url: '/assets/chords/g-minor-chord.mp3', chord_notes: ['G', 'A#', 'D']},
    {id: '37', name: 'G-sharp major', key: 'G# major', url: '/assets/chords/g-sharp-major-chord.mp3', chord_notes: ['G#', 'C', 'D#']},
    {id: '38', name: 'G-sharp minor', key: 'G# minor', url: '/assets/chords/g-sharp-minor-chord.mp3', chord_notes: ['G#', 'B', 'D#']}
  ];

const chord_progressions = [
    {
        name: 'A-flat major',
        chords: [
            {name: 'A-flat major', url: chords[0].url, chord_notes: chords[0].chord_notes },
            {name: 'B-flat major', url: chords[6].url, chord_notes: chords[6].chord_notes }, 
            {name: 'C minor', url: chords[13].url, chord_notes: chords[13].chord_notes }, 
            {name: 'D-flat major', url: chords[16].url, chord_notes: chords[16].chord_notes }, 
            {name: 'E-flat major', url: chords[26].url, chord_notes: chords[26].chord_notes }, 
            {name: 'F minor', url: chords[29].url, chord_notes: chords[29].chord_notes }
        ],
    },
    {
        name: 'C major',
        chords: [
            {name: 'C major', url: chords[12].url, chord_notes: chords[12].chord_notes}, 
            {name: 'D minor', url: chords[19].url, chord_notes: chords[19].chord_notes}, 
            {name: 'E minor', url: chords[25].url, chord_notes: chords[25].chord_notes}, 
            {name: 'F major', url: chords[28].url, chord_notes: chords[28].chord_notes}, 
            {name: 'G major', url: chords[34].url, chord_notes: chords[34].chord_notes}, 
            {name: 'A minor', url: chords[3].url, chord_notes: chords[3].chord_notes}
        ],
    },    
    // {
    //     name: '',
    //     chords: [],
    // },

];

let beats_per_minute = 100;
let time_signature_1 = 4;
let time_signature_2 = 4;

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

async function volAudio(audioSrc) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    const audio = await new Audio(audioSrc);
    currentAudio = audio;
    audio.volume = 0.3;
    let loopCount = 0;
    const maxLoops = 4; // Change this to the desired number of loops
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

async function playAudio(audioSrc) {
    const audio = await new Audio(audioSrc);
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
    
  $('[id="generate-music"]').on("click", function(e) {
    currentAudio

    e.preventDefault();

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
        
        

        const res = chords.find(x => x.url ===  randomChord);
        const res_keys = Object.values(res.chord_notes);

        const chord_progress_res = chord_progressions.find(x => x.name ===  res.name);
        const chordProgress = chord_progressions;
        console.log("Chord Progresses ", chordProgress);

chord_progressions.forEach(element => {
    if (res.name == element.name) {

        
        alert("Chord Progress");
        console.log("Chord Progress xxxxxxxx ", element.name);
        console.log("Further Chords xxxxxxxx ", element.chords[0]);




    

    const randomTiming = Math.floor((Math.random() * 10000) + 1000);
    console.log("ooooooooooooo ", randomTiming);
    const keyTiming = Math.floor(Math.random() * randomTiming / 2);
        
        // const playTimeout = setTimeout(() => {
        //     volAudio(randomChord)
        // }, randomTiming);
        // function playStopFunction() {
        //     clearTimeout(playTimeout);
        // }
        // playStopFunction();

for (let i = 0; i < element.chords.length; i++) {
    const element_chords = element.chords[i];
    const randomTimingMath = Math.round(randomTiming * [i]);
    // console.log("Progression Chord zzzzzzzz ", element_chords.url, randomTimingMath);

    const audioQueue = element.chords
  
      let currentAudioIndex = 0;
      const audioElement = document.getElementById('audio');
  
      function playNextAudio() {
        if (currentAudioIndex < audioQueue.length) {
          const audioSrc = audioQueue.id;
          audioElement.src = audioSrc;
          audioElement.play();
          currentAudioIndex++;
        }
      }
  
      function startAudioQueue() {
        // Reset the index to the beginning
        currentAudioIndex = 0;
  
        // Attach an event listener to play the next audio when the current one ends
        audioElement.addEventListener('ended', playNextAudio);
  
        // Start playing the first audio
        playNextAudio();
      }

      startAudioQueue()
      
    function progressChords(chords) {
        setTimeout(() => {
            volAudio(element_chords.url)
        },  Math.round(randomTimingMath) + 2000);
    }
    setInterval(progressChords, Math.round(randomTimingMath) * [i] + 10000);

    const get_chord_progress_notes = element_chords.chord_notes;
    const get_chord_progress_url = element_chords.url;
    console.log("Progression Chord Notes vvvvvvvvvv ", get_chord_progress_notes, get_chord_progress_url,  Math.round(randomTimingMath) + 2000);

    
    // for (let f = 0; f < get_chord_progress_notes.length; f++) {
    //     const key_element = get_chord_progress_notes[f];
    //     if (key_element.includes("##")) {
    //         const transpose_key = key_element.replace(/##/g, '#');
    //         const get_key = notes.find(x => x.note === transpose_key+octave_3); 
    //         setTimeout(() => {
    //             playAudio(get_key.url)
    //         }, keyTiming);
    //     } else {
    //         const get_key = notes.find(x => x.note === key_element+octave_3);
    //         setTimeout(() => {
    //             playAudio(get_key.url)
    //         }, keyTiming);
    //     }
    //     console.log("Progression Chord Notes rrrrrrrrr ", key_element);
    // }

}        

// for (let j = 0; j < res_keys.length; j++) {
//     const element_key = res_keys[j];
//     if (element_key.includes("##")) {
//         const transpose_key = element_key.replace(/##/g, '#');
//         const get_key = notes.find(x => x.note === transpose_key+octave_2);
//         setTimeout(() => {
//             playAudio(get_key.url)
//         }, keyTiming);
//         console.log("Chord Key ", [j], " pppppppp ", get_key.note, get_key.url, keyTiming * [j] * 1.5); 
//     } else {
//         const get_key = notes.find(x => x.note === element_key+octave_3);
//         setTimeout(() => {
//             playAudio(get_key.url)
//         }, keyTiming);
        
//         console.log("Chord Key ", [j], " pppppppp ", get_key.note, get_key.url, keyTiming * [j] * 1.5);  
//     }
// }

console.log("Random Chord Timing xxxxxxxx ", randomTiming);
        console.log("Random Chord URL xxxxxxxx ", randomChord);
        console.log("Random Chord Search xxxxxxxx ", res);
        console.log("Random Chord Keys xxxxxxxx ", res_keys);


        write_to_div.insertAdjacentHTML(
            'afterBegin', 
            `<h1>` + res.name + ` <small class="fs-6">keys(` + res_keys + `)</small></h1>`
        );
        // write_to_div.innerHTML += `<h1>` + res.name + `</h1>`;




    }  
});



        



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

            <audio id="audio" className="audio"></audio>


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


  




