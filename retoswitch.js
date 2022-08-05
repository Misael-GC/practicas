/* DIvide un gran problema en problemas pequeños 
Pasos
1 - generar variables piedra, papel, tijera 
2- crear una logica de validación, quien gana a quien  (switch)
3- la encapsulas en una función 
4- llamas la funcion con tus parametros 
    lo ejecutas en el navegador para saber si ganaste o perdiste
5- Ahora generamos una "var usuario" pero que este sea capaz de ingresar datos,
    para eso necesitamos "prompt", la var usuario lo agregamos como parametro de la funcion 
6- Por último para que la compu escoja su variable, primero
    generamos la "var compu" ahora le asignas la operación de aleatorio para una mejor explicacion te recomiendo
    ver el curso gratis de programacion basica
    en resumen esta es la ecuacion de aleatorio: Math.floor((Math.random() * (max - min + 1)) + min);
    la var compu  lo agregamos en el parametro de la función */

var papel = 0;
var tijera = 1;
var piedra= 2;
var usuario = prompt("Elige papel con (0), tijera con (1), o roca con (2)"); 
var compu = Math.floor((Math.random() * (2-0+1))+0); // operación de aleatorio

function juego (usuario, compu)
{
    switch(true)
    {
        case usuario ==  0 &&  compu == 2:
            console.log(" papel cubre roca (Ganaste :o)");
            break;
        case usuario == 1   &&  compu == 0:
            console.log("tijera corta papel (Ganaste :) )");
            break;
        case usuario ==  2 &&  compu == 1:
            console.log("roca rompe tijera (Ganaste XD)");
            break;
        case usuario == 0  && compu ==  1:
            console.log(" tijeras corta papel (Perdiste :,v)");
            break;
        case usuario == 1 && compu == 2:
            console.log("roca rompe tijeras (Perdiste :()");
            break;
        case usuario == 2 && compu == 0:
            console.log("papel cubre piedra (Perdiste >:v)");
            break;
        case usuario == compu:
            console.log("Empate, try again bro, ctrl + r o F5 ");
            break;
        default:
            console.log("Try again/ Trata de nuevo, ctrl + r o F5 :|");
    }
}
juego(usuario, compu); /* Solo puedes poner 1, 2 y 3 para usuario y compu, si eres rebelde 
            y quieres poner otro numero, vamos intentalo */




/* Aqui esta pero en lugar denumeros en los switch son las letras, el original sin cambio */





