import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import countriesCapitals from './countries-and-capitals.js';
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);

// Itt kezdődik!

// Variables, arrays, objects

const allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const countryAndCity = [
    {country: "Hungary", city: "Budapest"},
    {country: "Germany", city: "Berlin"},
    {country: "Republic of the Congo", city: "Brazzaville"},
    {country: "Saudi Arabia", city: "Rijad"},
    {country: "England", city: "London"},
    {country: "China", city: "Hong Kong"},
    {country: "Japan", city: "Tokyo"},
    {country: "Brasilia", city: "Rio"},
    {country: "France", city: "Paris"},
    {country: "Canada", city: "Ottawa"},
]

let easyWords = []
let hardWords = []
for (let i = 0; i < countryAndCity.length; i++) {
    if (countryAndCity[i].country.length < 6) {
        easyWords.push(countryAndCity[i].country)
    } else if (countryAndCity[i].city.length < 6) {
        easyWords.push(countryAndCity[i].city)
    } else {
        hardWords.push(countryAndCity[i].country)
        hardWords.push(countryAndCity[i].city)
    }
}
let easyRandomize = Math.round(Math.random()*easyWords.length)
let hardRandomize = Math.round(Math.random()*hardWords.length)

// Startbutton

console.log ("Hello, this is a hanged-man game! Do you want to play? Y/N")
let startButton = prompt ("")
while (!(startButton === "Y" || startButton === "y" || startButton === "N" || startButton === "n")) {
    console.log ("Invalid input! Do you want to play? Y/N")
    startButton = prompt ("")
}

if (startButton === "Y" || startButton === "y") {
    console.log ("Let's start the game!")

    console.log ("Choose a difficulty! Easy/Hard")
    let difficulty = prompt ("")
    while (!(difficulty.toLowerCase() === "easy" || difficulty.toLowerCase() === "hard")) {
        console.log ("Invalid input, choose EASY/HARD")
        difficulty = prompt ("")
    }

    let solution = ""
    if (difficulty.toLowerCase() === "easy") {
        solution = easyWordRandomizer()
    } else if (difficulty.toLowerCase() === "hard") {
        solution = hardWordRandomizer()
    }

    let HP = 0
    if (difficulty.toLowerCase() === "easy") {
        HP = 8
    } else if (difficulty.toLowerCase() === "hard") {
        HP = 3
    }

    console.log ("You choose: ",difficulty)
    console.log ("Your HP: ",HP)
    console.log ("An",difficulty+" word is set.")

    // A solution átkonvertálása vonalakká, meg kiszűrjük itten aztat a rohadás szóközt he!
    let theWord = ""
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] === " ") {
            theWord += "  "
        } else if (solution[i] === "-") {
            theWord += "  "
        } else {
            theWord += "_ "
        }
    }
    console.log ("The word you have to figure out:")
    console.log (theWord)
    console.log ("Your HP is:",HP)

    console.log ("Type your guess!")
    let guess = prompt ("")
    while (!allLetters.includes(guess)) {
        console.log ("Invalid input BAZDMEG HÁ HÜLYE VASGYO BAZDM?EG A SZKAÁLLAS FEJEDET BAZDMEG!!!!")
        guess = prompt ("")
    }

    // Itt kezdődik a tényleges játék a találgatásokkal.
// Itten vagyon a kezdetekkori kiléptető, egy else lángoló csipkebokor képében vala. 

} else {
    console.log ("Okay, maybe next time!")
}


// Functions

// Random kiválaszt egyet a könnyű szavak közül.
function easyWordRandomizer () {
    for (let i = 0; i < easyWords.length; i++) {
        if (i === easyRandomize) {
            return(easyWords[i])
        }
    }
}

// Random kiválaszt egyet a nehéz szavak közül.
function hardWordRandomizer () {
    for (let i = 0; i < hardWords.length; i++) {
        if (i === hardRandomize) {
            return(easyWords[i])
        }
    }
}

// Nem engedi, hogy a betűkön kívül más karakter is beírható legyen.
function onlyLetter (guess) {
    while (!allLetters.some (name => name.toUpperCase() === guess.toUpperCase())) {
        console.log ("Invalid!")
        guess = prompt ("")
    }
}

/*
let array = ["fizbuzz", "butfizz", "fiz buzz", "baz fizz"]
let arrayWithoutSpace = []
let arrayWithSpace = []

for (let i = 0; i < array.length; i++) {
    if (array[i].includes(" ")) {
        arrayWithoutSpace.push(array[i])
    } else {
        arrayWithSpace.push(array[i])
    }
}

console.log (array)
console.log ("-------------------------------------------------")
console.log (arrayWithoutSpace)
console.log ("-------------------------------------------------")
console.log (arrayWithSpace)

let randomNumber = Math.round(Math.random()*arrayWithoutSpace)

let solution = randomNumber

console.log (solution)
*/

/*
// Array containing names
let names = ["David", "Mike", "Steve", "John", "Jack", "Logan"];

// Function to choose a random name
function getRandomName(names) {
    let index = Math.floor(Math.random() * names.length);
    return names[index];
}

// Example usage
let randomName = getRandomName(names);
console.log("Random name:", randomName);
*/