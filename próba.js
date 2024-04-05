let alap = "egy mondat szóközzel"
let módosult = ""

for (let i = 0; i < geci.length; i++) {
    if (alap[i] === " ") {
        módosult += "  "
    } else {
        módosult += "_ "
    }
}
console.log (alap)
console.log (módosult)
