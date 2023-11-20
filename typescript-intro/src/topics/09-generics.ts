// Se recomienda nunca usar el tipo de dato any,
// ya que se pierde la inferencia de tipos
// y es como sí se trabajara en JavaScript

// export function whatsMyType(argument: any): any {
// de esta forma se puede usar en el editor el autocompletado (intellisense)
export function whatsMyType<T>(argument: T): T {
  return argument
}

let amIString = whatsMyType<string>('Hello World')
let amINumber = whatsMyType<number>(100)
let amIBoolean = whatsMyType<boolean>(true)
let amIObject = whatsMyType<object>({ name: 'Bruce' })
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5])

console.log(amIString.split(' '))
console.log(amINumber.toFixed(2))
console.log(amIBoolean.valueOf())
console.log(amIObject.name)
console.log(amIArray.reverse())
