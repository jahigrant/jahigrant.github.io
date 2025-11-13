var low_notes = [
    {id: '0', note: 'A', octave: '1', key: 'A', url: '/assets/keys/A1.mp3' },
    {id: '1', note: 'A#', octave: '1', key: 'A#', url: '/assets/keys/Bb1.mp3' },
    {id: '2', note: 'B', octave: '1', key: 'B', url: '/assets/keys/B1.mp3' },
    {id: '3', note: 'C', octave: '2', key: 'C', url: '/assets/keys/C2.mp3' },
    {id: '4', note: 'C#', octave: '2', key: 'C#', url: '/assets/keys/Db2.mp3' },
    {id: '5', note: 'D', octave: '2', key: 'D', url: '/assets/keys/D2.mp3' },
    {id: '6', note: 'D#', octave: '2', key: 'D#', url: '/assets/keys/Eb2.mp3' },
    {id: '7', note: 'E', octave: '2', key: 'E', url: '/assets/keys/E2.mp3' },
    {id: '8', note: 'F', octave: '2', key: 'F', url: '/assets/keys/F2.mp3' },
    {id: '9', note: 'F#', octave: '2', key: 'F#', url: '/assets/keys/Gb2.mp3' },
    {id: '10', note: 'G', octave: '2', key: 'G', url: '/assets/keys/G2.mp3' },
    {id: '11', note: 'G#', octave: '2', key: 'G#', url: '/assets/keys/Ab2.mp3' }
];

var notes = [
    // {id: '1', note: 'A', octave: '0',  key: 'A', url: '/assets/keys/A0.mp3' },
    // {id: '2', note: 'A#', octave: '0', key: 'A#', url: '/assets/keys/Bb0.mp3' },
    // {id: '3', note: 'B', octave: '0',  key: 'B', url: '/assets/keys/B0.mp3' },
    // {id: '4', note: 'C', octave: '1',  key: 'C', url: '/assets/keys/C1.mp3' },
    // {id: '5', note: 'C#', octave: '1', key: 'C#', url: '/assets/keys/Db1.mp3' },
    // {id: '6', note: 'D', octave: '1',  key: 'D', url: '/assets/keys/D1.mp3' },
    // {id: '7', note: 'D#', octave: '1', key: 'D#', url: '/assets/keys/Eb1.mp3' },
    // {id: '8', note: 'E', octave: '1',  key: 'E', url: '/assets/keys/E1.mp3' },
    // {id: '9', note: 'F', octave: '1',  key: 'F', url: '/assets/keys/F1.mp3' },
    // {id: '10', note: 'F#', octave: '1', key: 'F#', url: '/assets/keys/Gb1.mp3' },
    // {id: '11', note: 'G', octave: '1', key: 'G', url: '/assets/keys/G1.mp3' },
    // {id: '12', note: 'G#', octave: '1', key: 'G#', url: '/assets/keys/Ab1.mp3' },
  

    {id: '0', note: 'A2', octave: '2', key: 'A', url: '/assets/keys/A2.mp3' },
    {id: '1', note: 'A#2', octave: '2', key: 'A#', url: '/assets/keys/Bb2.mp3' },
    {id: '2', note: 'B2', octave: '2', key: 'B', url: '/assets/keys/B2.mp3' },
    {id: '3', note: 'C3', octave: '3', key: 'C', url: '/assets/keys/C3.mp3' },
    {id: '4', note: 'C#3', octave: '3', key: 'C#', url: '/assets/keys/Db3.mp3' },
    {id: '5', note: 'D3', octave: '3', key: 'D', url: '/assets/keys/D3.mp3' },
    {id: '6', note: 'D#3', octave: '3', key: 'D#', url: '/assets/keys/Eb3.mp3' },
    {id: '7', note: 'E3', octave: '3', key: 'E', url: '/assets/keys/E3.mp3' },
    {id: '8', note: 'F3', octave: '3', key: 'F', url: '/assets/keys/F3.mp3' },
    {id: '9', note: 'F#3', octave: '3', key: 'F#', url: '/assets/keys/Gb3.mp3' },
    {id: '10', note: 'G3', octave: '3', key: 'G', url: '/assets/keys/G3.mp3' },
    {id: '11', note: 'G#3', octave: '3', key: 'G#', url: '/assets/keys/Ab3.mp3' }

    // {id: '37', note: 'A', octave: '3', key: 'A', url: '/assets/keys/A3.mp3' },
    // {id: '38', note: 'A#', octave: '3', key: 'A#', url: '/assets/keys/Bb3.mp3' },
    // {id: '39', note: 'B', octave: '3', key: 'B', url: '/assets/keys/B3.mp3' },
    // {id: '40', note: 'C', octave: '4', key: 'C', url: '/assets/keys/C4.mp3' },
    // {id: '41', note: 'C#', octave: '4', key: 'C#', url: '/assets/keys/Db4.mp3' },
    // {id: '42', note: 'D', octave: '4', key: 'D', url: '/assets/keys/D4.mp3' },
    // {id: '43', note: 'D#', octave: '4', key: 'D#', url: '/assets/keys/Eb4.mp3' },
    // {id: '44', note: 'E', octave: '4', key: 'E', url: '/assets/keys/E4.mp3' },
    // {id: '45', note: 'F', octave: '4', key: 'F', url: '/assets/keys/F4.mp3' },
    // {id: '46', note: 'F#', octave: '4', key: 'F#', url: '/assets/keys/Gb4.mp3' },
    // {id: '47', note: 'G', octave: '4', key: 'G', url: '/assets/keys/G4.mp3' },
    // {id: '48', note: 'G#', octave: '4', key: 'G#', url: '/assets/keys/Ab4.mp3' },
    // {id: '49', note: 'A', octave: '4', key: 'A', url: '/assets/keys/A4.mp3' },
    // {id: '50', note: 'A#', octave: '4', key: 'A#', url: '/assets/keys/Bb4.mp3' },
    // {id: '51', note: 'B', octave: '4', key: 'B', url: '/assets/keys/B4.mp3' },
    // {id: '52', note: 'C', octave: '5', key: 'C', url: '/assets/keys/C5.mp3' },
    // {id: '53', note: 'C#', octave: '5', key: 'C#', url: '/assets/keys/Db5.mp3' },
    // {id: '54', note: 'D', octave: '5', key: 'D', url: '/assets/keys/D5.mp3' },
    // {id: '55', note: 'D#', octave: '5', key: 'D#', url: '/assets/keys/Eb5.mp3' },
    // {id: '56', note: 'E', octave: '5', key: 'E', url: '/assets/keys/E5.mp3' },
    // {id: '57', note: 'F', octave: '5', key: 'F', url: '/assets/keys/F5.mp3' },
    // {id: '58', note: 'F#', octave: '5', key: 'F#', url: '/assets/keys/Gb5.mp3' },
    // {id: '59', note: 'G', octave: '5', key: 'G', url: '/assets/keys/G5.mp3' },
    // {id: '60', note: 'G#', octave: '5', key: 'G#', url: '/assets/keys/Ab5.mp3' },
    // {id: '61', note: 'A', octave: '5', key: 'A', url: '/assets/keys/A5.mp3' },
    // {id: '62', note: 'A#', octave: '5', key: 'A#', url: '/assets/keys/Bb5.mp3' },
    // {id: '63', note: 'B', octave: '5', key: 'B', url: '/assets/keys/B5.mp3' },
    // {id: '64', note: 'C', octave: '6', key: 'C', url: '/assets/keys/C6.mp3' },
    // {id: '65', note: 'C#', octave: '6', key: 'C#', url: '/assets/keys/Db6.mp3' },
    // {id: '66', note: 'D', octave: '6', key: 'D', url: '/assets/keys/D6.mp3' },
    // {id: '67', note: 'D#', octave: '6', key: 'D#', url: '/assets/keys/Eb6.mp3' },
    // {id: '68', note: 'E', octave: '6', key: 'E', url: '/assets/keys/E6.mp3' },
    // {id: '69', note: 'F', octave: '6', key: 'F', url: '/assets/keys/F6.mp3' },
    // {id: '70', note: 'F#', octave: '6', key: 'F#', url: '/assets/keys/Gb6.mp3' },
    // {id: '71', note: 'G', octave: '6', key: 'G', url: '/assets/keys/G6.mp3' },
    // {id: '72', note: 'G#', octave: '6', key: 'G#', url: '/assets/keys/Ab6.mp3' },
    // {id: '73', note: 'A', octave: '6', key: 'A', url: '/assets/keys/A6.mp3' },
    // {id: '74', note: 'A#', octave: '6', key: 'A#', url: '/assets/keys/Bb6.mp3' },
    // {id: '75', note: 'B', octave: '6', key: 'B', url: '/assets/keys/B6.mp3' },
    // {id: '76', note: 'C', octave: '7', key: 'C', url: '/assets/keys/C7.mp3' },
    // {id: '77', note: 'C#', octave: '7', key: 'C#', url: '/assets/keys/Db7.mp3' },
    // {id: '78', note: 'D', octave: '7', key: 'D', url: '/assets/keys/D7.mp3' },
    // {id: '79', note: 'D#', octave: '7', key: 'D#', url: '/assets/keys/Eb7.mp3' },
    // {id: '80', note: 'E', octave: '7', key: 'E', url: '/assets/keys/E7.mp3' },
    // {id: '81', note: 'F', octave: '7', key: 'F', url: '/assets/keys/F7.mp3' },
    // {id: '82', note: 'F#', octave: '7', key: 'F#', url: '/assets/keys/Gb7.mp3' },
    // {id: '83', note: 'G', octave: '7', key: 'G', url: '/assets/keys/G7.mp3' },
    // {id: '84', note: 'G#', octave: '7', key: 'G#', url: '/assets/keys/Ab7.mp3' },
    // {id: '85', note: 'A', octave: '7', key: 'A', url: '/assets/keys/A7.mp3' },
    // {id: '86', note: 'A#', octave: '7', key: 'A#', url: '/assets/keys/Bb7.mp3' },
    // {id: '87', note: 'B', octave: '7', key: 'B', url: '/assets/keys/B7.mp3' },
    // {id: '88', note: 'C', octave: '8', key: 'C', url: '/assets/keys/C8.mp3' }
];



const note_keys = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

const chord_names = {
    'Major triad': [0, 4, 7],
    'Minor triad': [0, 3, 7],
    'Augmented triad': [0, 4, 8],
    'Diminished  triad': [0, 3, 6],
    'Dominanth seventh': [0, 4, 7, 10],
    'Major seventh': [0, 4, 7, 11],
    'Minor-major seventh': [0, 3, 7, 11],
    'Minor seventh': [0, 3, 7, 10],
    'Augmented-major seventh': [0, 4, 8, 11],
    'Augmented seventh': [0, 4, 8, 10],
    'Half-diminished seventh': [0, 3, 8, 10],
    'Diminished seventh': [0, 3, 6, 10],
    'Dominant seventh flat five': [0, 4, 6, 10],
    'Major ninth': [0, 4, 7, 11, 14],
    'Dominant ninth': [0, 4, 7, 10, 14],
    'Dominant minor ninth': [0, 4, 7, 10, 13],
    'Minor-major ninth': [0, 3, 7, 11, 14],
    'Minor ninth': [0, 3, 7, 10, 14],
    'Augmented major ninth': [0, 4, 8, 11, 14],
    'Augmented dominant ninth': [0, 4, 8, 10, 14],
    'Half-diminished ninth': [0, 3, 6, 10, 14],
    'Half-diminished minor ninth': [0, 3, 6, 10, 13],
    'Diminished ninth': [0, 3, 6, 10, 14],
    'Diminished minor ninth': [0, 3, 6, 10, 13],
}

function addUniqueId(jsonData) {
    let index = 0;
    for (let key in jsonData) {
        jsonData[key].id = index++;
    }
    return jsonData;
}

// Harmonic equivilents
// Cb = B
// Fb = E
// Gb = F#
// Db = C#
// Ab = G#
// Eb = D#
// Bb = A#
// E# = F
// B# = C

const major_chord_table = [
    {chord: 'C', root: 'C', major_third: 'E', perfect_fifth: 'G'},
    {chord: 'Csharp', root: 'Csharp', major_third: 'F', perfect_fifth: 'Gsharp'},
    {chord: 'Dflat', root: 'Dflat', major_third: 'F', perfect_fifth: 'Aflat'},
    {chord: 'D', root: 'D', major_third: 'Fsharp', perfect_fifth: 'A'},
    {chord: 'Dsharp', root: 'Dsharp', major_third: 'G', perfect_fifth: 'Asharp'},
    {chord: 'Eflat', root: 'Eflat', major_third: 'G', perfect_fifth: 'Bflat'},
    {chord: 'E', root: 'E', major_third: 'Gsharp', perfect_fifth: 'B'},
    {chord: 'F', root: 'F', major_third: 'A', perfect_fifth: 'C'},
    {chord: 'Fsharp', root: 'Fsharp', major_third: 'Asharp', perfect_fifth: 'Csharp'},
    {chord: 'Gflat', root: 'Gflat', major_third: 'Bflat', perfect_fifth: 'Dflat'},
    {chord: 'G', root: 'G', major_third: 'B', perfect_fifth: 'D'},
    {chord: 'Gsharp', root: 'Gsharp', major_third: 'C', perfect_fifth: 'Dsharp'},
    {chord: 'Aflat', root: 'Aflat', major_third: 'C', perfect_fifth: 'Eflat'},
    {chord: 'A', root: 'A', major_third: 'Csharp', perfect_fifth: 'E'},
    {chord: 'Asharp', root: 'Asharp', major_third: 'D', perfect_fifth: 'F'},
    {chord: 'Bflat', root: 'Bflat', major_third: 'D', perfect_fifth: 'F'},
    {chord: 'B', root: 'B', major_third: 'Dsharp', perfect_fifth: 'Fsharp'}
]

const chords = [
    {id: '', name: 'C major', key: 'CM', scale: 'major', chord_notes: ['C', 'E', 'G']},
    {id: '', name: 'C minor', key: 'Cm', scale: 'minor', chord_notes: ['C', 'Dsharp', 'G']},
    {id: '', name: 'C diminished', key: 'C°', scale: 'diminished', chord_notes: ['C', 'Dsharp', 'Fsharp']},
    {id: '', name: 'C augmented', key: 'C+', scale: 'augmented', chord_notes: ['C', 'E', 'Gsharp']},
    {id: '', name: 'C dominant seventh', key: 'C7', scale: 'dominant seventh', chord_notes: ['C', 'E', 'G', 'Asharp']},
    {id: '', name: 'C minor seventh', key: 'Cm7', scale: 'minor seventh', chord_notes: ['C', 'Dsharp', 'G', 'Gsharp']},
    {id: '', name: 'C major seventh', key: 'CM7', scale: 'major seventh', chord_notes: ['C', 'E', 'G', 'B']},
    {id: '', name: 'C-sharp major', key: 'C#M', scale: 'major', chord_notes: ['Csharp', 'F', 'Gsharp']},
    {id: '', name: 'C-sharp minor', key: 'C#m', scale: 'minor', chord_notes: ['Csharp', 'E', 'Gsharp']},
    {id: '', name: 'C-sharp diminished', key: 'C#°', scale: 'diminished', chord_notes: ['Csharp', 'E', 'G']},
    {id: '', name: 'C-sharp augmented', key: 'C#+', scale: 'sharp augmented', chord_notes: ['Csharp', 'E', 'A']},
    {id: '', name: 'C-sharp dominant seventh', key: 'C#7', scale: 'sharp dominant seventh', chord_notes: ['Csharp', 'F', 'Gsharp', 'B']},
    {id: '', name: 'C-sharp minor seventh', key: 'C#m7', scale: 'sharp minor seventh', chord_notes: ['Csharp', 'E', 'Gsharp', 'B']},
    {id: '', name: 'C-sharp major seventh', key: 'C#M7', scale: 'sharp major seventh', chord_notes: ['Csharp', 'F', 'Gsharp', 'C']},
    {id: '', name: 'C-flat major', key: 'C♭M', scale: 'flat major', chord_notes: ['B', 'Dsharp', 'Fsharp']},
    {id: '', name: 'C-flat minor', key: 'C♭m', scale: 'flat minor', chord_notes: ['B', 'D', 'Fsharp']},
    {id: '', name: 'C-flat diminished', key: 'C♭°', scale: 'flat diminished', chord_notes: ['B', 'D', 'Fsharp']},
    {id: '', name: 'C-flat augmented', key: 'C♭+', scale: 'flat augmented', chord_notes: ['B', 'D', 'G']},
    {id: '', name: 'C-flat dominant seventh', key: 'C♭7', scale: 'flat dominant seventh', chord_notes: ['B', 'Dsharp', 'Fsharp', 'A']},
    {id: '', name: 'C-flat major seventh', key: 'C♭M7', scale: 'flat major seventh', chord_notes: ['B', 'Dsharp', 'Fsharp', 'Asharp']},
    {id: '', name: 'C-flat minor seventh', key: 'C♭m7', scale: 'flat minor seventh', chord_notes: ['B', 'D', 'Fsharp', 'A']},

    {id: '', name: 'D major', key: 'DM', scale: 'major', chord_notes: ['D', 'Fsharp', 'A']},
    {id: '', name: 'D minor', key: 'Dm', scale: 'minor', chord_notes: ['D', 'F', 'A']},
    {id: '', name: 'D diminished', key: 'D°', scale: 'diminished', chord_notes: ['D', 'F', 'Gsharp']},
    {id: '', name: 'D augmented', key: 'D+', scale: 'augmented', chord_notes: ['D', 'Fsharp', 'Asharp']},
    {id: '', name: 'D dominant seventh', key: 'D7', scale: 'dominant seventh', chord_notes: ['D', 'Fsharp', 'A', 'C']},
    {id: '', name: 'D major seventh', key: 'DM7', scale: 'major seventh', chord_notes: ['D', 'Fsharp', 'A', 'Csharp']},
    {id: '', name: 'D minor seventh', key: 'Dm7', scale: 'minor seventh', chord_notes: ['D', 'F', 'A', 'C']},
    {id: '', name: 'D-sharp major', key: 'D#M', scale: 'major', chord_notes: ['Dsharp', 'G', 'Asharp']},
    {id: '', name: 'D-sharp minor', key: 'D#m', scale: 'minor', chord_notes: ['Dsharp', 'Fsharp', 'Asharp']},
    {id: '', name: 'D-sharp diminished', key: 'D#°', scale: 'diminished', chord_notes: ['Dsharp', 'Fsharp', 'A']},
    {id: '', name: 'D-sharp augmented', key: 'D#+', scale: 'sharp augmented', chord_notes: ['Dsharp', 'G', 'B']},
    {id: '', name: 'D-sharp dominant seventh', key: 'D#7', scale: 'sharp dominant seventh', chord_notes: ['Dsharp', 'G', 'Asharp', 'Csharp']},
    {id: '', name: 'D-sharp minor seventh', key: 'D#m7', scale: 'sharp minor seventh', chord_notes: ['Dsharp', 'Fsharp', 'Asharp', 'Csharp']},
    {id: '', name: 'D-sharp major seventh', key: 'D#M7', scale: 'sharp major seventh', chord_notes: ['Dsharp', 'G', 'Asharp', 'D']},
    {id: '', name: 'D-flat major', key: 'D♭M', scale: 'flat major', chord_notes: ['Csharp', 'F', 'Gsharp']},
    {id: '', name: 'D-flat minor', key: 'D♭m', scale: 'flat minor', chord_notes: ['Csharp', 'E', 'Gsharp']},
    {id: '', name: 'D-flat diminished', key: 'D♭°', scale: 'flat diminished', chord_notes: ['Csharp', 'E', 'Gsharp']},
    {id: '', name: 'D-flat augmented', key: 'D♭+', scale: 'flat augmented', chord_notes: ['Csharp', 'F', 'A']},
    {id: '', name: 'D-flat dominant seventh', key: 'D♭7', scale: 'flat dominant seventh', chord_notes: ['Csharp', 'F', 'Gsharp', 'B']},
    {id: '', name: 'D-flat major seventh', key: 'D♭M7', scale: 'flat major seventh', chord_notes: ['Csharp', 'F', 'Gsharp', 'C']},
    {id: '', name: 'D-flat minor seventh', key: 'D♭m7', scale: 'flat minor seventh', chord_notes: ['Csharp', 'E', 'Gsharp', 'B']},
 
    {id: '', name: 'E major', key: 'EM', scale: 'major', chord_notes: ['E', 'Gsharp', 'B']},
    {id: '', name: 'E minor', key: 'Em', scale: 'minor', chord_notes: ['E', 'G', 'B']},
    {id: '', name: 'E diminished', key: 'E°', scale: 'diminished', chord_notes: ['E', 'G', 'Asharp']},
    {id: '', name: 'E augmented', key: 'E+', scale: 'augmented', chord_notes: ['E', 'Gsharp', 'C']},
    {id: '', name: 'E dominant seventh', key: 'E7', scale: 'dominant seventh', chord_notes: ['E', 'Gsharp', 'B', 'D']},
    {id: '', name: 'E major seventh', key: 'EM7', scale: 'major seventh', chord_notes: ['E', 'Gsharp', 'B', 'Dsharp']},
    {id: '', name: 'E minor seventh', key: 'Em7', scale: 'minor seventh', chord_notes: ['E', 'G', 'B', 'D']},
    {id: '', name: 'E-flat major', key: 'E♭M', scale: 'flat major', chord_notes: ['Csharp', 'F', 'Gsharp']},
    {id: '', name: 'E-flat minor', key: 'E♭m', scale: 'flat minor', chord_notes: ['Dsharp', 'Fsharp', 'Asharp']},
    {id: '', name: 'E-flat diminished', key: 'E♭°', scale: 'flat diminished', chord_notes: ['Dsharp', 'Fsharp', 'A']},
    {id: '', name: 'E-flat augmented', key: 'E♭+', scale: 'flat augmented', chord_notes: ['Dsharp', 'G', 'B']},
    {id: '', name: 'E-flat dominant seventh', key: 'E♭7', scale: 'flat dominant seventh', chord_notes: ['Dsharp', 'G', 'Asharp', 'Csharp']},
    {id: '', name: 'E-flat major seventh', key: 'E♭M7', scale: 'flat major seventh', chord_notes: ['Dsharp', 'G', 'Asharp', 'D']},
    {id: '', name: 'E-flat minor seventh', key: 'E♭m7', scale: 'flat minor seventh', chord_notes: ['Dsharp', 'Fsharp', 'Asharp', 'Csharp']},

    {id: '', name: 'F major', key: 'FM', scale: 'major', chord_notes: ['F', 'A', 'C']},
    {id: '', name: 'F minor', key: 'Fm', scale: 'minor', chord_notes: ['F', 'Gsharp', 'C']},
    {id: '', name: 'F diminished', key: 'F°', scale: 'diminished', chord_notes: ['F', 'Gsharp', 'B']},
    {id: '', name: 'F augmented', key: 'F+', scale: 'augmented', chord_notes: ['F', 'A', 'C#']},
    {id: '', name: 'F dominant seventh', key: 'F7', scale: 'dominant seventh', chord_notes: ['F', 'A', 'C', 'Dsharp']},
    {id: '', name: 'F major seventh', key: 'FM7', scale: 'major seventh', chord_notes: ['F', 'A', 'C', 'E']},
    {id: '', name: 'F minor seventh', key: 'Fm7', scale: 'minor seventh', chord_notes: ['F', 'Gsharp', 'C', 'Dsharp']},
    {id: '', name: 'F-sharp major', key: 'F#M', scale: 'major', chord_notes: ['Fsharp', 'Asharp', 'Csharp']},
    {id: '', name: 'F-sharp minor', key: 'F#m', scale: 'minor', chord_notes: ['Fsharp', 'A', 'Csharp']},
    {id: '', name: 'F-sharp diminished', key: 'F#°', scale: 'diminished', chord_notes: ['Fsharp', 'A', 'C']},
    {id: '', name: 'F-sharp augmented', key: 'F#+', scale: 'sharp augmented', chord_notes: ['Fsharp', 'Asharp', 'D']},
    {id: '', name: 'F-sharp dominant seventh', key: 'F#7', scale: 'sharp dominant seventh', chord_notes: ['Fsharp', 'Asharp', 'Csharp', 'E']},
    {id: '', name: 'F-sharp minor seventh', key: 'F#m7', scale: 'sharp minor seventh', chord_notes: ['Fsharp', 'A', 'Csharp', 'E']},
    {id: '', name: 'F-sharp major seventh', key: 'F#M7', scale: 'sharp major seventh', chord_notes: ['Fsharp', 'Asharp', 'Csharp', 'F']},
    {id: '', name: 'F-flat major', key: 'F♭M', scale: 'flat major', chord_notes: ['Csharp', 'F', 'Gsharp']},
    {id: '', name: 'F-flat minor', key: 'F♭m', scale: 'flat minor', chord_notes: ['E', 'Gsharp', 'B']},
    {id: '', name: 'F-flat diminished', key: 'F♭°', scale: 'flat diminished', chord_notes: ['E', 'Gsharp', 'Asharp']},
    {id: '', name: 'F-flat augmented', key: 'F♭+', scale: 'flat augmented', chord_notes: ['Csharp', 'F', 'A']},
    {id: '', name: 'F-flat dominant seventh', key: 'F♭7', scale: 'flat dominant seventh', chord_notes: ['E', 'Gsharp', 'B', 'D']},
    {id: '', name: 'F-flat major seventh', key: 'F♭M7', scale: 'flat major seventh', chord_notes: ['E', 'Gsharp', 'B', 'Dsharp']},
    {id: '', name: 'F-flat minor seventh', key: 'F♭m7', scale: 'flat minor seventh', chord_notes: ['E', 'Gsharp', 'B', 'D']},

    {id: '', name: 'G major', key: 'GM', scale: 'major', chord_notes: ['G', 'B', 'D']},
    {id: '', name: 'G minor', key: 'Gm', scale: 'minor', chord_notes: ['G', 'Asharp', 'D']},
    {id: '', name: 'G diminished', key: 'G°', scale: 'diminished', chord_notes: ['G', 'Asharp', 'Csharp']},
    {id: '', name: 'G augmented', key: 'G+', scale: 'augmented', chord_notes: ['G', 'B', 'Dsharp']},
    {id: '', name: 'G dominant seventh', key: 'G7', scale: 'dominant seventh', chord_notes: ['G', 'B', 'D', 'F']},
    {id: '', name: 'G major seventh', key: 'GM7', scale: 'major seventh', chord_notes: ['G', 'B', 'D', 'Fsharp']},
    {id: '', name: 'G minor seventh', key: 'Gm7', scale: 'minor seventh', chord_notes: ['G', 'Asharp', 'D', 'F']},
    {id: '', name: 'G-sharp major', key: 'G#M', scale: 'major', chord_notes: ['Gsharp', 'C', 'Dsharp']},
    {id: '', name: 'G-sharp minor', key: 'G#m', scale: 'minor', chord_notes: ['Gsharp', 'B', 'Dsharp']},
    {id: '', name: 'G-sharp diminished', key: 'G#°', scale: 'diminished', chord_notes: ['Gsharp', 'B', 'D']},
    {id: '', name: 'G-sharp augmented', key: 'G#+', scale: 'sharp augmented', chord_notes: ['Gsharp', 'C', 'E']},
    {id: '', name: 'G-sharp dominant seventh', key: 'G#7', scale: 'sharp dominant seventh', chord_notes: ['Gsharp', 'C', 'Dsharp', 'Fsharp']},
    {id: '', name: 'G-sharp minor seventh', key: 'G#m7', scale: 'sharp minor seventh', chord_notes: ['Gsharp', 'B', 'Dsharp', 'Fsharp']},
    {id: '', name: 'G-sharp major seventh', key: 'G#M7', scale: 'sharp major seventh', chord_notes: ['Gsharp', 'C', 'Dsharp', 'G']},
    {id: '', name: 'G-flat major', key: 'G♭M', scale: 'flat major', chord_notes: ['Fsharp', 'Asharp', 'Csharp']},
    {id: '', name: 'G-flat minor', key: 'G♭m', scale: 'flat minor', chord_notes: ['Fsharp', 'A', 'Csharp']},
    {id: '', name: 'G-flat diminished', key: 'G♭°', scale: 'flat diminished', chord_notes: ['Fsharp', 'A', 'C']},
    {id: '', name: 'G-flat augmented', key: 'G♭+', scale: 'flat augmented', chord_notes: ['Fsharp', 'Asharp', 'D']},
    {id: '', name: 'G-flat dominant seventh', key: 'G♭7', scale: 'flat dominant seventh', chord_notes: ['Fsharp', 'Asharp', 'Csharp', 'E']},
    {id: '', name: 'G-flat major seventh', key: 'G♭M7', scale: 'flat major seventh', chord_notes: ['Fsharp', 'Asharp', 'Csharp', 'F']},
    {id: '', name: 'G-flat minor seventh', key: 'G♭m7', scale: 'flat minor seventh', chord_notes: ['Fsharp', 'A', 'Csharp', 'E']},

    {id: '', name: 'A major', key: 'AM', scale: 'major', chord_notes: ['A', 'Csharp', 'E']},
    {id: '', name: 'A minor', key: 'Am', scale: 'minor', chord_notes: ['A', 'C', 'E']},
    {id: '', name: 'A diminished', key: 'A°', scale: 'diminished', chord_notes: ['A', 'C', 'Dsharp']},
    {id: '', name: 'A augmented', key: 'A+', scale: 'augmented', chord_notes: ['A', 'Csharp', 'F']},
    {id: '', name: 'A dominant seventh', key: 'A7', scale: 'dominant seventh', chord_notes: ['A', 'Csharp', 'E', 'G']},
    {id: '', name: 'A major seventh', key: 'AM7', scale: 'major seventh', chord_notes: ['A', 'Csharp', 'E', 'Gsharp']},
    {id: '', name: 'A minor seventh', key: 'Am7', scale: 'minor seventh', chord_notes: ['A', 'C', 'E', 'G']},
    {id: '', name: 'A-sharp major', key: 'A#M', scale: 'major', chord_notes: ['Asharp', 'D', 'F']},
    {id: '', name: 'A-sharp minor', key: 'A#m', scale: 'minor', chord_notes: ['Asharp', 'Csharp', 'F']},
    {id: '', name: 'A-sharp diminished', key: 'A#°', scale: 'diminished', chord_notes: ['Asharp', 'Csharp', 'E']},
    {id: '', name: 'A-sharp augmented', key: 'A#+', scale: 'sharp augmented', chord_notes: ['Asharp', 'D', 'Fsharp']},
    {id: '', name: 'A-sharp dominant seventh', key: 'A#7', scale: 'sharp dominant seventh', chord_notes: ['Asharp', 'D', 'F', 'Gsharp']},
    {id: '', name: 'A-sharp minor seventh', key: 'A#m7', scale: 'sharp minor seventh', chord_notes: ['Asharp', 'Csharp', 'F', 'Gsharp']},
    {id: '', name: 'A-sharp major seventh', key: 'A#M7', scale: 'sharp major seventh', chord_notes: ['Asharp', 'D', 'F', 'A']},
    {id: '', name: 'A-flat major', key: 'A♭M', scale: 'flat major', chord_notes: ['Gsharp', 'C', 'Dsharp']},
    {id: '', name: 'A-flat minor', key: 'A♭m', scale: 'flat minor', chord_notes: ['Gsharp', 'B', 'Dsharp']},
    {id: '', name: 'A-flat diminished', key: 'A♭°', scale: 'flat diminished', chord_notes: ['Gsharp', 'B', 'D']},
    {id: '', name: 'A-flat augmented', key: 'A♭+', scale: 'flat augmented', chord_notes: ['Gsharp', 'C', 'E']},
    {id: '', name: 'A-flat dominant seventh', key: 'A♭7', scale: 'flat dominant seventh', chord_notes: ['Gsharp', 'C', 'E']},
    {id: '', name: 'A-flat major seventh', key: 'A♭M7', scale: 'flat major seventh', chord_notes: ['Gsharp', 'C', 'Dsharp', 'G']},
    {id: '', name: 'A-flat minor seventh', key: 'A♭m7', scale: 'flat minor seventh', chord_notes: ['Gsharp', 'B', 'Dsharp', 'Fsharp']},

    {id: '', name: 'B major', key: 'B', scale: 'major', chord_notes: ['B', 'Dsharp', 'Fsharp']},
    {id: '', name: 'B minor', key: 'B', scale: 'minor', chord_notes: ['B', 'D', 'Fsharp']},
    {id: '', name: 'B diminished', key: 'B°', scale: 'diminished', chord_notes: ['B', 'D', 'F']},
    {id: '', name: 'B augmented', key: 'B°', scale: 'augmented', chord_notes: ['B', 'Dsharp', 'G']},
    {id: '', name: 'B dominant seventh', key: 'B7', scale: 'dominant seventh', chord_notes: ['B', 'Dsharp', 'Fsharp', 'A']},
    {id: '', name: 'B major seventh', key: 'BM7', scale: 'major seventh', chord_notes: ['B', 'Dsharp', 'Fsharp', 'Asharp']},
    {id: '', name: 'B minor seventh', key: 'Bm7', scale: 'minor seventh', chord_notes: ['B', 'D', 'Fsharp', 'A']},
    {id: '', name: 'B-flat major', key: 'B♭', scale: 'major', chord_notes: ['Asharp', 'D', 'F']},
    {id: '', name: 'B-flat minor', key: 'B♭', scale: 'minor', chord_notes: ['Asharp', 'Csharp', 'F']},
    {id: '', name: 'B-flat diminished', key: 'B♭°', scale: 'flat diminished', chord_notes: ['Asharp', 'Csharp', 'E']},
    {id: '', name: 'B-flat augmented', key: 'B♭+', scale: 'flat augmented', chord_notes: ['Asharp', 'D', 'Fsharp']},
    {id: '', name: 'B-flat dominant seventh', key: 'B♭7', scale: 'flat dominant seventh', chord_notes: ['Asharp', 'D', 'F', 'Gsharp']},
    {id: '', name: 'B-flat major seventh', key: 'B♭M7', scale: 'flat major seventh', chord_notes: ['Asharp', 'D', 'F', 'A']},
    {id: '', name: 'B-flat minor seventh', key: 'B♭m7', scale: 'flat minor seventh', chord_notes: ['Asharp', 'Csharp', 'F', 'Gsharp']}
];

const chordsObject = addUniqueId(chords);
console.log(chordsObject);

const chord_progressions = [
    {
        id: '',
        name: 'C major',
        chords: [
            {name: 'C major', chord_notes: chordsObject[0].chord_notes, roman_numeral: 'I'}, 
            {name: 'D minor', chord_notes: chordsObject[22].chord_notes, roman_numeral: 'ii'}, 
            {name: 'E minor', chord_notes: chordsObject[43].chord_notes, roman_numeral: 'iii'}, 
            {name: 'F major', chord_notes: chordsObject[56].chord_notes, roman_numeral: 'IV'}, 
            {name: 'G major', chord_notes: chordsObject[77].chord_notes, roman_numeral: 'V'}, 
            {name: 'A minor', chord_notes: chordsObject[99].chord_notes, roman_numeral: 'vi'},
            {name: 'B diminished', chord_notes: chordsObject[121].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'D major',
        chords: [
            {name: 'D major', chord_notes: chordsObject[21].chord_notes, roman_numeral: 'I'}, 
            {name: 'E minor', chord_notes: chordsObject[43].chord_notes, roman_numeral: 'ii'}, 
            {name: 'F-sharp minor', chord_notes: chordsObject[64].chord_notes, roman_numeral: 'iii'}, 
            {name: 'G major', chord_notes: chordsObject[77].chord_notes, roman_numeral: 'IV'}, 
            {name: 'A major', chord_notes: chordsObject[98].chord_notes, roman_numeral: 'V'}, 
            {name: 'B minor', chord_notes: chordsObject[125].chord_notes, roman_numeral: 'vi'},
            {name: 'C-sharp diminished', chord_notes: chordsObject[9].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'E major',
        chords: [
            {name: 'E major', chord_notes: chordsObject[42].chord_notes, roman_numeral: 'I'}, 
            {name: 'F-sharp minor', chord_notes: chordsObject[64].chord_notes, roman_numeral: 'ii'}, 
            {name: 'G-sharp minor', chord_notes: chordsObject[89].chord_notes, roman_numeral: 'iii'}, 
            {name: 'A major', chord_notes: chordsObject[98].chord_notes, roman_numeral: 'IV'}, 
            {name: 'B major', chord_notes: chordsObject[119].chord_notes, roman_numeral: 'V'}, 
            {name: 'C-sharp minor', chord_notes: chordsObject[8].chord_notes, roman_numeral: 'vi'},
            {name: 'D-sharp diminished', chord_notes: chordsObject[30].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'F major',
        chords: [
            {name: 'F major', chord_notes: chordsObject[56].chord_notes, roman_numeral: 'I'}, 
            {name: 'G minor', chord_notes: chordsObject[78].chord_notes, roman_numeral: 'ii'}, 
            {name: 'A minor', chord_notes: chordsObject[99].chord_notes, roman_numeral: 'iii'}, 
            {name: 'B-flat major', chord_notes: chordsObject[126].chord_notes, roman_numeral: 'IV'}, 
            {name: 'C major', chord_notes: chordsObject[0].chord_notes, roman_numeral: 'V'}, 
            {name: 'D minor', chord_notes: chordsObject[22].chord_notes, roman_numeral: 'vi'},
            {name: 'E diminished', chord_notes: chordsObject[44].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'G major',
        chords: [
            {name: 'G major', chord_notes: chordsObject[77].chord_notes, roman_numeral: 'I'}, 
            {name: 'A minor', chord_notes: chordsObject[99].chord_notes, roman_numeral: 'ii'}, 
            {name: 'B minor', chord_notes: chordsObject[120].chord_notes, roman_numeral: 'iii'}, 
            {name: 'C major', chord_notes: chordsObject[0].chord_notes, roman_numeral: 'IV'}, 
            {name: 'D major', chord_notes: chordsObject[21].chord_notes, roman_numeral: 'V'}, 
            {name: 'E minor', chord_notes: chordsObject[43].chord_notes, roman_numeral: 'vi'},
            {name: 'F-sharp diminished', chord_notes: chordsObject[65].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'A major',
        chords: [
            {name: 'A major', chord_notes: chordsObject[98].chord_notes, roman_numeral: 'I'}, 
            {name: 'B minor', chord_notes: chordsObject[120].chord_notes, roman_numeral: 'ii'}, 
            {name: 'C-sharp minor', chord_notes: chordsObject[8].chord_notes, roman_numeral: 'iii'}, 
            {name: 'D major', chord_notes: chordsObject[21].chord_notes, roman_numeral: 'IV'}, 
            {name: 'E major', chord_notes: chordsObject[42].chord_notes, roman_numeral: 'V'}, 
            {name: 'F-sharp minor', chord_notes: chordsObject[64].chord_notes, roman_numeral: 'vi'},
            {name: 'G-sharp diminished', chord_notes: chordsObject[86].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'B major',
        chords: [
            {name: 'B major', chord_notes: chordsObject[119].chord_notes, roman_numeral: 'I'}, 
            {name: 'C-sharp minor', chord_notes: chordsObject[8].chord_notes, roman_numeral: 'ii'}, 
            {name: 'D-sharp minor', chord_notes: chordsObject[29].chord_notes, roman_numeral: 'iii'}, 
            {name: 'E major', chord_notes: chordsObject[42].chord_notes, roman_numeral: 'IV'}, 
            {name: 'F-sharp major', chord_notes: chordsObject[64].chord_notes, roman_numeral: 'V'}, 
            {name: 'G-sharp minor', chord_notes: chordsObject[85].chord_notes, roman_numeral: 'vi'},
            {name: 'A-sharp diminished', chord_notes: chordsObject[107].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'D-flat major',
        chords: [
            {name: 'D-flat major', chord_notes: chordsObject[35].chord_notes, roman_numeral: 'I'}, 
            {name: 'E-flat minor', chord_notes: chordsObject[50].chord_notes, roman_numeral: 'ii'}, 
            {name: 'F minor', chord_notes: chordsObject[57].chord_notes, roman_numeral: 'iii'}, 
            {name: 'G-flat major', chord_notes: chordsObject[91].chord_notes, roman_numeral: 'IV'}, 
            {name: 'A-flat major', chord_notes: chordsObject[112].chord_notes, roman_numeral: 'V'}, 
            {name: 'B-flat minor', chord_notes: chordsObject[127].chord_notes, roman_numeral: 'vi'},
            {name: 'C diminished', chord_notes: chordsObject[2].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'E-flat major',
        chords: [
            {name: 'E-flat major', chord_notes: chordsObject[49].chord_notes, roman_numeral: 'I'}, 
            {name: 'F minor', chord_notes: chordsObject[57].chord_notes, roman_numeral: 'ii'}, 
            {name: 'G minor', chord_notes: chordsObject[78].chord_notes, roman_numeral: 'iii'}, 
            {name: 'A-flat major', chord_notes: chordsObject[112].chord_notes, roman_numeral: 'IV'}, 
            {name: 'B-flat major', chord_notes: chordsObject[126].chord_notes, roman_numeral: 'V'}, 
            {name: 'C minor', chord_notes: chordsObject[1].chord_notes, roman_numeral: 'vi'},
            {name: 'D diminished', chord_notes: chordsObject[23].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'F-sharp major',
        chords: [
            {name: 'F-sharp major', chord_notes: chordsObject[63].chord_notes, roman_numeral: 'I'}, 
            {name: 'G-sharp minor', chord_notes: chordsObject[78].chord_notes, roman_numeral: 'ii'}, 
            {name: 'A-sharp minor', chord_notes: chordsObject[106].chord_notes, roman_numeral: 'iii'}, 
            {name: 'B major', chord_notes: chordsObject[119].chord_notes, roman_numeral: 'IV'}, 
            {name: 'C-sharp major', chord_notes: chordsObject[14].chord_notes, roman_numeral: 'V'}, 
            {name: 'D-sharp minor', chord_notes: chordsObject[29].chord_notes, roman_numeral: 'vi'},
            {name: 'F diminished', chord_notes: chordsObject[58].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'A-flat major',
        chords: [
            {name: 'A-flat major', chord_notes: chordsObject[112].chord_notes, roman_numeral: 'I'},
            {name: 'B-flat major', chord_notes: chordsObject[126].chord_notes, roman_numeral: 'ii'}, 
            {name: 'C minor', chord_notes: chordsObject[2].chord_notes, roman_numeral: 'iii'}, 
            {name: 'D-flat major', chord_notes: chordsObject[35].chord_notes, roman_numeral: 'IV'}, 
            {name: 'E-flat major', chord_notes: chordsObject[49].chord_notes, roman_numeral: 'V'}, 
            {name: 'F minor', chord_notes: chordsObject[57].chord_notes, roman_numeral: 'vi'},
            {name: 'G diminished', chord_notes: chordsObject[79].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'B-flat major',
        chords: [
            {name: 'B-flat major', chord_notes: chordsObject[126].chord_notes, roman_numeral: 'I'},
            {name: 'C minor', chord_notes: chordsObject[2].chord_notes, roman_numeral: 'ii'}, 
            {name: 'D minor', chord_notes: chordsObject[22].chord_notes, roman_numeral: 'iii'}, 
            {name: 'E-flat major', chord_notes: chordsObject[49].chord_notes, roman_numeral: 'IV'}, 
            {name: 'F major', chord_notes: chordsObject[56].chord_notes, roman_numeral: 'V'}, 
            {name: 'G minor', chord_notes: chordsObject[78].chord_notes, roman_numeral: 'vi'},
            {name: 'A diminished', chord_notes: chordsObject[100].chord_notes, roman_numeral: 'vii'}
        ],
    },


    {
        id: '',
        name: 'C minor',
        chords: [
            {name: 'C minor', chord_notes: chords[1].chord_notes, roman_numeral: 'I'}, 
            {name: 'D diminished', chord_notes: chords[23].chord_notes, roman_numeral: 'ii'}, 
            {name: 'E-flat major', chord_notes: chords[49].chord_notes, roman_numeral: 'iii'}, 
            {name: 'F minor', chord_notes: chords[57].chord_notes, roman_numeral: 'IV'}, 
            {name: 'G minor', chord_notes: chords[78].chord_notes, roman_numeral: 'V'}, 
            {name: 'A-flat major', chord_notes: chords[112].chord_notes, roman_numeral: 'vi'},
            {name: 'B-flat major', chord_notes: chords[126].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'C-sharp minor',
        chords: [
            {name: 'C-sharp minor', chord_notes: chords[8].chord_notes, roman_numeral: 'I'}, 
            {name: 'D-sharp diminished', chord_notes: chords[30].chord_notes, roman_numeral: 'ii'}, 
            {name: 'E major', chord_notes: chords[42].chord_notes, roman_numeral: 'iii'}, 
            {name: 'F-sharp minor', chord_notes: chords[64].chord_notes, roman_numeral: 'IV'}, 
            {name: 'G-sharp minor', chord_notes: chords[85].chord_notes, roman_numeral: 'V'}, 
            {name: 'A major', chord_notes: chords[98].chord_notes, roman_numeral: 'vi'},
            {name: 'B major', chord_notes: chords[119].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'D minor',
        chords: [
            {name: 'D minor', chord_notes: chords[22].chord_notes, roman_numeral: 'I'}, 
            {name: 'E diminished', chord_notes: chords[44].chord_notes, roman_numeral: 'ii'}, 
            {name: 'F major', chord_notes: chords[56].chord_notes, roman_numeral: 'iii'}, 
            {name: 'G minor', chord_notes: chords[78].chord_notes, roman_numeral: 'IV'}, 
            {name: 'A minor', chord_notes: chords[99].chord_notes, roman_numeral: 'V'}, 
            {name: 'B-flat major', chord_notes: chords[126].chord_notes, roman_numeral: 'vi'},
            {name: 'C major', chord_notes: chords[0].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'D-sharp minor',
        chords: [
            {name: 'D-sharp minor', chord_notes: chords[29].chord_notes, roman_numeral: 'I'}, 
            {name: 'F diminished', chord_notes: chords[58].chord_notes, roman_numeral: 'ii'}, 
            {name: 'F-sharp major', chord_notes: chords[63].chord_notes, roman_numeral: 'iii'}, 
            {name: 'G-sharp minor', chord_notes: chords[85].chord_notes, roman_numeral: 'IV'}, 
            {name: 'A-sharp minor', chord_notes: chords[106].chord_notes, roman_numeral: 'V'}, 
            {name: 'B major', chord_notes: chords[119].chord_notes, roman_numeral: 'vi'},
            {name: 'C-sharp major', chord_notes: chords[7].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'E-flat minor',
        chords: [
            {name: 'E-flat minor', chord_notes: chords[50].chord_notes, roman_numeral: 'I'}, 
            {name: 'F diminished', chord_notes: chords[58].chord_notes, roman_numeral: 'ii'}, 
            {name: 'G-flat major', chord_notes: chords[91].chord_notes, roman_numeral: 'iii'}, 
            {name: 'A-flat minor', chord_notes: chords[113].chord_notes, roman_numeral: 'IV'}, 
            {name: 'B-flat minor', chord_notes: chords[127].chord_notes, roman_numeral: 'V'}, 
            {name: 'C-flat major', chord_notes: chords[14].chord_notes, roman_numeral: 'vi'},
            {name: 'D-flat major', chord_notes: chords[35].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'E minor',
        chords: [
            {name: 'E minor', chord_notes: chords[43].chord_notes, roman_numeral: 'I'}, 
            {name: 'F-sharp diminished', chord_notes: chords[65].chord_notes, roman_numeral: 'ii'}, 
            {name: 'G major', chord_notes: chords[77].chord_notes, roman_numeral: 'iii'}, 
            {name: 'A minor', chord_notes: chords[99].chord_notes, roman_numeral: 'IV'}, 
            {name: 'B minor', chord_notes: chords[120].chord_notes, roman_numeral: 'V'}, 
            {name: 'C major', chord_notes: chords[0].chord_notes, roman_numeral: 'vi'},
            {name: 'D major', chord_notes: chords[21].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'F minor',
        chords: [
            {name: 'F minor', chord_notes: chords[57].chord_notes, roman_numeral: 'I'}, 
            {name: 'G diminished', chord_notes: chords[79].chord_notes, roman_numeral: 'ii'}, 
            {name: 'A-flat major', chord_notes: chords[112].chord_notes, roman_numeral: 'iii'}, 
            {name: 'B-flat minor', chord_notes: chords[127].chord_notes, roman_numeral: 'IV'}, 
            {name: 'C minor', chord_notes: chords[1].chord_notes, roman_numeral: 'V'}, 
            {name: 'D-flat major', chord_notes: chords[35].chord_notes, roman_numeral: 'vi'},
            {name: 'E-flat major', chord_notes: chords[49].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'F-sharp minor',
        chords: [
            {name: 'F-sharp minor', chord_notes: chords[64].chord_notes, roman_numeral: 'I'}, 
            {name: 'G-sharp diminished', chord_notes: chords[86].chord_notes, roman_numeral: 'ii'}, 
            {name: 'A major', chord_notes: chords[98].chord_notes, roman_numeral: 'iii'}, 
            {name: 'B minor', chord_notes: chords[120].chord_notes, roman_numeral: 'IV'}, 
            {name: 'C-sharp minor', chord_notes: chords[8].chord_notes, roman_numeral: 'V'}, 
            {name: 'D major', chord_notes: chords[21].chord_notes, roman_numeral: 'vi'},
            {name: 'E major', chord_notes: chords[42].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'G minor',
        chords: [
            {name: 'G minor', chord_notes: chords[78].chord_notes, roman_numeral: 'I'}, 
            {name: 'A diminished', chord_notes: chords[100].chord_notes, roman_numeral: 'ii'}, 
            {name: 'B-flat major', chord_notes: chords[126].chord_notes, roman_numeral: 'iii'}, 
            {name: 'C minor', chord_notes: chords[1].chord_notes, roman_numeral: 'IV'}, 
            {name: 'D minor', chord_notes: chords[22].chord_notes, roman_numeral: 'V'}, 
            {name: 'E-flat major', chord_notes: chords[49].chord_notes, roman_numeral: 'vi'},
            {name: 'F major', chord_notes: chords[56].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'G-sharp minor',
        chords: [
            {name: 'G-sharp minor', chord_notes: chords[85].chord_notes, roman_numeral: 'I'}, 
            {name: 'A-sharp diminished', chord_notes: chords[107].chord_notes, roman_numeral: 'ii'}, 
            {name: 'B major', chord_notes: chords[119].chord_notes, roman_numeral: 'iii'}, 
            {name: 'C-sharp minor', chord_notes: chords[8].chord_notes, roman_numeral: 'IV'}, 
            {name: 'D-sharp minor', chord_notes: chords[29].chord_notes, roman_numeral: 'V'}, 
            {name: 'E major', chord_notes: chords[42].chord_notes, roman_numeral: 'vi'},
            {name: 'F-sharp major', chord_notes: chords[63].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'A-flat minor',
        chords: [
            {name: 'A-flat minor', chord_notes: chords[113].chord_notes, roman_numeral: 'I'}, 
            {name: 'B-flat diminished', chord_notes: chords[128].chord_notes, roman_numeral: 'ii'}, 
            {name: 'C-flat major', chord_notes: chords[14].chord_notes, roman_numeral: 'iii'}, 
            {name: 'D-flat minor', chord_notes: chords[36].chord_notes, roman_numeral: 'IV'}, 
            {name: 'E-flat minor', chord_notes: chords[50].chord_notes, roman_numeral: 'V'}, 
            {name: 'F-flat major', chord_notes: chords[70].chord_notes, roman_numeral: 'vi'},
            {name: 'G-flat major', chord_notes: chords[91].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'A minor',
        chords: [
            {name: 'A minor', chord_notes: chords[99].chord_notes, roman_numeral: 'I'}, 
            {name: 'B diminished', chord_notes: chords[121].chord_notes, roman_numeral: 'ii'}, 
            {name: 'C major', chord_notes: chords[0].chord_notes, roman_numeral: 'iii'}, 
            {name: 'D minor', chord_notes: chords[22].chord_notes, roman_numeral: 'IV'}, 
            {name: 'E minor', chord_notes: chords[43].chord_notes, roman_numeral: 'V'}, 
            {name: 'F major', chord_notes: chords[56].chord_notes, roman_numeral: 'vi'},
            {name: 'G major', chord_notes: chords[77].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'A-sharp minor',
        chords: [
            {name: 'A-sharp minor', chord_notes: chords[106].chord_notes, roman_numeral: 'I'}, 
            {name: 'C diminished', chord_notes: chords[2].chord_notes, roman_numeral: 'ii'}, 
            {name: 'C-sharp major', chord_notes: chords[7].chord_notes, roman_numeral: 'iii'}, 
            {name: 'D-sharp minor', chord_notes: chords[29].chord_notes, roman_numeral: 'IV'}, 
            {name: 'F minor', chord_notes: chords[57].chord_notes, roman_numeral: 'V'}, 
            {name: 'F-sharp major', chord_notes: chords[63].chord_notes, roman_numeral: 'vi'},
            {name: 'G-sharp major', chord_notes: chords[84].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'B-flat minor',
        chords: [
            {name: 'B-flat minor', chord_notes: chords[127].chord_notes, roman_numeral: 'I'}, 
            {name: 'C diminished', chord_notes: chords[2].chord_notes, roman_numeral: 'ii'}, 
            {name: 'D-flat major', chord_notes: chords[35].chord_notes, roman_numeral: 'iii'}, 
            {name: 'E-flat minor', chord_notes: chords[50].chord_notes, roman_numeral: 'IV'}, 
            {name: 'F minor', chord_notes: chords[57].chord_notes, roman_numeral: 'V'}, 
            {name: 'G-flat major', chord_notes: chords[91].chord_notes, roman_numeral: 'vi'},
            {name: 'A-flat major', chord_notes: chords[112].chord_notes, roman_numeral: 'vii'}
        ],
    },
    {
        id: '',
        name: 'B minor',
        chords: [
            {name: 'B minor', chord_notes: chords[120].chord_notes, roman_numeral: 'I'}, 
            {name: 'C-sharp diminished', chord_notes: chords[9].chord_notes, roman_numeral: 'ii'}, 
            {name: 'D major', chord_notes: chords[21].chord_notes, roman_numeral: 'iii'}, 
            {name: 'E minor', chord_notes: chords[43].chord_notes, roman_numeral: 'IV'}, 
            {name: 'F-sharp minor', chord_notes: chords[64].chord_notes, roman_numeral: 'V'}, 
            {name: 'G major', chord_notes: chords[77].chord_notes, roman_numeral: 'vi'},
            {name: 'A major', chord_notes: chords[98].chord_notes, roman_numeral: 'vii'}
        ],
    }
];

const chordsMajor = addUniqueId(chord_progressions);
console.log(chordsMajor, chordsMajor[0].chords);

const chord_progressions_minor = [
    
    
];

let beats_per_minute = 100;
let time_signature_1 = 4;
let time_signature_2 = 4;
const roman_numerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii']

const note_note = [];
const note_url = [];

let roman_numerals_random = _.sample(roman_numerals);
console.log(roman_numerals_random);

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
    // audio.play();
}


function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function getRandomArray(arr, size) {
    // Clone the array to avoid modifying the original
    const shuffledArray = arr.slice();
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    // Return a subset of the shuffled array
    return shuffledArray.slice(0, size);
}
function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}


async function chord_andNote_keys() {
    let chord_title_iterate = await document.querySelectorAll('.chord-key');
    let note_title_iterate = await document.querySelectorAll('.note-key');

    var chordArr = Array.prototype.slice.call(chord_title_iterate);
    var chordNoteArr = Array.prototype.slice.call(note_title_iterate);
    const chord_keys = chordArr.keys();
    const chord_notes = chordNoteArr.keys();

    let newChordArr = [];
    let newChordNoteArr = [];

    console.log("chord ", newChordArr );   

    newChordArr.forEach(eleme => {
    console.log("1234567876543      ", eleme);


});

const keys = Object.keys(chordArr);
console.log("keys keys keys keys ", keys);

             var e = $('<span class="fs-6">' + keys + '</span>');
            e.attr('id', 'chord-name-id-'+keys);

            let chord_key_element = document.getElementsByClassName('chord-key');

            $( chord_title_iterate ).each(function( index ) {
                console.log( index  );
                $(chord_key_element).append(); 
                // chord_title_iterate.innerHTML = index;
            });


                
    for (let x of chordNoteArr) {
        newChordNoteArr.push(x);
        note_title_iterate.innerHTML = `<span class="h1">`+ x +`</span>`;
        console.log("notes ", x );
    }
    let other = _.concat(newChordArr, newChordNoteArr);
    console.log("oeoeoeoeoeoeoeoeoeoeo ", newChordArr.length, newChordNoteArr.length );


}

function gen_song() {
    
    $(document).ready(() => {
        
        let disp_chords_div = document.getElementById('chords-and-notes');
        let write_to_div = document.getElementById('piano-notes');


        const audioContext = new (window.AudioContext || window.webkitAudioContext)();


        const chordProgressed = []

        for (let j = 0; j < chord_progressions.length; j++) {
            const element = chord_progressions[j];
            const each_chord_progression = element.map((item) => {
                return item
            });
            chordProgressed.push(each_chord_progression);
        }
        
        console.log("chord notes array ", chordProgressed);
        
        const octaves_array = [2, 3, 4];
        let chosen_oct = getRandomElement(octaves_array, 0);
        
        const octave_arr = [];
        
        const rand_chord = getRandomElement(chordProgressed, 0);
        console.log(rand_chord.name, rand_chord.chords);
        
        const format_chords_sharp = _.replace(rand_chord.name, /-flat/g, '♭');
        disp_chords_div.innerHTML = format_chords_sharp;
        
        const rand_name = rand_chord.name;
        const rand_chords = rand_chord.chords;
        const rand_chordnotes = [...Object.values(rand_chords)];
        console.log(rand_chordnotes);
        
        for (let k = 0; k < rand_chordnotes.length; k++) {
            const element = rand_chordnotes[k].chord_notes;
            const add_octave = element.map((item) => {
                return item + chosen_oct;
            });
            octave_arr.push(add_octave);
        }
        console.log(octave_arr);          
        
         // Function to play a piano note with fade-out effect
         function playPianoNote(note, startTime, duration) {
            const gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
         
            // Load piano sample for the note
            const audioFile = `/assets/piano_keys/${note}.wav`; // Replace with your actual path
            fetch(audioFile)
              .then(response => response.arrayBuffer())
              .then(buffer => audioContext.decodeAudioData(buffer))
              .then(audioBuffer => {
                const source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(gainNode);
                source.start(startTime);
                source.stop(startTime + duration);
              })
              .catch(error => console.error(`Error loading audio file for note ${note}:`, error));
         
            // Schedule fade-out effect
            gainNode.gain.setValueAtTime(1, startTime);
            gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
          }
         
          // Function to create a random melody
          function createRandomMelody(startTime) {
            const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']; // Adjust as needed
            const melodyDuration = 0.3; // Duration of each note
            let currentTime = startTime;
         
            // Play a random melody
            for (let i = 0; i < 32; i++) { // Adjust the number of notes in the melody
              const randomNote = notes[Math.floor(Math.random() * notes.length)];
              playPianoNote(randomNote, currentTime, melodyDuration);
              currentTime += melodyDuration;
            }
         
            return currentTime;
          }
         
          // Function to play a chord with piano samples and fade-out effect
          function playChordWithFadeOut(chord, startTime, chordDuration) {
            const gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
         
            // Load piano samples for each note in the chord
            const promises = chord.map((note, index) => {
              const audioFile = `/assets/piano_keys/${note}.wav`; // Replace with your actual path
              return fetch(audioFile)
                .then(response => response.arrayBuffer())
                .then(buffer => audioContext.decodeAudioData(buffer))
                .then(audioBuffer => {
                  const source = audioContext.createBufferSource();
                  source.buffer = audioBuffer;
                  source.connect(gainNode);
                  source.start(startTime);
                  source.stop(startTime + chordDuration);
                })
                .catch(error => console.error(`Error loading audio file for note ${note}:`, error));
            });
         
            // Schedule fade-out effect
            gainNode.gain.setValueAtTime(1, startTime);
            gainNode.gain.linearRampToValueAtTime(0, startTime + chordDuration);
         
            // Return a promise that resolves when all samples are loaded and played
            return Promise.all(promises);
          }
         
          
        
          // Function to create a random chord progression
          function createRandomChordProgression(startTime) {
            const chordProgression = octave_arr;
         console.log(chordProgression);
            const chordDuration = 2; // Duration of each chord
            let currentTime = startTime;
         
            // Play a random chord progression
            chordProgression.forEach(chord => {
              playChordWithFadeOut(chord, currentTime, chordDuration)
                .then(() => {
                  // Move to the next chord after the current chord is played
                  currentTime += chordDuration;
                });
            });
         
            return currentTime;
          }
         
          // Event listener for the play button
          document.getElementById('playButton').addEventListener('click', () => {
            let currentTime = audioContext.currentTime;
         
            // Play a random chord progression
            currentTime = createRandomChordProgression(currentTime);
         
            // Play a random melody after the chord progression
            createRandomMelody(currentTime);
          });



        $('[id="generate-music"]').on("click", function(e) {

            e.preventDefault();

            

            currentAudio
            write_to_div.innerHTML = '';
            $('.chord-title').remove();
            $('.chord-url').remove();



            








            // Function to load and play a piano sample
            function playPianoSample(note) {
                
                const audioElement = new Audio(`/assets/piano_keys/${note}.wav`);
                const source = audioContext.createMediaElementSource(audioElement);
                source.connect(audioContext.destination);
                audioElement.play();
            }

            // Function to play a chord
            function playChord(chord) {
                chord.forEach(note => playPianoSample(note));
                console.log(chord);
                const format_chord = _.replace(chord, /,/g, ' + ');
                const format_sharp = _.replace(format_chord, /sharp/g, '#');
                write_to_div.innerHTML += format_sharp + '<br>';
            }

            const chordProgression = []

            for (let j = 0; j < chord_progressions.length; j++) {
                const element = chord_progressions[j];
                const each_chord_progression = element.map((item) => {
                    return item
                });
                chordProgression.push(each_chord_progression);
            }
        
            console.log("chord notes array ", chordProgression);

            const octaves_arr = [2, 3, 4];
            let chosen_octave = getRandomElement(octaves_arr, 0);

            const octave_array = [];
        
            const random_chord = getRandomElement(chordProgression, 0);
            console.log(random_chord.name, random_chord.chords);

            const format_chord_sharp = _.replace(random_chord.name, /-flat/g, '♭');
            disp_chords_div.innerHTML = format_chord_sharp;
            
            const random_name = random_chord.name;
            const random_chords = random_chord.chords;
            const random_chordnotes = [...Object.values(random_chords)];
            console.log(random_chordnotes);

            for (let k = 0; k < random_chordnotes.length; k++) {
                const element = random_chordnotes[k].chord_notes;
                const add_octave = element.map((item) => {
                    return item + chosen_octave;
                });
                octave_array.push(add_octave);
            }
            console.log(octave_array);

            const chord_timing_arr = range(500, 1500);
            let chosen_timing = getRandomElement(chord_timing_arr, 2);
            // Play each chord in the progression
            octave_array.forEach((chord, index) => {
                setTimeout(() => {
                    playChord(chord);
                }, index * chosen_timing); // Delay each chord by 2 seconds
                console.log(index * chosen_timing);

            });



 
           

        });

    });

}




function randomPianoGenerator() {
    const element = (
    <div>
        <div id="generate-music" className="piano-key btn btn-primary btn-lg">Generate piano</div>

        <button id="playButton">Play Random Melody</button>

        <h3 id="chords-and-notes"></h3>
        <div id="piano-notes" className="mt-4"></div>
        
        <div id="piano-synth"></div>

        <article>
            <aside id="aside"></aside>
            <div id="piano-container"></div>
        </article>
   
        <div id="piano">
            
            

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

  
