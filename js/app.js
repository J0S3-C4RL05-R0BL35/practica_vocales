
//Lista de personajes segun el nivel
const nivel1 =['pez','flor'];
const nivel2 =['dona','gato','moto','pato','perro','rana','oso','cerdo','leon','sopa','taza','casa','barco'];
const nivel3 =['conejo','jirafa','ballena','avion'];
const nivelTodo =['dona','gato','moto','pato','perro','rana','auto','oso','cerdo','conejo','pez','leon','jirafa','sopa','taza','flor','casa','barco','avion','ballena','pulpo'];
const divDibujo = document.querySelector('.dibujo');
const divContent = document.querySelector('.content-juego');
const divRespuesta = document.querySelector('.respuesta');
const divNivel1 = document.querySelector('.nivel1');
const divNivel2 = document.querySelector('.nivel2');
const divNivel3 = document.querySelector('.nivel3');


//cambio de personaje
let cambioPersonaje = 0;

//niveles
let nivel =1;

let resultadoPersonaje = nivelPersonaje();

let contadorNivel = 0;

function nivelPersonaje(){
    if (nivel == 1){
    let resultado = nivel1[cambioPersonaje];
    return resultado;
    }else if(nivel == 2){
    let resultado = nivel2[cambioPersonaje];
    return resultado;
    }else if(nivel == 3){
    let resultado = nivel3[cambioPersonaje];
    return resultado;
}
}

//utilizado para renombrar clases
export const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'];


//agrega la clase.
let aumentador = 0;

//permite contar entre las clases.
let contador = 0;


window.onload = () => {
    cargarImagen();
}

//Eventos
document.addEventListener('click', contestando);

//cambia el nivel en base al click
divNivel1.addEventListener('click', cambiarNivel);
divNivel2.addEventListener('click', cambiarNivel);
divNivel3.addEventListener('click', cambiarNivel);


//funciones

//hacer cambio automatico de nivel al acabar las preguntas.



//perimite cambiar el nivel al dar click en el boton seleccionado
function cambiarNivel(e){
    if(e.target.className === 'nivel1'){
        nivel = 1;
        divNivel1.classList.add('seleccionado');
        divNivel2.classList.remove('seleccionado');
        divNivel3.classList.remove('seleccionado');
        reiniciar()
    }
    if(e.target.className === 'nivel2'){
        nivel = 2;
        divNivel2.classList.add('seleccionado');
        divNivel1.classList.remove('seleccionado');
        divNivel3.classList.remove('seleccionado');
        reiniciar()
    }
    if(e.target.className === 'nivel3'){
        nivel = 3;
        divNivel3.classList.add('seleccionado');
        divNivel1.classList.remove('seleccionado');
        divNivel2.classList.remove('seleccionado');
        reiniciar()
    }
}


//reinica todo el nivel
function reiniciar(){
    cambioPersonaje = 0;
    contadorNivel = 0;
    aumentador = 0;
    contador = 0;
    cargarImagen();
    return nivel;
}

//carga la imagen del personaje.
function cargarImagen(){
    console.log(aumentador)
    // resultadoPersonaje = nivel3[cambioPersonaje];
    let resultadoPersonaje = nivelPersonaje();
    borrarPersonaje();
    const personaje = document.createElement('img');
    personaje.src=`./img/personajes/${resultadoPersonaje}.jpg`;
    personaje.height='250';
    personaje.alt=resultadoPersonaje;
    personaje.classList.add('personajes');
    divDibujo.appendChild(personaje);
    imprimirNombre();

}

//borrar el personaje para iniciar uno nuevo
function borrarPersonaje(){
    const imagenes = document.querySelectorAll('.personajes');
    const pregunta = document.querySelectorAll('.pregunta');

    if(imagenes){
        imagenes.forEach(imagen => {
            imagen.remove();
        });
        pregunta.forEach(p => {
            p.remove();
        });
        
        contador = 0;
    }
}

//imprime el div contenedor y la pregunta por letra separada.
function imprimirNombre(){
    // resultadoPersonaje = nivel3[cambioPersonaje];
    let resultadoPersonaje = nivelPersonaje();
    //Se crea el contenedor
    const divPregunta = document.createElement('div');
    divPregunta.classList.add('pregunta');
    divContent.insertBefore(divPregunta,divRespuesta);
    
    //revisa si es una vocal
    for(let i = 0; resultadoPersonaje.length > i; i++){
        if(resultadoPersonaje[i] == 'a' || resultadoPersonaje[i] == 'e' || resultadoPersonaje[i] == 'i' || resultadoPersonaje[i] == 'o' || resultadoPersonaje[i] == 'u'){
            const parrafo = document.createElement('p');
        parrafo.innerText=resultadoPersonaje[i];
        parrafo.classList.add('oculto');
        parrafo.classList.add(`${abc[aumentador]}`)
        divPregunta.appendChild(parrafo);
        aumentador++;
        contadorNivel++;
    }else{
        //si no es vocal aplica la clase transparente.
        const parrafo = document.createElement('p');
        parrafo.innerText=resultadoPersonaje[i];
        parrafo.classList.add('transparente');
        divPregunta.appendChild(parrafo);
    }
}
}


function contestando(e){
    //comparar si el valor es igual a la clase
    const clasePregunta = document.querySelectorAll('.oculto');
    let letra = clasePregunta[contador].className;
    console.log(letra)
    //compara el contenido del objeto click vs con contenido de la clase que esta en turmo
    //asi permite comparar solo ese parrafo
    if (e.target.textContent == clasePregunta[contador].textContent){
        //selecciona dinamicamente el selector
        const cambioClasePregunta = document.querySelector(`.${letra[7]}`);
        cambioClasePregunta.classList.add('mostrar');
        contador++;
        palabraCompleta();
    }else{
        //permite marcar el error 
        e.target.classList.add('error');
        setTimeout(()=>{  
            document.querySelectorAll('.error').forEach(clase =>{
                clase.classList.remove('error');
            })         
        },1000);
    } 
}

//aparece el resto de las letras si todas las preguntas son correctas.
function palabraCompleta(){
    if(contador === contadorNivel){
        //se trae todos los elementos pero en un array
        const mostrarTransparente = document.querySelectorAll('.transparente');
        //recorre el arrar de selectorall para agregar de uno por uno la clase.
        setTimeout(()=>{
            //Recorre el resultado del array para agregar la clase
            mostrarTransparente.forEach(elemento => {
                elemento.classList.add('mostrar');
                puntos();
            }); 
        },1000);
        setTimeout(()=>{
            cargarImagen();
        },2000);
        contadorNivel = 0;
        cambioPersonaje++;
        if(cambioPersonaje === nivel1.length){
            nivel = 2;
            divNivel2.classList.add('seleccionado');
            divNivel1.classList.remove('seleccionado');
            divNivel3.classList.remove('seleccionado');
            return
        }
        if(cambioPersonaje === nivel2.length){
            nivel = 3;
            divNivel3.classList.add('seleccionado');
            divNivel1.classList.remove('seleccionado');
            divNivel2.classList.remove('seleccionado');
            return
        }
    }
    
}

function puntos(){
    const contadorPuntos = document.querySelector('.contador');
    contadorPuntos.innerText ++;
}