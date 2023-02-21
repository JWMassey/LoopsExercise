//Loops Exercise - Jack Massey//

//1
for (i = 1; i <= 7; i++) {
    console.log(i);
}

console.log(`\n\n`);

//2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

console.log(`\n\n`);

//3a
const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]
//3b
for (wiz of wizards) {
    console.log(wiz);
}

console.log(`\n\n`);

//4a
let harryPotterMovies = 0;
//4b
while (harryPotterMovies < 8) {
    harryPotterMovies++;
}
console.log(harryPotterMovies);

//Bonus//

console.log(`\n\n`);

//5a
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
//5b
for (house of hogwartsHouses) {
    for (char of house) {
        console.log(char);
    }
    console.log(`\n`);
}

console.log(`\n`);
//6a
const quote = ["Yer", "A", "Wizard", "Harry"];
//6b
let fullQuote = "";
for (word of quote) {
    fullQuote += word + " "
}
console.log(fullQuote);


console.log(`\n\n`);

//7
for (i = 1; i <= 25; i++) {
    if (i % 15 == 0) {
        console.log(`Expecto Patronum`);
    } else if (i % 3 == 0) {
        console.log(`Expecto`);
    } else if (i % 5 == 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}