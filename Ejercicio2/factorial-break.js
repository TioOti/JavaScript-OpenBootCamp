/**
 * Factorial ussing Break
 */

let numFactorial = 1
let i = 10
while (true) {
    numFactorial *= i
    i--
    if(i===1) break;
}
console.log(numFactorial);