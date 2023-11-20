// Los decoradores son funciones que pueden modificar el comportamiento de una clase, método o propiedad.

function classDecorator<T extends { new (...args: any[]): {} }>(
  // function classDecorator( constructor: any ) {
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property'
    hello = 'override'
  }
}

@classDecorator //@service @module @controller agrega funcionalidades a la clase
export class SuperClass {
  public myProperty: string = 'ABc123'

  print() {
    console.log(this.myProperty)
  }
}

console.log(SuperClass)

const myClass = new SuperClass()
console.log(myClass)
