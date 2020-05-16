console.log("Started");

const main = function () {

    const nextBtn = document.querySelector("[js-next-btn]");

    const effect = {
        oscillator: {
            type: "triangle"
        }
        ,
        envelope: {
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        }
    }

    // create effects
    var autoFilter = new Tone.AutoFilter("4n").toDestination().start();
    var freeverb = new Tone.Freeverb().toDestination();
    freeverb.dampening.value = 1000;

    // connect the synth with the effect
    const chord = new Tone.PolySynth(Tone.Synth, effect).connect(freeverb).connect(autoFilter);
    chord.volume.value = -20;

    generateChord(chord);
    nextBtn.addEventListener("click", async function () {
        await chord.releaseAll();

        document.querySelector('[js-chord-name]').innerHTML = "";
        document.querySelector('[js-mode]').innerHTML = "";
        document.querySelector('[js-loading-bar]').style.display = "flex";

        setTimeout(() => {
            document.querySelector('[js-loading-bar]').style.display = "none";
            generateChord(chord);
        }, 2000)
    });
}

const generateChord = function (chord) {

    const randomChord = chords[Math.floor(Math.random() * chords.length)];
    console.log(randomChord);

    const randomMode = randomChord.possibleModes[Math.floor(Math.random() * randomChord.possibleModes.length)];

    document.querySelector('[js-chord-name]').innerHTML = `${randomChord.name}${randomChord.type}`;
    document.querySelector('[js-mode]').innerHTML = randomMode;

    chord.triggerAttack(randomChord.tones, "4n");
}

// main();