const namee = "Octavio"
console.log(namee)

const lastName = "Ripoll"
console.log(lastName)

const student = namee + " " + lastName
console.log(student) // una forma de concatenación

const studentConcat = namee.concat(" ", lastName)
console.log(studentConcat) //otra forma de concatenación

const studentMayus = studentConcat.toUpperCase()
console.log(studentMayus)

const studentMins = student.toLocaleLowerCase()
console.log(studentMins)

const firstLetter = namee[0]
console.log(firstLetter)

const lastLetter = lastName[5]
console.log(lastLetter)

const noSpaces = student.replace(" ","")
console.log(noSpaces)

const nameIncludes = student.toLocaleLowerCase().includes(("OcTaVio").toLocaleLowerCase()) //.toLowerCase para hacer ambas comparaciones
console.log(nameIncludes)
