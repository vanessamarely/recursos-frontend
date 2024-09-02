# JavaScript

[🔙 Volver Recursos](https://github.com/vanessamarely/recursos-frontend/)

## Definición de JavaScript

JavaScript es un lenguaje de programación interpretado, orientado a objetos y dinámico. Es uno de los lenguajes más populares y ampliamente utilizados en el desarrollo web. JavaScript permite a los desarrolladores crear páginas web interactivas y dinámicas al manipular el contenido y el comportamiento de los elementos HTML.

## Conceptos Básicos de JavaScript

- **Sintaxis**: La sintaxis de JavaScript se basa en el uso de declaraciones, expresiones y operadores. Las declaraciones se utilizan para definir variables, funciones y estructuras de control de flujo.
- **Variables**: Las variables en JavaScript se utilizan para almacenar datos. Se pueden declarar utilizando las palabras clave `var`, `let` o `const`.
- **Funciones**: Las funciones son bloques de código reutilizables que realizan una tarea específica. Se pueden definir utilizando la palabra clave `function` o mediante funciones de flecha.
- **Eventos**: Los eventos son acciones que ocurren en una página web, como hacer clic en un botón o mover el ratón. JavaScript permite manejar estos eventos y realizar acciones en respuesta a ellos.

## Tipos de Datos en JavaScript

JavaScript tiene varios tipos de datos, incluyendo:

- **Números**: Representan valores numéricos, tanto enteros como decimales.
- **Cadenas de texto**: Representan secuencias de caracteres.
- **Booleanos**: Representan valores de verdad, `true` o `false`.
- **Arreglos**: Representan listas ordenadas de elementos.
- **Objetos**: Representan colecciones de pares clave-valor.
- **Nulos**: Representan la ausencia intencional de un valor.
- **Indefinidos**: Representan variables que no han sido asignadas a un valor.

## Sintaxis y Ejemplos de Código en JavaScript

### Declaración de Variables

```javascript
// Declaración de variables utilizando var, let y const
var nombre = "Juan";
let edad = 25;
const PI = 3.1416;
```

### Funciones

```javascript
// Definición de una función utilizando function
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Definición de una función utilizando una función de flecha
const despedir = (nombre) => {
  return "Adiós, " + nombre + "!";
};
```

### Manejo de Eventos

```javascript
// Manejo de eventos utilizando addEventListener
document.getElementById("miBoton").addEventListener("click", function() {
  alert("¡Has hecho clic en el botón!");
});
```

## Declaración de Variables en JavaScript

En JavaScript, las variables se pueden declarar utilizando las palabras clave `var`, `let` o `const`. La elección de la palabra clave depende del alcance y la mutabilidad de la variable.

- **var**: Declara una variable con alcance de función y permite la redeclaración.
- **let**: Declara una variable con alcance de bloque y no permite la redeclaración.
- **const**: Declara una variable con alcance de bloque y no permite la redeclaración ni la reasignación.

### Ejemplos de Declaración de Variables

```javascript
// Declaración de variables utilizando var
var nombre = "Juan";
var nombre = "Pedro"; // Redeclaración permitida

// Declaración de variables utilizando let
let edad = 25;
edad = 30; // Reasignación permitida
// let edad = 35; // Redeclaración no permitida

// Declaración de variables utilizando const
const PI = 3.1416;
// PI = 3.14; // Reasignación no permitida
// const PI = 3.14; // Redeclaración no permitida
```

## Recursos Adicionales para Aprender JavaScript

### Recursos en Español

- [MDN - JS](https://developer.mozilla.org/es/docs/Learn/JavaScript)
- [Algoritmos de JavaScript y Estructuras de Datos - freecodecamp](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/)
- [JavaScript.info](https://es.javascript.info/)
- [Introducción a JavaScript](https://lenguajejs.com/javascript/) por [@Manz](https://twitter.com/Manz)
- [clean-code-javascript](https://github.com/andersontr15/clean-code-javascript-es)
- [Los apuntes de Majo - Javascript](https://drive.google.com/open?id=11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o) por [Majo Ledesma - @MajoLedes](https://twitter.com/MajoLedes)
- [33-js-conceptos](https://github.com/adonismendozaperez/33-js-conceptos) por [adonismendozaperez](https://github.com/adonismendozaperez)
- [Asincronía en JavaScript](https://blog-voltadev.vercel.app/blog/asincronia-en-javascript) por [volta2016](https://github.com/volta2016)
- [Resumen fundamentos de JavaScript](https://github.com/volta2016/ECMASCRIPT) por [volta2016](https://github.com/volta2016)

### Quizzes

- [Teffcode's Quizzes](https://teffcode-community.github.io/quizzes/)

### Proyectos prácticos

- [40 proyectos de JavaScript para principiantes: Ideas fáciles para empezar a codificar en JS](https://www.freecodecamp.org/espanol/news/40-proyectos-de-javascript-para-principiantes-ideas-faciles-para-empezar-a-codificar-en-js/) por [Rafael D. Hernandez](https://www.freecodecamp.org/espanol/news/author/rafael/)

### Videos

- [CURSO DE PROGRAMACION con JAVASCRIPT desde cero](https://youtu.be/-rj-zxmdGHA) por [Carlos Azaustre](https://www.youtube.com/c/CarlosAzaustre)
- [Experimentos con Javascript](https://www.youtube.com/playlist?list=PLx5xbrpW6nXgaJfiZl5BuF31K3WxaTyFw) por [@Manz](https://twitter.com/Manz)
- [Retos de JavaScript 🤯](https://www.youtube.com/playlist?list=PLV8x_i1fqBw1QCcTOSq8F_pSQXVcUFmYA) por [Miguel Ángel Durán - midudev](https://www.youtube.com/c/midudev)

### Recursos en Inglés

- [MDN - JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [JavaScript Algorithms and Data Structures - freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [JavaScript.info](https://javascript.info/)
- [JavaScript](jsv9000.app) by [Andrew Dillon](https://github.com/Hopding/)
- [Learn JavaScript by Coding 7 Games](https://www.freecodecamp.org/news/learn-javascript-by-coding-7-games/)
- [You Don't Know JS Yet ](https://github.com/getify/You-Dont-Know-JS) by [Kyle Simpson](https://github.com/getify)
- [Learn JavaScript](https://learnjavascript.online/?utm_source=react-tutorial.app) by [Jad Joubran](https://jadjoubran.io/)
- [JavaScript Tutorials](https://www.codeanalogies.com/#javascript) by [Kevin](codeanalogies.com)
- [W3 school - Javascript]([https://www.w3schools.com/](https://www.w3schools.com/js/default.asp))
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) by [Oleksii Trekhleb](https://github.com/trekhleb)
- [33-js-concepts](https://github.com/leonardomso/33-js-concepts) by [leonardomso](https://github.com/leonardomso)
- [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript) by [ryanmcdermott](https://github.com/ryanmcdermott)
- [ES6-for-humans](https://github.com/metagrover/ES6-for-humans) by [metagrover](https://github.com/metagrover/)
- [JavaScript reference](https://devdocs.io/javascript/)

### Proyectos

- [50projects50days](https://github.com/bradtraversy/50projects50days) by [bradtraversy](https://github.com/bradtraversy)

### Videos

- [Javascript30](https://javascript30.com/) by [WesBos](https://wesbos.com/)
- [Learn JavaScript by Building 7 Games - Full Course](https://youtu.be/ec8vSKJuZTk) by [Ania Kubów](https://www.youtube.com/aniakubow)
- [JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=W6NZfCO5SIk) by [Programming with Mosh](https://www.youtube.com/c/programmingwithmosh)

### Exercises

- [Explore the JavaScript exercises](https://exercism.org/tracks/javascript/exercises) by [Exercism](https://exercism.org/)

### Questions

- [javascript-questions](https://github.com/lydiahallie/javascript-questions) by [lydiahallie](https://github.com/lydiahallie)
