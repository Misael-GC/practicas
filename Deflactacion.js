//A QUI VOY A PONER UN DETECTOR DE DEFLACTACIÓN 
var usuario =prompt("Cual es el valor que quieres deflactar?") //conecta
    var annio = prompt("Elige tu annio\n1 es 2015, 2 es 2016,\n3 es 2017");
    var efectivo = parseInt(usuario); //conecta
    var inpc_b2015= 89.0468; //Quiero que este lo decida el usuario ????? En el futuro prometo hacerlo
    var efectivo_final;

    if (annio == 1)
    {
         annio = "2015 ";
          efectivo_final = efectivo *(inpc_b2015/89.0468);
    }
    else if(annio==2)
    {
      annio = "2016 ";
      efectivo_final = efectivo * (inpc_b2015/92.0390);
    }
    else
    {
      annio = "Kripton ";
      efectivo_final = 000000;
    }
     efectivo_final=efectivo_final.toFixed(3); // el toFixed solo me va a dar 3 decimales 
     document.write("tu efectivo en " + annio + "es <strong>" + efectivo_final + " pesos mexicanos </strong>");

     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Solucion pero con switch

     var usuario =prompt("Cual es el valor que quieres deflactar?") //conecta
     var annio = prompt("Elige tu annio\n1 es 2015, 2 es 2016, 3 es \n2017");
     var efectivo = parseInt(usuario); //conecta
     var inpc_b2015= 89.0468;
     var efectivo_final;
 

     switch(true)
     {
         case annio == 1:
            annio = "2015 ";
            efectivo_final = efectivo *(inpc_b2015/89.0468);
            break;
        case annio == 2:
            annio = "2016 ";
            efectivo_final = efectivo * (inpc_b2015/92.0390);
            break;
            case annio == 3:
                annio = "2017 ";
                efectivo_final = efectivo * (inpc_b2015/98.2729);
                break;    
        default:
            alert("Trata de nuevo, tal vez te equivocaste")

     }
     efectivo_final=efectivo_final.toFixed(3); // el toFixed solo me va a dar 3 decimales 
     document.write("tu efectivo en " + annio + "es <strong>" + efectivo_final + " pesos mexicanos </strong>");
     document.write("<br> Advertencia esta deflactacion es en base al año 2015 de acuerdo al año base puede variar la deflactacion");

     /*Ejecutalo en la pagina about:blank */
     /* Para hacer el algoritmo de la deflactacion por año, debes de declarar  e inicialzar
     varables de diciembre de los diferentes años, despues hacer una condicional donde
     si si es igual a un año x le de el valor de acuerdo a lo que el usuario quiera que sea el año base 
     y despues pueda ejectar el calculo, intentalo en tu dia libre */
     