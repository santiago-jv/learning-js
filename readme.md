# Conceptos básicos de Javascript
Lo primero (y no tan importante) es que entiendas que las intruccines de Javascript no requieren de un punto y coma al final, esto es opcional. Sin embargo, recuerda mantener las buenas prácticas como programador.

# Diferencia entre Javascript y ECMAScript
Durante tu aprendizaje con el lenguaje, seguramente te encontraste con el término "ECMAScript" y quizás en su momento te hallabas confundido por no conocer la relación que tiene con Javascript. Revisa rápidamente la siguiente información que explica a detalle que es ECMAScript y por qué se relaciona con Javascript: https://programacionymas.com/blog/diferencia-entre-javascript-y-ecmascript
## La consola 
La consola que provee Javascript tiene muchas funcionalidades que puedes consultar en la documentación MDN pero en general, ayuda con la depuración de tu código. https://developer.mozilla.org/es/docs/Web/API/Console
    
    console.log("Este es un mensaje de prueba");
## Tipos de datos en Javascript
- "Cadena de texto" -> String
- 'Cadena de texto'-> String
- true  -> Boolean
- false -> Boolean
- 12 -> Number
- 12.4 -> Number 
- BigInt(1234567890123456789012345678901234567890) -> BigInt
- Symbol('Valor inmutable') -> Symbol
- undefined -> asignado automáticamente por el lenguaje
- null -> asignado intencionalmente por el programador
Más sobre los tipos de datos aquí https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures

## Formas de crear una 'variable' en Javascript
    const constante = 12
    let variable = 23 
    var x = 12
    una variable declarada por var, puede volver a ser declarada con el mismo nombre y no pasaría nada. En cambio, con let no sucedería lo mismo. 
    

## Funciones en Javascript
Las funciones suelen llevar un nombre para identificarlas. Sin embargo, también puedes crear funciones sin necesidad de asignarles un nombre. Estas reciben el nombre de funciones anónimas.

    function mandarMensaje(){
        console.log("Hello")

    }
    mandarMensaje() 

    function mandarMensajeA(nombre) {
        console.log("Hola " + nombre)
    }

    mandarMensajeA("Santiago")

    const anonima = function () {
        console.log("Hola")
    }
    anonima()
    
## Funciones flecha en Javascript
    const anonima =  ()=> {
        console.log("Hola")
    }
    anonima()
    

# Diferencias entre las Funciones flecha y las  regulares
https://es.stackoverflow.com/questions/101927/diferencia-entre-arrow-function-y-function-normal-al-llamar-al-m%C3%A9todo-subscribe
## Funciones de invocación inmediata (Immediately Invoked Function Expression)


    (function() {
        //content
    })();
## Clases en Javascript
[Por qué hay clases en Javascript?](https://es.stackoverflow.com/questions/28187/por-qu%C3%A9-no-hay-clases-en-javascript/28215)
    
    class Perro {

        constructor(nombre) {
            this.nombre = nombre
        }


    const perro = new Perro("Doggy")
## El Event Loop en Javascript

[La Guía Definitiva del Event Loop en JS (async, promises, callbacks, render) - Antonio Sarosi](https://youtu.be/dX2lThXc0p4)

Consulta más acerca del lenguaje aquí https://developer.mozilla.org/es/docs/Web/JavaScript




