export interface Passenger {
  name: string
  children?: string[]
}

const passenger1: Passenger = {
  name: 'Bruce',
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Peter', 'Mary'],
}

const returnChildrenNumber = (passenger: Passenger): number => {
  //   if (!passenger.children) {
  //     console.log('No tiene hijos')
  //     return 0
  //   }
  const howManyChildren = passenger.children?.length || 0 // Optional Chaining
  //   const howManyChildren = passenger.children!.length // Not null assertion operator (!) le dice a TS que confie en que no es null
  console.log(passenger.name, howManyChildren)
  return howManyChildren
}

returnChildrenNumber(passenger1)
returnChildrenNumber(passenger2)
