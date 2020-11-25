const Game = ( _ => {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const words = ['apple', 'ball', 'cat', 'dog', 'elephant'];
    let chosenWord;
    let guessingWord;
    let lives;
    let guesses;

    //cache the DOM
    const $hangman = document.querySelector('.hangman');

    const init = _ => {
        //1. choose a word
        chosenWord = chooseWord();
        //2. build out our guessing word to render
        guessingWord = Array(chosenWord.length).fill('_');
        guesses = [];
        lives = 7;
        //show the initial screen
        showInitPage();
    }

    const showInitPage = _ => {
        let markup = `
        <p class="hangman__stats">
            Lives:
            <span class="hangman__lives">${lives}</span>
        </p>
        <h1 class="hangman__title">Hangman</h1>
        <canvas class="hangman__board" height="155px"></canvas>
        <div class="hangman__word">${guessingWord.join('')}</div>
        <p class="hangman__instructions">Pick a letter below to guess the whole word.</p>
        <ul class="hangman__letters">
            ${createLetters()}
        </ul>
        <button class="button hangman__trigger">Main Menu</button>
        `
        $hangman.innerHTML = markup;
    }

    const createLetters = _ => {
        let markup = '';
        letters.forEach(letter => {
            markup += `
                <li class="hangman__letter">${letter}</li>
            `

        })
        return markup;
    }

    const chooseWord = _ => {
        let ranNum = Math.floor(Math.random() * words.length);
        return words[ranNum];
    }

    return {
        init
    }
})();

export default Game; 