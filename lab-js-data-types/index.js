/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const TongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " "+ s4;

// Print out the concatenated string
console.log(TongueTwister)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


const resultOfWord = part1.slice(0,3) + part1[3].toUpperCase() + part2.slice(0,5) + part2[5].toUpperCase()
console.log(resultOfWord)

//first i need to slice to jav and then i do uppercase starting from 3 to only uppercase A and do the same with other part



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const RandomGeneratedNum = Math.round(Math.random()*10) +1;

//added multiplication by 10 because if i just kept Math.random it would only show me a number from 0 to 1
// added +1 because it would start by 0, without it
//used math.round to round the number to a integer, instead of a decimal number


// Print the generated random number

console.log(RandomGeneratedNum)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; 
false

const expression2 = a || b;
true

const expression3 = !a && b;
false

const expression4 = !(a && b);
false

const expression5 = !a || !b;
true

const expression6 = !(a || b);
false

const expression7 = a && a;
true