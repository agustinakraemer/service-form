//CONEXION CON EL DOM JS
const servicio = document.querySelector("#servicio")
const ubicacion = document.querySelector("#ubicacion")
const necesidad = document.querySelector("#necesidad")
const zona = document.querySelector("#zona")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")
const mail = document.querySelector("#mail")
const recuadro = document.querySelector("#recuadro_presupuesto")
const form_before = document.querySelector("#form_before")

//BASE DE DATOS FICTICIA 
const datosServicios = [{tipo: 'Reparación', factor: 800},
                        {tipo: 'Mantenimiento', factor: 300},
                        {tipo: 'Puesta en marcha', factor: 400},
                        {tipo: 'Instalación', factor: 600},]

const datosUbicacion = [{tipo: 'Palma', factor: 0},
                        {tipo: 'Arenal, Marratxi, Magaluf', factor: 20},
                        {tipo: 'Algaida, Llucmajor, Sencelles, Binissalem, Bunyola', factor: 50},
                        {tipo: 'Arta, Alcudia, Pollensa, Soller', factor: 70},]

const datosNecesidad = [{tipo: 'Ordinario', factor: 0},
                        {tipo: 'Urgente', factor: 100},]

const datosZona = [{tipo: 'Palma', factor: 0},
                   {tipo: 'Arenal', factor: 0},
                   {tipo: 'Algaida', factor: 0},
                   {tipo: 'Llucmajor', factor: 0},
                   {tipo: 'Sencelles', factor: 0},
                   {tipo: 'Binissalem', factor: 0},
                   {tipo: 'Bunyola', factor: 0},
                   {tipo: 'Marratxi', factor: 0},
                   {tipo: 'Magaluf', factor: 0},
                   {tipo: 'Arta', factor: 0},
                   {tipo: 'Alcudia', factor: 0},
                   {tipo: 'Pollensa', factor: 0},
                   {tipo: 'Soller', factor: 0},
                   {tipo: 'Inca', factor: 0},
                   {tipo: 'Calvia', factor: 0},
                   {tipo: 'Andraxt', factor: 0},
                   {tipo: 'Esporles', factor: 0}]                        

const CostoBase = 72.60



const alerta = (mensaje, icono)=> {
    if (icono == "warning") {
        Swal.fire({ 
            title: mensaje,
            icon: icono,
            backdrop: true,
            iconColor:'rgb(189, 0, 0)',
            confirmButtonColor:'#253759',
            confirmButtonText: 'Aceptar',
            background: 'rgb(212, 212, 212)',
            stopKeydownPropagation: true,
            allowEscapeKey: false,
            allowEnterKey: false
        });
    } else {
        Swal.fire({ 
            title: mensaje,
            icon: icono,
            backdrop: true,
            iconColor:'green',
            confirmButtonColor:'#253759',
            confirmButtonText: 'Aceptar',
            background: 'rgb(212, 212, 212)',
            stopKeydownPropagation: true,
            allowEscapeKey: false,
            allowEnterKey: false
        }).then(function(){ 
            location.reload();
            btnEnviar.classList.add("ocultar")
            recuadro.classList.add("ocultar")
            form_before.classList.remove("ocultar")
            }
         );
    }
    
}