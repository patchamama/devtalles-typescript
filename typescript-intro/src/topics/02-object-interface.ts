const skills: string[] = ['Bash', 'Counter', 'Healing']

interface Character {
  name: string
  hp: number
  skills: string[]
  other?: string
  hometown: string | undefined
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter', 'Healing'],
  // other: 'test'
  hometown: undefined,
}

strider.hp = 95
strider.skills.push('Fire')
strider.other = 'test'
strider.hometown = 'Gondor'

console.table(strider)

export {}
