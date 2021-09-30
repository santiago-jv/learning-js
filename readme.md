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

## Funciones en javascript
    function mandarMensaje(){
        console.log("Hola")

    }
    mandarMensaje() 

    function mandarMensajeA(nombre) {
        console.log("Hola "+nombre)
    }

    mandarMensajeA("David ome")

    const anonimaa = function () {
        console.log("Hola")
    }
    anonimaa()
    
## Funciones flecha
    const anonima =  ()=> {
        console.log("Hola")
    }
    anonima()
    


## Funciones de inmediata invocación

    (function() {
        //content
    })();
## Clases en js 
    class Perro {

        constructor(nombre) {
            this.nombre = nombre
        }


    const perro = new Perro("Doggy")





