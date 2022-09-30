const patientName = "Evelyn Park";
let apptTime = "2:30pm";
let apptDay = "Thursday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);
const firstName = "Scott"
const lastName = "Kennedy"
const fullNameConcat = "firstName + lastName"
const fullNameInterp = "firstName + lastNAme"

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = 35
let faveFood = "Chicken"
let faveColor = "Emerald Green"
let miniBio = `Hi I'm ${firstName}! I am ${myAge} years young. My favorite food is ${faveFood} and my favorite color is ${faveColor}.`
console.log("Your mini bio is:");
console.log(miniBio);