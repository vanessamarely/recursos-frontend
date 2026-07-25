# TypeScript

[🔙 Volver Recursos](https://github.com/vanessamarely/recursos-frontend/)

## Definición de TypeScript

TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que agrega tipos estáticos opcionales y otras características avanzadas. TypeScript permite a los desarrolladores escribir código más robusto y mantenible al proporcionar una verificación de tipos en tiempo de compilación.

## Conceptos Básicos de TypeScript

- **Tipos**: TypeScript introduce tipos estáticos que permiten definir el tipo de datos que una variable puede almacenar. Esto ayuda a detectar errores en tiempo de compilación y mejora la legibilidad del código.
- **Interfaces**: Las interfaces en TypeScript se utilizan para definir la forma de un objeto. Permiten especificar las propiedades y métodos que un objeto debe tener.
- **Clases**: TypeScript admite la programación orientada a objetos mediante el uso de clases. Las clases permiten definir la estructura y el comportamiento de los objetos.
- **Modulos**: Los módulos en TypeScript permiten organizar el código en archivos separados y reutilizables. Cada módulo puede exportar e importar componentes, funciones y variables.

## Tipos de Datos en TypeScript

TypeScript tiene varios tipos de datos, incluyendo:

- **Números**: Representan valores numéricos, tanto enteros como decimales.
- **Cadenas de texto**: Representan secuencias de caracteres.
- **Booleanos**: Representan valores de verdad, `true` o `false`.
- **Arreglos**: Representan listas ordenadas de elementos.
- **Tuplas**: Representan listas ordenadas de elementos con tipos específicos.
- **Enumeraciones**: Representan conjuntos de valores constantes.
- **Objetos**: Representan colecciones de pares clave-valor.
- **Nulos**: Representan la ausencia intencional de un valor.
- **Indefinidos**: Representan variables que no han sido asignadas a un valor.

## Sintaxis y Ejemplos de Código en TypeScript

### Declaración de Variables

```typescript
// Declaración de variables utilizando let y const
let nombre: string = "Juan";
const PI: number = 3.1416;
```

### Funciones

```typescript
// Definición de una función con tipos de parámetros y tipo de retorno
function saludar(nombre: string): string {
  return "Hola, " + nombre + "!";
}

// Definición de una función utilizando una función de flecha
const despedir = (nombre: string): string => {
  return "Adiós, " + nombre + "!";
};
```

### Clases

```typescript
// Definición de una clase con propiedades y métodos
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
  }
}

const juan = new Persona("Juan", 25);
console.log(juan.saludar());
```

## Declaración de Variables en TypeScript

En TypeScript, las variables se pueden declarar utilizando las palabras clave `let` o `const`. La elección de la palabra clave depende del alcance y la mutabilidad de la variable.

- **let**: Declara una variable con alcance de bloque y permite la reasignación.
- **const**: Declara una variable con alcance de bloque y no permite la reasignación.

### Ejemplos de Declaración de Variables

```typescript
// Declaración de variables utilizando let
let edad: number = 25;
edad = 30; // Reasignación permitida

// Declaración de variables utilizando const
const PI: number = 3.1416;
// PI = 3.14; // Reasignación no permitida
```

## Recursos Adicionales para Aprender TypeScript

### Recursos en Español

- [Breve Intro a typescript](https://github.com/vanessamarely/typescript-talk)
- [Introducción a TypeScript](https://docs.microsoft.com/es-es/learn/modules/typescript-get-started/)

### Videos

- [Curso de TypeScript para principiantes](https://youtu.be/e45Yhgh4INc) por [Dominicode](https://www.youtube.com/c/DominiCode/)

### Recursos en Inglés

- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Learn TypeScript – The Ultimate Beginners Guide](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)

### Videos

- [TypeScript Course for Beginners](https://youtu.be/BwuLxPH8IDs) por [Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)
