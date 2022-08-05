var usuario =prompt("Cual es el valor que quieres deflactar?"); //conecta
var efectivo = parseInt(usuario); //conecta
var usuario2 =prompt("Cual es el año base? 2015, 2016, 2017, 2018, 2019, 2020?");  //conecta2
var annio = prompt("Elige algun año siguiente al año base <br>" + " 1 = 2015, 2 = 2016, 3 = 2017, 4 = 2018, 5 = 2019, 6 = 2020");
var anioBase = parseInt(usuario2); //conecta2
var inpc_b2015= 89.0468180;
var inpc_b2016= 92.0390350;
var inpc_b2017= 98.2728830;
var inpc_b2018 = 103.02;
var inpc_b2019 = 105.934;
var inpc_b2020 = 109.271;
var efectivo_final;

if(anioBase==2015)
{
    if(annio ==1)
    {
        annio = "2015 ";
        efectivo_final = efectivo *(inpc_b2015/inpc_b2015);

    }
    else if(annio==2)
    {
        annio= "2016";
        efectivo_final = efectivo * (inpc_b2015/inpc_b2016);
    }
    else if(annio==3)
    {
        annio= "2017";
        efectivo_final = efectivo * (inpc_b2015/inpc_b2017);
    }
    else if(annio== 4)
    {
        annio= "2018";
        efectivo_final = efectivo * (inpc_b2015/inpc_b2018);
    }
    else if(annio== 5)
    {
        annio= "2019";
        efectivo_final = efectivo * (inpc_b2015/inpc_b2019);
    }
    else if(annio== 6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2015/inpc_b2020);
    }    
}
else if(anioBase==2016)
{
    if(annio ==2)
    {
        annio = "2016";
        efectivo_final = efectivo *(inpc_b2016/inpc_b2016);
    }
    else if(annio==3)
    {
        annio= "2017";
        efectivo_final = efectivo * (inpc_b2016/inpc_b2017);
    }
    else if(annio== 4)
    {
        annio= "2018";
        efectivo_final = efectivo * (inpc_b2016/inpc_b2018);
    }
    else if(annio== 5)
    {
        annio= "2019";
        efectivo_final = efectivo * (inpc_b2016/inpc_b2019);
    }
    else if(annio==6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2016/inpc_b2020);
    }
}

else if(anioBase==2017)
{
     if(annio==3)
    {
        annio= "2017";
        efectivo_final = efectivo * (inpc_b2017/inpc_b2017);
    }
    else if(annio== 4)
    {
        annio= "2018";
        efectivo_final = efectivo * (inpc_b2017/inpc_b2018);
    }
    else if(annio== 5)
    {
        annio= "2019";
        efectivo_final = efectivo * (inpc_b2017/inpc_b2019);
    }
    else if(annio==6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2017/inpc_b2020);
    }
}

else if(anioBase==2018)
{

     if(annio== 4)
    {
        annio= "2018";
        efectivo_final = efectivo * (inpc_b2018/inpc_b2018);
    }
    else if(annio== 5)
    {
        annio= "2019";
        efectivo_final = efectivo * (inpc_b2018/inpc_b2019);
    }
    else if(annio==6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2018/inpc_b2020);
    }
}

else if(anioBase==2019)
{

     if(annio== 5)
    {
        annio= "2019";
        efectivo_final = efectivo * (inpc_b2019/inpc_b2019);
    }
    else if(annio==6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2019/inpc_b2020);
    }
}

else if(anioBase==2020)
{

     if(annio==6)
    {
        annio= "2020";
        efectivo_final = efectivo * (inpc_b2019/inpc_b2020);
    }
}

else
    {
        alert("Try again/ Trata de nuevo :|");
    }
efectivo_final=efectivo_final.toFixed(3); // el toFixed solo me va a dar 3 decimales 
document.write("Tus " + efectivo + " pesos mexicanos en " + annio + " es <strong> " + efectivo_final + " pesos mexicanos </strong>");
document.write("<br> Advertencia: esta deflactación es en base al año "+ anioBase +", de acuerdo al año base puede variar la deflactacion");
document.write("<br> Data confiable crack");
