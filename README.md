# devtalles-typescript

## devTalles - TypeScript: Tu completa guía y manual de mano

_https://cursos.devtalles.com/courses/take/typescript-guia-completa_

## Descripción

Mis notas personales del _[TypeScript: Tu completa guía y manual de mano)](https://cursos.devtalles.com/courses/take/typescript-guia-completa)_ brindado por _Fernando Herrera_.

## Tabla de contenidos

- [devtalles-typescript](#devtalles-typescript)
  - [devTalles - TypeScript: Tu completa guía y manual de mano](#devtalles---typescript-tu-completa-guía-y-manual-de-mano)
  - [Descripción](#descripción)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Sección 1: Introducción a TypeScript](#sección-1-introducción-a-typescript)
  - [Sección 2: Introducción a TypeScript](#sección-2-introducción-a-typescript)
  - [Sección 3: Tipos básicos](#sección-3-tipos-básicos)
  - [Angular de cero a experto - Edición 2023](#angular-de-cero-a-experto---edición-2023)
    - [Sección 3: Bases de TypeScript - Recomendado](#sección-3-bases-de-typescript---recomendado)
  - [Recursos](#recursos)

## Sección 1: Introducción a TypeScript

- [Instalaciones recomendadas](https://gist.github.com/Klerith/384b707f9b08698655280a3d4cc4da12)

## Sección 2: Introducción a TypeScript

Instala typescript de forma global:

```bash
npm install -g typescript
tsc --version

tsc --init // Crear el archivo TSConfig.json
tsc -w // Compilar automáticamente todos los .ts a .js
```

_tsc_: es un transpilador (convierte typescript en javascript).

- [Hola Mundo en TypeScript]
- [Modo observador]

```bash
tsc --watch // o tsc -w
```

## Sección 3: Tipos básicos

- [Introducción a los tipos de datos](https://github.com/patchamama/devtalles-typescript/commit/7be78ef995d8c434a45a1823c3973b8dfe1ae889)
- [Inferir tipos y modo estricto](https://github.com/patchamama/devtalles-typescript/blob/af9114e5f21f70918c04aaebaf517d7e8412a256/bases/app.ts)
- [Booleans - Booleanos](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/booleans.ts)
- [Numbers - Números](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/numbers.ts)
- [Strings - Cadenas de caracteres](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/strings.ts)
- [Tipo Any](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/any.ts)
- [Arrays - Arreglos](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/arrays.ts)
- [Tuples - Tuplas](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/tuples.ts)
- [Enum - Enumeraciones](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/enums.ts)
- [Void - Vacío](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/void.ts)
- [Never - Nunca](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/never.ts)
- [Null y Undefined](https://github.com/patchamama/devtalles-typescript/blob/main/bases/tipos/null-undefined.ts)
- [Tarea y Resolución del Ejercicio #1](https://github.com/patchamama/devtalles-typescript/blob/main/bases/app.ts)

## Angular de cero a experto - Edición 2023

### Sección 3: Bases de TypeScript - Recomendado

_https://cursos.devtalles.com/courses/take/angular/lessons/41410397-inicio-de-proyecto-typescript_

[Fuente de ejercicios online](https://stackblitz.com/edit/typescript-vxnz8z?file=index.ts)

```sh
npm create vite
cd typescript-intro
npm install
npm run dev
```

- [Tipos básicos y conceptos generales]()
- [Objetos, arreglos e interfaces]()
- [Funciones básicas]()
- [Funciones con objetos como argumentos]()
- [Tarea sobre objetos e interfaces]() Código de la tarea [aquí](https://gist.github.com/Klerith/0f7001ef92bbb4e8be16e07e1d710c48)
- [Desestructuración de Objetos]()
- [Desestructuración de Arreglos]()
- [Desestructuración de argumentos]()
- [Resolución de la tarea - Desestructuración]()
- [Importaciones y exportaciones]()
- [Clases básicas]()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()

---

**JavaScript tipos**: primitivos (`String, Number, Boolean, Symbol`), compuestos/objetos (`Objetos literales, Funciones, Clases, Arreglos`)

```typescript
// algunos tipos
age = null
otro = undefined
sym = Symbol()
sym2 = Symbol('myProperty') // cuando se tiene un propiedad en un objeto que se desea que tenga un espacio en memoria diferente
NaN // es considerado un number

// tipo Any mejor nunca usarlo pues se pierde el testeo por el tipado
let avenger: any = 123
console.log((avenger as string).charAt(0)) // casting as string
console.log(avenger.toFixed(2))
console.log(<number>avenger.toFixed(2)) // casting as number
// Esto es correcto, pues un array también es un any
let arr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nada: undefined = undefined
let nulo: null = null
// null != undefined
console.log(nada)
let isActive: boolean | undefined = undefined

// Tupla de dos valores que en js es un array
const hero: [string, number] = ['Dr. Strange', 100]
hero[0] = 'Ironman'
hero[1] = 20
console.log(hero)

// tipo enum (enumeraciones)
enum AudioLevel1 {
  min = 1,
  medium,
  max = 10,
}
const currentAudio1: AudioLevel1 = AudioLevel1.medium
console.log(currentAudio1)
console.log(AudioLevel1)

// Diccionario
person = {
  name: 'Fernando',
  Age: 35,
}

// Clases
class Person {
  name
  age
}

// funciones
function sayHello() {}

const sayHello = () => {} // arrow functions

// void especifica que la función no retorna nada
function callBatman(): void {
  console.log('Mostrar la batiseñal')
  //una función que no retorna nada (sin return), retorna undefined
  // void != null (null es un valor, void es como vacío o nada)
  // también return; devuelve un void
}
const a = callBatman()

// never no es undefined, no es null, no es void, no es void (nada)
// cuando se usa never, la función nunca retorna nada y no se seguirá ejecutando,
// es decir, la función nunca termina y el código revienta en ese punto
const error = (message: string): never => {
  throw new Error(message)
}
const abc = (message: string): never | number => {
  if (false) {
    throw new Error(message)
  }
  return 1
}
error('Auxilio!!')

// Interfaces

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

//-------
// Ejemplo de resolución de tarea de ejercicio #1
// https://import.cdn.thinkific.com/643563/courses/1870132/appts-220520-123101.zip
;(() => {
  // Tipos
  const batman: string = 'Bruce'
  const superman: string = 'Clark'
  const existe: boolean = false
  console.log(batman, superman, existe)

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman]
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true]
  console.log({ parejaHeroes, villano })

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash']
  console.log({ aliados })

  //Enumeraciones
  enum fuerza {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }
  const fuerzaFlash = fuerza.flash
  const fuerzaSuperman = fuerza.superman
  const fuerzaBatman = fuerza.batman
  const fuerzaAcuaman = fuerza.acuaman
  console.log(fuerza)

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada'
  }
  console.log(activar_batiseñal())

  function pedir_ayuda(): void {
    console.log('Auxilio!!!')
  }
  console.log(pedir_ayuda())

  // Aserciones de Tipo
  const poder: any = '100'
  const largoDelPoder: number = (poder as string).length
  const largoDelPoder1: number = (<string>poder).length
  console.log({ poder, largoDelPoder, largoDelPoder1 })
})()
```

## Recursos

- [TypeScript](https://www.typescriptlang.org/)
- [Documentación oficial de typescript](https://www.typescriptlang.org/docs/)
- [Tipos de datos en TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
