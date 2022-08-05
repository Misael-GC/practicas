// 
/* Para hacer el algoritmo de la deflactacion por año, debes de declarar  e inicialzar
     varables de diciembre de los diferentes años, despues hacer una condicional donde
      si es igual a un año x le de el valor de acuerdo a lo que el usuario quiera que sea el año base 
     y despues pueda ejectar el calculo, intentalo en tu dia libre */

var usuario =prompt("Cual es el año?")    
var anio2015 = 2015;
var anio2016 = 2016;
var anio2017 = 2017;
var anio2018 = 2018;
var anio2019 = 2019;
var anio2020 = 2020;
var anioBase;
//////
function juego(usuario)
{  
    switch(true)
    {
        case usuario == anio2015:
           annio = "2015 ";
           anioBase = 89.0468;
           console.log("vamo bien");
           break; 
        case usuario == anio2016:
            annio = "2016 ";
            anioBase = 92.0390;
            console.log("vamos bien");
            break; 
        case usuario == anio2017:
            annio = "2017 ";
            anioBase = 98.2729;
            console.log("ahora a pensar en el calculo");
            break; 
        case usuario == anio2018:
            annio = "2018 ";
            anioBase = 103.02;
            console.log("Una division");
            break;
        case usuario == anio2019:
            annio = "2019 ";
            anioBase = 105.9340;
            console.log("Que afecte a todo");
            break; 
        case usuario == anio2020:
            annio = "2020 ";
            anioBase = 109.271;
            console.log("8O");
            break;            
       default:
           alert("Trata de nuevo, tal vez te equivocaste")
    }
}

juego(usuario);

////////////
