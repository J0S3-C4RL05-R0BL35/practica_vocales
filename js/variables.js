
//Lista de personajes segun el nivel
export const nivel1 =['pez','flor'];
export const nivel2 =['dona','gato','moto','pato','perro','rana','oso','cerdo','leon','sopa','taza','casa','barco','avion'];
export const nivel3 =['conejo','jirafa','ballena'];
export const nivelTodo =['dona','gato','moto','pato','perro','rana','auto','oso','cerdo','conejo','pez','leon','jirafa','sopa','taza','flor','casa','barco','avion','ballena','pulpo'];

export const divDibujo = document.querySelector('.dibujo');
export const divContent = document.querySelector('.content-juego');
export const divRespuesta = document.querySelector('.respuesta');

//utilizado para renombrar clases
export const abc = ['a','b','c','d','e','f'];

export class ExpVar{
    constructor(){
        //cambio de personaje
        let cambioPersonaje = 0;
        // const divPregunta = document.querySelector('.pregunta');
        let resultadoPersonaje = nivel1[cambioPersonaje];
        
    }
}

// //cambio de personaje
// export let cambioPersonaje = 0;
// // const divPregunta = document.querySelector('.pregunta');
// export let resultadoPersonaje = nivel1[cambioPersonaje];