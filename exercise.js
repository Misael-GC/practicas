const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

const funcion = (nombre, apellido) => {
const completeName = nombre + apellido;
console.log(`${completeName} alias ${nickname}`)
}


funcion(name, lastname)

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
case "Free":
       console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}

if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion =="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion =='Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion =='ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
    console.log('Publiciidad')
}

tipoDeSuscripcion == 'Basic' ? console.log("Puedes tomar casi todos los cursos de Platzi durante un mes") :
tipoDeSuscripcion =="Free" ? console.log("Solo puedes tomar los cursos gratis") :
tipoDeSuscripcion == 'Expert' ? console.log("Puedes tomar casi todos los cursos de Platzi durante un año") :
tipoDeSuscripcion == 'ExpertPlus' ? console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"):
console.log('Not Found')

const suscripcion = [
    {
      name: "Basic",
      beneficio:'Puedes tomar casi todos los cursos de Platzi durante un mes'
    },
    {
      name: "Free",
      beneficio:'Solo puedes tomar los cursos gratis'
    },
    {
      name: "Expert",
      beneficio:'Puedes tomar casi todos los cursos de Platzi durante un año'
    },
    {
      name: "ExpertPlus",
      beneficio:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
    },
  ];



const sucripcionFound = suscripcion.find(item => item.name === 'Basic');
console.log(sucripcionFound);


let res = prompt('Pasame el resultado de 2 + 2')

if(res == 4){
  console.log('Yeah!!')
}else{
  alert('Try again');
  res = prompt('Pasame el resultado de 2 + 2');
}

var number = [1, 2, 3];

var myCar = {
  make: ['Ford', 'Tesla'],
  model: ['Mustang','S'],
  year: 1969
};

let carros = [
  {
    "color": "morado",
    "tipo": "minivan",
    "registroDia": new Date('2017-01-03'),
    "capacidad": 7
  },
  {
    "color": "rojo",
    "tipo": "camioneta",
    "registroDia": new Date('2018-03-03'),
    "capacidad": 5
  },
]

var number = [1, 2, 3];

function rta(array){
  console.log(array[0])
}

rta(number);


var car =[1, 2, 3]
const rta2= (array) =>{
   array.forEach(item => console.log(item));
}
// function rta2(array){
//   for(let i=0; i < number2.length-1; i++){
//     const element = number2[i];
//     console.log (element);
// }
// }

rta2(car);

rta(number);

var number2 = {nombre:'juan', annio:20, number:3};

function objects(obj) {
  return Object.entries(obj).forEach((item) => {
    console.log(item)
  })
 	}

 objects(number2);


