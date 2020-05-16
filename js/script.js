console.log("Started");

let randomChord;
let randomMode;
let playingTones = new Array();
console.log(playingTones);

const main = function () {

  generateChord();

  const nextBtn = document.querySelector("[js-next-btn]");

  nextBtn.addEventListener("click", async function () {

    document.querySelector('[js-chord-name]').innerHTML = "";
    document.querySelector('[js-mode]').innerHTML = "";
    document.querySelector('[js-loading-bar]').style.display = "flex";

    console.log(playingTones);

    playingTones.forEach(tone => {
      tone.stop();
    })
    playingTones = [];

    generateChord();
  });

}

const generateChord = function () {
  randomChord = chords[Math.floor(Math.random() * chords.length)];
  console.log(randomChord);
  randomMode = randomChord.possibleModes[Math.floor(Math.random() * randomChord.possibleModes.length)];

  randomChord.tones.forEach(
    element => {
      playingTones.push(new Howl({
        src: element,
        loop: true,
        onload() {
          setTimeout(() => {
            document.querySelector('[js-loading-bar]').style.display = "none";
            document.querySelector('[js-chord-name]').innerHTML = `${randomChord.name}${randomChord.type}`;
            document.querySelector('[js-mode]').innerHTML = randomMode;
            this.play();
          }, 1000)
          console.log("Hi");
        }
      }));
    }
  );
}

main();