# Conceptos básicos de Javascript

## La consola 
    console.log(msg)
## Tipos de datos
- "Cadena de texto" -> String
- 'Cadena de texto'-> String
- `Template strings (lueguito se habla de esto xd)` -> String
- true  -> Boolean
- false -> Boolean
- 12 -> Number
- 12.4 -> Number
- undefined
- NaN
- null
## Formas de crear una 'variable' (yo le diría espacio en memoria xd)
const constante = 12
let variable = 23 

## funciones en javascript

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
const anonima2 = (nombre) => {
    console.log("Hola " + nombre)

}
anonima2("Viena ome")

## Clases en js 

class Perro {

    constructor(nombre) {
        this.nombre = nombre
    }
}

const perro = new Perro("no se")





