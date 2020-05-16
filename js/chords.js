const maj7_modes = [
    "ionisch",
    "lydisch"
];

const dominant_modes = [
    "mixolydisch",
];

const m7_modes = [
    "dorisch",
    "phrygisch",
    "äolisch"
];

const diminished_modes = [
    "lokrisch"
];


const tones = {
    as2: "./samples/as2.mp3",
    b2: "./samples/b2.mp3",
    c3: "./samples/c3.mp3",
    cs3: "./samples/cs3.mp3",
    d3: "./samples/d3.mp3",
    ds3: "./samples/ds3.mp3",
    e3: "./samples/e3.mp3",
    f3: "./samples/f3.mp3",
    fs3: "./samples/fs3.mp3",
    g3: "./samples/g3.mp3",
    gs3: "./samples/gs3.mp3",
    a3: "./samples/a3.mp3",
    as3: "./samples/as3.mp3",
    b3: "./samples/b3.mp3",
    c4: "./samples/c4.mp3",
    cs4: "./samples/cs4.mp3",
    d4: "./samples/d4.mp3",
    ds4: "./samples/ds4.mp3",
    e4: "./samples/e4.mp3",
    f4: "./samples/f4.mp3",
    fs4: "./samples/fs4.mp3",
    g4: "./samples/g4.mp3",
    gs4: "./samples/gs4.mp3",
    a4: "./samples/a4.mp3"
}

const chords = [
    {
        "name": "C",
        "type": "maj7",
        "tones": [tones.c3, tones.e3, tones.g3, tones.b3],
        "possibleModes": maj7_modes
    },
    {
        "name": "F",
        "type": "maj7",
        "tones": [tones.f3, tones.a3, tones.c4, tones.e4],
        "possibleModes": maj7_modes
    },
    {
        "name": "Bb",
        "type": "maj7",
        "tones": [tones.as2, tones.d3, tones.f3, tones.a3],
        "possibleModes": maj7_modes
    },
    {
        "name": "Eb",
        "type": "maj7",
        "tones": [tones.ds3, tones.g3, tones.as3, tones.d4],
        "possibleModes": maj7_modes
    },
    {
        "name": "Ab",
        "type": "maj7",
        "tones": [tones.gs3, tones.c4, tones.ds4, tones.g4],
        "possibleModes": maj7_modes
    },
    {
        "name": "Db",
        "type": "maj7",
        "tones": [tones.cs3, tones.f3, tones.gs3, tones.c4],
        "possibleModes": maj7_modes
    },
    {
        "name": "G",
        "type": "maj7",
        "tones": [tones.g3, tones.b3, tones.d4, tones.fs4],
        "possibleModes": maj7_modes
    },
    {
        "name": "D",
        "type": "maj7",
        "tones": [tones.d3, tones.fs3, tones.a3, tones.cs4],
        "possibleModes": maj7_modes
    },
    {
        "name": "A",
        "type": "maj7",
        "tones": [tones.a3, tones.cs4, tones.e4, tones.gs4],
        "possibleModes": maj7_modes
    },
    {
        "name": "E",
        "type": "maj7",
        "tones": [tones.e3, tones.gs3, tones.b3, tones.ds4],
        "possibleModes": maj7_modes
    },
    {
        "name": "B",
        "type": "maj7",
        "tones": [tones.b2, tones.cs3, tones.fs3, tones.as3],
        "possibleModes": maj7_modes
    },
    {
        "name": "F#",
        "type": "maj7",
        "tones": [tones.fs3, tones.as3, tones.cs4, tones.f4],
        "possibleModes": maj7_modes
    },
    {
        "name": "C",
        "type": "7",
        "tones": [tones.c3, tones.e3, tones.g3, tones.as3],
        "possibleModes": dominant_modes
    },
    {
        "name": "F",
        "type": "7",
        "tones": [tones.f3, tones.a3, tones.c4, tones.ds4],
        "possibleModes": dominant_modes
    },
    {
        "name": "Bb",
        "type": "7",
        "tones": [tones.as2, tones.d3, tones.f3, tones.gs3],
        "possibleModes": dominant_modes
    },
    {
        "name": "Eb",
        "type": "7",
        "tones": [tones.ds3, tones.g3, tones.as3, tones.cs4],
        "possibleModes": dominant_modes
    },
    {
        "name": "Ab",
        "type": "7",
        "tones": [tones.gs3, tones.c4, tones.ds4, tones.fs4],
        "possibleModes": dominant_modes
    },
    {
        "name": "C#",
        "type": "7",
        "tones": [tones.cs3, tones.f3, tones.gs3, tones.b3],
        "possibleModes": dominant_modes
    },
    {
        "name": "G",
        "type": "7",
        "tones": [tones.g3, tones.b3, tones.d4, tones.f4],
        "possibleModes": dominant_modes
    },
    {
        "name": "D",
        "type": "7",
        "tones": [tones.d3, tones.fs3, tones.a3, tones.c4],
        "possibleModes": dominant_modes
    },
    {
        "name": "A",
        "type": "7",
        "tones": [tones.a3, tones.cs4, tones.e4, tones.g4],
        "possibleModes": dominant_modes
    },
    {
        "name": "E",
        "type": "7",
        "tones": [tones.e3, tones.gs3, tones.b3, tones.d4],
        "possibleModes": dominant_modes
    },
    {
        "name": "B",
        "type": "7",
        "tones": [tones.b2, tones.ds3, tones.fs3, tones.a3],
        "possibleModes": dominant_modes
    },
    {
        "name": "F#",
        "type": "7",
        "tones": [tones.fs3, tones.as3, tones.cs4, tones.e4],
        "possibleModes": dominant_modes
    },
    {
        "name": "C",
        "type": "m7",
        "tones": [tones.c3, tones.ds3, tones.g3, tones.as3],
        "possibleModes": m7_modes
    },
    {
        "name": "F",
        "type": "m7",
        "tones": [tones.f3, tones.gs3, tones.c4, tones.ds4],
        "possibleModes": m7_modes
    },
    {
        "name": "Bb",
        "type": "m7",
        "tones": [tones.as2, tones.cs3, tones.f3, tones.gs3],
        "possibleModes": m7_modes
    },
    {
        "name": "Eb",
        "type": "m7",
        "tones": [tones.ds3, tones.fs3, tones.as3, tones.cs4],
        "possibleModes": m7_modes
    },
    {
        "name": "G#",
        "type": "m7",
        "tones": [tones.gs3, tones.b3, tones.ds4, tones.fs4],
        "possibleModes": m7_modes
    },
    {
        "name": "C#",
        "type": "m7",
        "tones": [tones.cs3, tones.e3, tones.gs3, tones.b3],
        "possibleModes": m7_modes
    },
    {
        "name": "G",
        "type": "m7",
        "tones": [tones.g3, tones.as3, tones.d4, tones.f4],
        "possibleModes": m7_modes
    },
    {
        "name": "D",
        "type": "m7",
        "tones": [tones.d3, tones.f3, tones.a3, tones.c4],
        "possibleModes": m7_modes
    },
    {
        "name": "A",
        "type": "m7",
        "tones": [tones.a3, tones.c4, tones.e4, tones.g4],
        "possibleModes": m7_modes
    },
    {
        "name": "E",
        "type": "m7",
        "tones": [tones.e3, tones.g3, tones.b3, tones.d4],
        "possibleModes": m7_modes
    },
    {
        "name": "B",
        "type": "m7",
        "tones": [tones.b2, tones.d3, tones.fs3, tones.a3],
        "possibleModes": m7_modes
    },
    {
        "name": "F#",
        "type": "m7",
        "tones": [tones.fs3, tones.a3, tones.cs4, tones.e4],
        "possibleModes": m7_modes
    },
    {
        "name": "C",
        "type": "m7b5",
        "tones": [tones.c3, tones.ds3, tones.fs3, tones.as3],
        "possibleModes": diminished_modes
    },
    {
        "name": "E#",
        "type": "m7b5",
        "tones": [tones.f3, tones.gs3, tones.b3, tones.ds4],
        "possibleModes": diminished_modes
    },
    {
        "name": "A#",
        "type": "m7b5",
        "tones": [tones.as2, tones.cs3, tones.e3, tones.gs3],
        "possibleModes": diminished_modes
    },
    {
        "name": "D#",
        "type": "m7b5",
        "tones": [tones.ds3, tones.fs3, tones.a3, tones.cs4],
        "possibleModes": diminished_modes
    },
    {
        "name": "G#",
        "type": "m7b5",
        "tones": [tones.gs3, tones.b4, tones.d4, tones.fs4],
        "possibleModes": diminished_modes
    },
    {
        "name": "C#",
        "type": "m7b5",
        "tones": [tones.cs3, tones.e3, tones.g3, tones.b3],
        "possibleModes": diminished_modes
    },
    {
        "name": "G",
        "type": "m7b5",
        "tones": [tones.g3, tones.as3, tones.cs4, tones.f4],
        "possibleModes": diminished_modes
    },
    {
        "name": "D",
        "type": "m7b5",
        "tones": [tones.d3, tones.f3, tones.gs3, tones.c4],
        "possibleModes": diminished_modes
    },
    {
        "name": "A",
        "type": "m7b5",
        "tones": [tones.a3, tones.c4, tones.ds4, tones.g4],
        "possibleModes": diminished_modes
    },
    {
        "name": "E",
        "type": "m7b5",
        "tones": [tones.e3, tones.g3, tones.as3, tones.d4],
        "possibleModes": diminished_modes
    },
    {
        "name": "B",
        "type": "m7b5",
        "tones": [tones.b2, tones.d3, tones.f3, tones.a3],
        "possibleModes": diminished_modes
    },
    {
        "name": "F#",
        "type": "m7b5",
        "tones": [tones.fs3, tones.a3, tones.c4, tones.e4],
        "possibleModes": diminished_modes
    }
]