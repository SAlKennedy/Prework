const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal =  mikesMeal + juansMeal + sheasMeal;
const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks;

const subtotal = mealsTotal + drinksTotal;

const tax = 12.45
const tip = 24.90

const billTotal = subtotal + tax + tip;
const splitAmount = billTotal / 3; 

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");
