const longWord = "synesthesia";

const wordLength = longWord.length;
console.log(`${longWord} has a length of ${wordLength}`)

const firstThreeLetters = longWord.slice(0, 3) //we want the first three letters, so indices 0, 1, and 2
console.log(`The first three letters of ${longWord} are ${firstThreeLetters}.`)

const someMiddleLetters = longWord.slice(2, 7); //will start at index 2 and end before index 5 total characters
console.log(`A middle portion of ${longWord} is ${someMiddleLetters}.`)

const fifthLetter = longWord.charAt(4); //remember that indexing starts at 0, so the 5th letter is at index 4
console.log(`The fifth letter of ${longWord} is ${fifthLetter}.`)

const positionOfFirstE = longWord.indexOf("e"); //there are multiple e's, but indexOf finds the position of the first one
console.log(`The index of the first e in ${longWord} is ${positionOfFirstE}.`)

const newWord = longWord.replace("syn", "an"); //should result in the word 'anesthesia'
console.log(`After replacement, ${longWord} becomes ${newWord}.`);
const emailAddress = "scottakennedy2019@gmail.com";

const emailLength = "emailAddress"
console.log(`The length of the email address is ${emailLength} characters.`);

const indexOfAt = ("@")
console.log(`The @ symbol is at position ${indexOfAt}`);

const username = "scottakennedy2019"
console.log(`The new username is ${username}`);

const oldDomain = emailAddress.slice(indexOfAt + 1)   
console.log(`The old domain was ${oldDomain}`);

const newDomain = "codecorps.com";
const newEmailAddress = `${username}@${newDomain}`
console.log(`The new email address is ${newEmailAddress}`);

const tempPassword = newDomain[5] + oldDomain[7] + newDomain[8] + oldDomain[2] + newDomain[9];
console.log(`The user’s temporary password is ${tempPassword}`);
