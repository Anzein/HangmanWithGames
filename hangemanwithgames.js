import PromptSync from 'prompt-sync';
const prompt = PromptSync();

// Variables, Arrays, Objects

let lettersOnly = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const listOfGames = [
    {title: "Undertale", actor: "Frisk"},
    {title: "The Binding of Isaac", actor: "Isaac"},
    {title: "Final Fantasy VII", actor: "Sephiroth"},
    {title: "Chrono Trigger", actor: "Chrono"},
    {title: "Hades", actor: "Zagreus"},
    {title: "Resident Evil", actor: "Jill Valentine"},
    {title: "Warcraft III", actor: "Ner'zuhl"},
    {title: "The World next Door", actor: "June"},
    {title: "The Force unleashed", actor: "Juno Eclipse"},
    {title: "Beyond two Souls", actor: "Jodie"},
]

let easyWord = []
let hardWord = []
for (let i = 0; i < listOfGames.length; i++) {
    if (listOfGames[i].title.length < 10) {
        easyWord.push(listOfGames[i].title)
    } else {
        hardWord.push(listOfGames[i].title)
    }
}
for (let i = 0; i < listOfGames.length; i++) {
    if (listOfGames[i].actor.length < 10) {
        easyWord.push(listOfGames[i].actor)
    } else {
        hardWord.push(listOfGames[i].actor)
    }
}

let randomESolution = Math.round(Math.random()*easyWord.length)
let randomHSolution = Math.round(Math.random()*hardWord.length)

//console.log ("easy:",easyWord)
//console.log ("hard",hardWord)
// Kezdés

console.log ("Hello! Do you want to play? Y/N")
let startButton = prompt ("")
while (!(startButton.toLowerCase() === "y" || startButton.toLowerCase() === "n")) {
    console.log ("Invalid input! Please, Y/N")
    startButton = prompt ("")
}

if (startButton.toLowerCase() === "y") {
    console.log ("Please, choose a difficulty level: E/H")
    let difficulty = prompt ("")
    while (!(difficulty.toLowerCase() === "e" || difficulty.toLowerCase() === "h")) {
        console.log ("Invalid input! Please, E/H")
        difficulty = prompt ("")
    }

    let solution = ""
    if (difficulty.toLowerCase() === "e") {
        solution = easyRandom()
    } else {
        solution = hardRandom()
    }

    let HP = 0
    if (difficulty.toLowerCase() === "e") {
        HP = 10
    } else {
        HP = 5
    }

    let invisibleWord = ""
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] === " ") {
            invisibleWord += "  "
        } else if (solution[i] === "'") {
            invisibleWord += "'"
        } else {
            invisibleWord += " _"
    }
        
    }

    console.log ("You have choosen:",difficulty)
    console.log ("You're HP is:",HP)
    console.log ("You're word what you have to figure out:",invisibleWord)
    console.log ("Lesss go!")
    console.log ("Please, give me a letter.")
    let guess = prompt ("")
    while (!lettersOnly.includes(guess.toLowerCase())) {
        console.log ("I said letter!")
        guess = prompt ("")
    }

} else {
    console.log ("Okay! Bye!")
    process.exit(0)
}

// Functions

function easyRandom () {
    for (let i = 0; i < easyWord.length; i++) {
        if (i === randomESolution) {
            return (easyWord[i])
        }
    }
}

function hardRandom () {
    for (let i = 0; i < hardWord.length; i++) {
        if (i === randomHSolution) {
            return (hardWord[i])
        }
    }
}