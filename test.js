import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import countriesCapitals from './countries-and-capitals.js';
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);

let easyWords=[]                                            
let hardWords=[]
    for (let i=0; i<countriesCapitals.length; i++) {
        if (countriesCapitals[i].city.length>7) {
            hardWords.push(countriesCapitals[i].city)
        } else if (countriesCapitals[i].country.length>7) {
            hardWords.push(countriesCapitals[i].country)
        } else {
            easyWords.push(countriesCapitals[i].city)
            easyWords.push(countriesCapitals[i].country)
        }
    }


    let solutionNumberEasy=Math.round(Math.random()*easyWords.length)
    let solutionNumberHard=Math.round(Math.random()*hardWords.length)

console.log("Wanna play easy or hard?")
let difficulty=prompt("")
while (!(difficulty.toLowerCase()==="easy" || difficulty.toLocaleLowerCase()==="hard")) {
    console.log("Please choose EASY or HARD!")
    difficulty=prompt("")
}

let solution=""
if (difficulty.toLowerCase()==="easy") {
    solution=solutionPickEasy()
} else if (difficulty.toLowerCase()==="hard") {
    solution=solutionPickHard()
}

let HP = 0
if (difficulty.toLowerCase()==="easy") {
    HP=6
} else if (difficulty.toLowerCase()==="hard") {
    HP=4
}

console.log(`You choose ${difficulty} mode:
Starting HP is ${HP}
An ${difficulty} word is set.`)

//let solutionNumberArray=Math.round(Math.random()*182)         //pick from countries and capitals
//let solutionNumberObject=Math.round((Math.random()*99)+1)     //    
//let solution="Saudi Arabia" solutionPickCombined()

let usedLetters = []
let wrongLetters = []
let theWord = ""
let winCounter = 0
const allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const hangmanGraphics = [
    `
    _______
    |     |
    |     O
    |    /|\\
    |    / \\
    |
    |________
    `,
    `
    _______
    |     |
    |     O
    |    /|\\
    |    /
    |
    |________
    `,
    `
    _______
    |     |
    |     O
    |    /|\\
    |
    |
    |________
    `,
    `
    _______
    |     |
    |     O
    |    /|
    |
    |
    |________
    `,
    `
    _______
    |     |
    |     O
    |
    |
    |
    |________
    `,
    `
    _______
    |     |
    |
    |
    |
    |
    |________
    `,
    `
    _______
    |     
    |
    |
    |
    |
    |________
    `
];


for (let i = 0; i < solution.length; i++) {                 //create theWord
    if (solution[i]===" ") {
        theWord+=" "
    } else {
    theWord += "_ "
    }
}
console.log(theWord)
console.log(`Your current HP is ${HP}`)
hangmanGraphicsVisual()

while (HP > 0) {                                            //whole game while loop

    let theWordArray = theWord.split(" ")                   //how to win
    let solutionWithoutSpaces= solution.replace(/\s/g, '')
    for (let i=0; i<solution.length; i++) {                 
        if (solution[i]===theWordArray[i]) {
            winCounter++
            if (winCounter===solutionWithoutSpaces.length) {             
                console.log("You won!")
                process.exit(0)
            }
        }
    }
    winCounter=0                                           
        
//let guess=prompt("tippelj csakbetüt")
//while (!allLetters.some (name => name.toUpperCase() === guess.toUpperCase())) {
//    guess=prompt("tippelj csakbetüt2")

        console.log("Please type your letter here:")
        let guess = prompt("")                                                      //guess while loop 
        while (((usedLetters.includes(guess) || !solution.includes(guess)) && HP>0)) {      //améég USED LETTER vagy NEM SOLUTION 
            if (guess==="quit") {                                                           //quit GG
                console.log("See you next time!")
                process.exit(0)      
            } else if (!allLetters.includes(guess.toLowerCase())) {  //only letter
                console.log("Please type a LETTER!")
            } else if (!solution.includes(guess) && !wrongLetters.includes(guess)) {        //NEM SOLUTION és ÚJ WRONGLETTER
                HP = HP - 1
                wrongLetters.push(guess) 
                    if (HP<1) {
                        console.log(`Your current HP is ${HP}`)
                        hangmanGraphicsVisual()
                        console.log(`You died. The solution was ${solution}`)
                        process.exit(0)  
                    }
                console.log(`The wrong letters are: ${wrongLetters}`)
                console.log(`Your current HP is ${HP}`)
                hangmanGraphicsVisual()
                console.log(`The word:
${theWord}`)
            } else if (!solution.includes(guess) && wrongLetters.includes(guess)) {         //NEM SOLUTION és USED WRONGLETTER
                console.log("You already had this letter before!")
                console.log(`The wrong letters are: ${wrongLetters}`)
                console.log(`Your current HP is ${HP}`)
                console.log(`The word:
                ${theWord}`)
            } else if (usedLetters.includes(guess)) {                                       //USED LETTER
                console.log("You already had this letter before!")
                console.log(`The word:
${theWord}`)
            }   
            console.log("Please type your letter here:")
            guess = prompt("")
        }
    

        usedLetters.push(guess)

        for (let i = 0; i < solution.length; i++) {              //add GUESS to theWord
            if (solution[i] === guess) {
                guessedLetterCorrect(i, guess)
            }
        }
    
    console.log(`The word:
    ${theWord}`)
}




//Functions

function guessedLetterCorrect(index, guessLetter) {
    let theWordArray = theWord.split(" ")
    theWordArray[index] = guessLetter
    theWord = theWordArray.join(" ")
}

/*
function checkIfIncluded(guessLetter) {
    if (!solution.includes(guessLetter) && !wrongLetters.includes(guessLetter)) {
        HP = HP - 1
        wrongLetters.push(guessLetter) 
    }
    console.log(`The wrong letters are: ${wrongLetters}`)
    console.log(`Your current HP is ${HP}`)

}
*/

function hangmanGraphicsVisual () {
    for (let i=0; i<hangmanGraphics.length; i++) {
        if (i===HP) {
            console.log(hangmanGraphics[i])
        }
    }
}

function solutionPickCountry () {
    for (let i=0; i<countriesCapitals.length; i++) {
        if (i===solutionNumberArray) {
            return(countriesCapitals[i].country)
        }
    }
}

function solutionPickCity () {
    for (let i=0; i<countriesCapitals.length; i++) {
        if (i===solutionNumberArray) {
            return(countriesCapitals[i].city)
        }
    }
}

function solutionPickCombined () {
    if (solutionNumberObject%2===0) {
        return solutionPickCity();
    } else if (solutionNumberObject%2===1) {
        return solutionPickCountry();
    }
}


function solutionPickEasy () {
    for (let i=0; i<easyWords.length; i++) {
        if (i===solutionNumberEasy) {
            return(easyWords[i])
        }
    }
}

function solutionPickHard () {
    for (let i=0; i<hardWords.length; i++) {
        if (i===solutionNumberHard) {
            return(hardWords[i])
        }
    }
}