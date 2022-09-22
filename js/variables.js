//CONEXION CON EL DOM JS
const servicio = document.querySelector("#servicio")
const ubicacion = document.querySelector("#ubicacion")
const necesidad = document.querySelector("#necesidad")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")
const mail = document.querySelector("#mail")
const recuadro = document.querySelector("#recuadro_presupuesto")

//BASE DE DATOS FICTICIA 
const datosServicios = [{tipo: 'Reparación', factor: 600},
                        {tipo: 'Mantenimiento', factor: 200},
                        {tipo: 'Puesta en marcha', factor: 300},
                        {tipo: 'Instalación', factor: 500},]
                        // {tipo: 'Oficina', factor: 2.39},
                        // {tipo: 'Local Comercial', factor: 1.41},
                        // {tipo: 'Depósito Logística', factor: 1.92}]

const datosUbicacion = [{tipo: 'Palma', factor: 0},
                        {tipo: 'Arenal, Marratxi, Magaluf', factor: 20},
                        {tipo: 'Algaida, Llucmajor, Sencelles, Binissalem, Bunyola', factor: 50},
                        {tipo: 'Arta, Alcudia, Pollensa, Soller', factor: 70},]

const datosNecesidad = [{tipo: 'Ordinario', factor: 0},
                        {tipo: 'Urgente', factor: 100},]


const CostoBase = 72.50