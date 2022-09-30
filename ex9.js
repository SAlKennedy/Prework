const firstName = "Scott";
const middleName = "Alan";
const lastName = "Kennedy";

const firstInitial = firstName[0];
const middleInitial = middleName[0];
const lastInitial = lastName[0];

const monogram = firstInitial + middleInitial + lastInitial;
console.log(`${firstName}'s monogram is ${monogram}`)

const fullString = "SOFTWARE SAK";

const vanityLetter1 = fullString[0]
const vanityLetter2 = fullString[1]
const vanityLetter3 = fullString[2]
const vanityLetter4 = fullString[3]
const vanityLetter5 = fullString[9]
const vanityLetter6 = fullString[10]
const vanityLetter7 = fullString[11]

const vanityPlate = (vanityLetter1 + vanityLetter2 + vanityLetter3 + vanityLetter4 + vanityLetter5 + vanityLetter6 + vanityLetter7)

console.log(`The new vanity plate is ${vanityPlate}`);