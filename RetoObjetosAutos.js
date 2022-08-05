////777777777///777777//////////////////////////////////////////////////////////////////
// inicializo variables 
var autos = [];
var cantidadAutos= 0;
var cantRegistrados = 0;

// se crea la funcion contructora
function carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//se solicita al usuario cuantos autos se van a registrar 
cantidadAutos = prompt("Cuantos autos bro?");

//se crea el ciclo con su condición, while be truth ejecuta
while(cantRegistrados < cantidadAutos){
        //se definen las variables con el scope local, solo el loop los puede ver o leer
    var marca = prompt("marca: ");
    var modelo = prompt("modelo: ");
    var annio = prompt("annio: ");

        //se registran las variables de scope local a la función constructora 
    var autoNuevo = new carro(marca, modelo, annio);

        //se agrega el auto al arreglo de autos 
    autos.unshift(autoNuevo);

    // incrementa la cantidad de autos de 1 en 1 
    cantRegistrados++;

}

console.log(autos);

/* Comentarios de la banda */

//////////////////////////////////////////////////////////////////////////////////////////////////
//Otra solucion

// inicializo variables 
var autos = [];
var cantidadAutos= 0;

// se crea la funcion contructora
function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//se solicita al usuario cuantos autos se van a registrar 
cantidadAutos = prompt("Cuantos autos bro?");

//se crea el ciclo for 
for( var cantRegistrados = 0; cantRegistrados < cantidadAutos; cantRegistrados++)
{
    //se definen las variables con el scope local, solo el loop los puede ver o leer
    var marca = prompt("marca: ");
    var modelo = prompt("modelo: ");
    var annio = prompt("annio: ");

    //se registran las variables de scope local a la función constructora 
    var autoNuevo = new Auto(marca, modelo, annio);

    //se agrega el auto al arreglo de autos 
    autos.push(autoNuevo);
}

console.log(autos);
//////////////////////////////////////////////////////////////////////////////////////////////////
//Uniendo codigo 
var autos = [];
var cantAutos=  prompt("Cuantos autos bro?");

function automovil(marca, model, year)
{
    this.marca = marca;
    this.modelo = model;
    this.annio = year;
  }


  for(var registrados = 0 ; registrados < cantAutos ; registrados++){
    var marca = prompt("Ingresa la marca del auto");
    var model = prompt("Ingresa el modelo del auto");
    var year = prompt("Ingresa el año del auto");
    autos.push(new automovil(marca, model, year));
  }
  
  for(var i = 0 ; i < autos.length ; i++)
  {
    console.log(autos[i]);
  }
///////////////////////////////////////////////////////////////////////////////////////////////////
// Codigo de aleatorio
var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []
var cantAutos=  prompt("Cuantos autos bro?");

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (var registrados = 0 ; registrados < cantAutos ; registrados++)
    cars.push(new Car(brands[Math.floor(registrados/10)], `Serie ${registrados % 10}`, 1999 + registrados % 10))

    for(var i = 0 ; i < cars.length ; i++)
    {
      console.log(cars[i]);
    }
    