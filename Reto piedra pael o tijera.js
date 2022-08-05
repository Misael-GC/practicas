/* Pasos
1 - generar variables piedra, papel, tijera 
2- crear una logica de validación, quien gana a quien y regresar si ganaste o perdiste 
3- la encapsulas en una función 
4- llamas la funcion con tu parametro */

var papel = 1;
var tijera = 2;
var piedra= 3;

function juego (usuario, compu)
{ // ganas 
    if (usuario ==  papel &&  compu == piedra)
    {
        console.log(" papel cubre roca (Ganaste :o)");
    }

    else if ( usuario == tijera   &&  compu == papel)
    {
        console.log("tijera corta papel (Ganaste :) )");
    }

     else if (usuario ==  piedra &&  compu == tijera)
    {
        console.log("roca rompe tijera (Ganaste XD)")
    }
    // pierdes
    else if  (usuario == papel  && compu ==  tijera)
    {
        console.log(" tijeras corta papel (Perdiste :,v)");
    }

    else if ( usuario == tijera && compu == piedra)
    {
        console.log("roca rompe tijeras (Perdiste :()");
    }

     else if (usuario == piedra && compu == papel)
    {
        console.log("papel cubre piedra (Perdiste >:v)")
    }
    else if(usuario == compu)
    {
        console.log("empate");
    }
    // si colocas un numero diferente a 1,2,3 o colocas los mismos en usuario y cumpu
    else
    {
        console.log("Try again/ Trata de nuevo :|");
    }
}

juego(1,2); /* Solo puedes poner 1, 2 y 3 para usuario y compu, si eres rebelde 
            y quieres poner otro numero, vamos intentalo */


            var numero = 1;
            var resultado = numero === 1 ? "soy 1" : "no soy otro"; //Mi reto
            console.log(resultado);

            //Simplificarlo más:

            var numero = 1;
            var resultado = numero === 1 ? "soy 1" : "no soy otro"; //Mi reto
            console.log(resultado);


            var papel = 0;
            var tijera = 1;
            var piedra= 2;
            var usuario = prompt("Elige papel con (0), tijera con (1), o roca con (2)"); 
            var compu = Math.floor((Math.random() * (2-0+1))+0); // operación de aleatorio

            function juego (usuario, compu){
                var resultado = usuario == 0 && compu == 2  ?  console.log("WIN"):
                                usuario == 1 && compu == 0 ? console.log("WIN"):
                                usuario == 2 && compu == 1 ? console.log("WIN"):
                                usuario == 2 && compu == 0 ?  console.log("lost"):
                                usuario == 1 && compu == 2 ? console.log("lost"):
                                usuario == 0 && compu == 1 ? console.log("lost"):
                                console.log("try again ¯|_(ツ)_|¯");
                //var resultado = usuario == compu ? console.log("try again ¯\_(ツ)_/¯") : console.log("(o) (o)");
            }
            juego(usuario, compu);
            