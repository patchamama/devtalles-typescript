function addNumbers(a: number, b: number): number {
  return a + b
}

const sum: number = addNumbers(2, 3)

// console.log(sum)

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`
}

const sumArrow: string = addNumbersArrow(2, 3)

// console.log(sumArrow)

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base
}

const result: number = multiply(2, 3, 10)
const result1: number = multiply(2, 3)
const result2: number = multiply(2)

// console.log(result)

interface Character {
  name: string
  hp: number
  showHp: () => void
}

const healCharacter = (character: Character, amount: number): void => {
  //   console.log(`${character} healed ${amount}`)
  character.hp += amount
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  showHp() {
    console.log(`HP: ${this.hp}`)
  },
}

healCharacter(strider, 20)

strider.showHp()

export {}
