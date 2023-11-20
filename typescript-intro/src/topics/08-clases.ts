export class Person {
  //   public name?: string // public name: string | undefined
  //   private address: string

  // De esta forma se define el constructor y se inicializan las propiedades
  // definiendo también las variables y el tipo de dato
  constructor(public name?: string, private address: string = 'No address') {
    // this.name = name
    // this.address = address
  }

  public getName(): string {
    return this.name
  }

  public getAddress(): string {
    return this.address
  }
}

export class Hero {
  public person: Person

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person // public person: Person = new Person(alterEgo, 'New York')
  ) {
    // super(alterEgo, 'New York') // Llamada al constructor de la clase padre Person con los parámetros
    // this.person = new Person(alterEgo, 'New York')
  }
}

const bruce = new Person('Bruce', 'New York')

const ironman = new Hero('Tony Stark', 45, 'Tony', bruce)
console.log(ironman.person.getName())
console.log(ironman.person.getAddress())
console.log(ironman)
// console.log(ironman.address) // Error: Property 'address' is private and only accessible within class 'Person'.
