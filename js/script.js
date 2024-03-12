//Evento click
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     console.log('Enviando Formulario');
// });

//Eventos de los inputs y Text area

const datos = {
    nombre : '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar Formulario
    const { nombre, email, mensaje } = datos;
    
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
        
    }
    //Crear alerta de Enviado Correctamente
    mostrarEnvio('Su mensaje se a enviado correctamente');
    //Enviar Formulario

    console.log("Enviando formulario");
});

//-------Funciones---------
function leerTexto(e) {
    //console.log(e.target.value); 
    datos[e.target.id] = e.target.value 
    
    console.log(datos);
}
//Muestra error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);
    // eliminar alerta
    setTimeout(() => {
        error.remove()
    }, 5000);
}
//Mostrar aviso de envio de formulario

function mostrarEnvio(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('envio');

    formulario.appendChild(alerta);

    // eliminar alerta
    setTimeout(() => {
        alerta.remove()
    }, 5000);
}