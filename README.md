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
  - [Secciones](#secciones)
    - [Sección 1: Introducción a TypeScript](#sección-1-introducción-a-typescript)
    - [Sección 2: Introducción a TypeScript](#sección-2-introducción-a-typescript)
    - [Sección 3: Tipos básicos](#sección-3-tipos-básicos)
      - [Recursos](#recursos)

## Secciones

### Sección 1: Introducción a TypeScript

- [Instalaciones recomendadas](https://gist.github.com/Klerith/384b707f9b08698655280a3d4cc4da12)

### Sección 2: Introducción a TypeScript

Instala typescript de forma global:

```sh
npm install -g typescript
tsc --version

tsc --init // Crear el archivo TSConfig.json
tsc // Compilar automáticamente todos los .ts a .js
```

_tsc_: es un transpilador (convierte typescript en javascript).

- [Hola Mundo en TypeScript]()
- [Modo observador]()

```sh
tsc --watch // o tsc -w
```

### Sección 3: Tipos básicos

- [Introducción a los tipos de datos]()
  **JavaScript tipos**: primitivos (`String, Number, Boolean, Symbol`), compuestos/objetos (`Objetos literales, Funciones, Clases, Arreglos`)

```js
// algunos tipos
age = null
otro = undefined
sym = Symbol()
sym2 = Symbol('myProperty') // cuando se tiene un propiedad en un objeto que se desea que tenga un espacio en memoria diferente
NaN // es considerado un number

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
```

- [Inferir tipos y modo estricto]()
- [Booleans - Booleanos]()
- [Numbers]()
- []()

#### Recursos

- [TypeScript](https://www.typescriptlang.org/)
- [Documentación oficial de typescript](https://www.typescriptlang.org/docs/)
- [Tipos de datos en TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
