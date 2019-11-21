# Javascript para gente objetosa

Para ejecutar estos ejemplos es necesario tener instalado [NodeJS](https://nodejs.org/en/). Recomendamos también utilizar algún editor de texto que se integre bien con Javascript, como [Visual Studio Code](https://code.visualstudio.com/).

## Instalación del proyecto

```
npm install
```

El proyecto tiene dos dependencias, [jest](https://jestjs.io/) para correr los tests y [node-repl](https://github.com/maxogden/node-repl) para poder jugar con el código.

## Uso

```shell
# Ejecutar los tests
npm test 

# Abrir un REPL
npm start
```

## Ejercicios

### pepita

Tienen andando: una clase, un test, y una página HTML en la que se usa la clase. El código lo prueban como se explicó antes, para ver el HTML simplemente hacen doble clic y lo usan desde el navegador. 

:warning: Cuando cambien algo recuerden recargar la página para que se refleje lo nuevo.

### flotas-de-rodados

En principio este es puro Javascript, sin HTML.

## Las cuatro diferencias entre Wollok y JavaScript para definir una clase
1. `this` en lugar de `self`
1. no va la palabra `method`
1. la inicialización de variables se hace dentro del constructor
1. no pueden coincidir nombres de variables y métodos

## Equivalencias respecto de las listas

| En Wollok | En JavaScript |  
| --- | --- | 
| `lista.get(n)` | `lista[n]` |
| `lista.size()` | `lista.length` |
| `filter` | `filter` |
| `map` | `map` |
| `forEach` | `forEach` |
| `all` | `every` |
| `find` | `find` |
| `count` | hay que combinar `filter` con `length` |
| `sum` | hay que hacerlo "a mano" p.ej. usando `forEach` |

## Más info
<https://web-ciu-programacion.github.io/site/javascript/javascript-intro.html>
