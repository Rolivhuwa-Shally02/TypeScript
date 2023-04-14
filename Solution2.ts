function FizzBuzzGame( input: number): void{

if (input % 3 == 0) {

    console.log (input + " Fizz!")
}

if (input % 5 == 0) {
    console.log (input + " Buzz!")
}

if (input % 3 == 0 && input % 5 == 0 )

console.log (input + " Fizz-Buzz!")

else {
    console.log (input)
}
}


