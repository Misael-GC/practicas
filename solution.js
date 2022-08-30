const tiposDeSuscripcion = {
      basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
      free:'Solo puedes tomar los cursos gratis',
      expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
      expertPlus:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};




function getSuscriptionType(suscripcion){
    if(tiposDeSuscripcion[suscripcion]){
        console.log(tiposDeSuscripcion[suscripcion]);
        return;
    }
    console.warn('Not Found')
}

getSuscriptionType('free')
