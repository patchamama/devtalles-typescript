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

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(alterEgo, 'New York') // Llamada al constructor de la clase padre Person con los parámetros
  }
}

const ironman = new Hero('Tony Stark', 45, 'Tony')
console.log(ironman.getName())
console.log(ironman.getAddress())
console.log(ironman)
// console.log(ironman.address) // Error: Property 'address' is private and only accessible within class 'Person'.
