// Altura en cm
const heigtCm = 179
console.log("Mi altura en cm es:" + " " + heigtCm )

//Altura en metros
const heightM = 1.79
console.log("Mi altura en m es:" + " " + heightM)

//Peso en Kg
const weightKg = 79.96
console.log("Mi peso en Kg en:" + " " + weightKg.toPrecision(4))

//Altura en m, redondeada hacia arriba
const roundedHeightM = heightM
console.log("Mi altura, redondeada para arriba es: " + " " + roundedHeightM.toFixed(1))

//Peso en Kg, redondeado para abajo
const roundedWeightKg = weightKg
console.log("Mi peso en Kg, redondeado para abajo es:" + " " + roundedWeightKg.toFixed(2))

//El max valor en JS
let maxValue = 2 ** 1023
console.log("El maximo valor que se puede obtener en JS + 1 es: " + maxValue);