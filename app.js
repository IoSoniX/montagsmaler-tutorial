// Let wird als Vairable benutzt, die wir später noch mal verwenden können. const dagegen gilt als konstante Variable, die nachher nicht überschrieben werden sollen.

const wordEl = document.querySelector('.word');
const oldWorldsEl = document.querySelector('.old-words');

// Wortliste
let words= [];
let currentWord = "";
let previousWord = [];

fetch("words.txt")
    .then(function(response){
        return response.text();
})
.then(function(text){
    words = text.split(",");
});


// Das hier passiert, wenn wir auf den button klicken
function onClick() {
    if(currentWord) {
        // Wenn wir gerade noch ein Wort anzeigen, so fügen wir das der vorherigen Wörter hinzu
        previousWord.push(currentWord);
        // Danach aktualisieren wur noch unsere Website, um dein Wert anzuzeigen
        oldWorldsEl.innerHTML = previousWord.join(', ');
    }
    // Neues Wort generieren und als aktualles Wort speichern
    currentWord = getRandomWord();
    // Danach aktualisieren wir unsere Website, um das neue Wort
    wordEl.innerHTML = currentWord;
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
    return words[getRandomNumber(words.length)];
}