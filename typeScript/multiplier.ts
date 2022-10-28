//TypeScript, unlike JavaScript, can type in the variables we want
const multiplicator = (a: number/*Assign variable type*/ , b: number, printText: string) => {

    console.log(printText, a * b)

}

//The 'process.argv' is an array
console.log(process.argv)

//Positions correspons to 'process.argv' array
//We must transform the constants to number, because the 'process.argv' array change values
//to String, then that would give error
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)