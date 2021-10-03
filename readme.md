# Conceptos básicos de Javascript

## La consola 
    console.log(msg)
## Tipos de datos
- "Cadena de texto" -> String
- 'Cadena de texto'-> String
- true  -> Boolean
- false -> Boolean
- 12 -> Number
- 12.4 -> Number
- undefined
- NaN
- null

## Formas de crear una 'variable'
    const constante = 12
    let variable = 23 
    var x = 12
    una variable declarada por var, puede volver a ser declarada con el mismo nombre y no pasaría nada. En cambio, con let no sucedería lo mismo. 
    

## Funciones en javascript
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
    
## Funciones flecha
    const anonima =  ()=> {
        console.log("Hola")
    }
    anonima()
    


## Funciones de invocación inmediata (Immediately Invoked Function Expression)

    (function() {
        //content
    })();
## Clases en js 
    class Perro {

        constructor(nombre) {
            this.nombre = nombre
        }


    const perro = new Perro("Doggy")
## El Event Loop en Javascript

[La Guía Definitiva del Event Loop en JS (async, promises, callbacks, render) - Antonio Sarossi](https://youtu.be/dX2lThXc0p4)




