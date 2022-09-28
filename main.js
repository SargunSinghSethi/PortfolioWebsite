const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases = ["Software Engineer...", "Student...", "Human Being..."]
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 75;


function printLetters(phrase) {
    if (letterIndex == phrase.length) {
        // clear
        clearLetters();
    }
    else if (letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrase)
        }, typingSpeed)
    }
}

function clearLetters() {
    if (letterIndex == -1) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if (letterIndex > -1) {
        let updatedPhase = "";
        for (let index = 0; index < letterIndex; index++) {
            updatedPhase += phrases[phraseIndex].charAt(index);
            console.log(index);
        }
        dynamicContent.textContent = updatedPhase;
        letterIndex -= 1;
        setTimeout(clearLetters, erasingSpeed)
    }
}

printLetters(phrases[phraseIndex])