/* const cargarCombo = async ()=> {
    debugger
    try {
        const response = await fetch(URL) 
        const selectJSON1 = await response[1].json()
        servicios = selectJSON1
        servicios.forEach(elemento => {
                select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
            })
    } catch (error) {
        console.error("No existen elementos en el array.")
    } finally {
        
    } 
}  */
//Función cargar Combos SELECT
 const cargarCombo = async (select, url)=> {
    try {
        const respuesta = await fetch(url) 
        const respuestaData = await respuesta.json()
        servicios = respuestaData
        servicios.forEach(elemento => {
                select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
            })
    } catch (error) {
        console.error("No existen elementos en el array.")
    } finally {
        servicios
    } 
} 
cargarCombo(servicio, URLser)
cargarCombo(ubicacion, URLub)
cargarCombo(necesidad, URLne)

const datosCompletos = ()=> {
    if (servicio.value !== "..." && ubicacion.value !== "..." && necesidad.value !== "..." && mail.value !== "") {
        return true
    } else {
        return false
    }
}
const loading = ()=> `<span class="loader"></span>`

const cotizamos = ()=> {
    btnCotizar.innerHTML = loading()
        setTimeout(() => {
            const ppto = new Cotizador(servicio.value, ubicacion.value, necesidad.value, CostoBase)
                importe.innerText = ppto.cotizar()
                btnEnviar.classList.remove("ocultar")
                recuadro.classList.remove("ocultar")
                form_before.classList.add("ocultar")
        }, 2000);
}


const realizarCotizacion = ()=> {
    datosCompletos() ? cotizamos() : alerta("Completa todos los campos.","warning")
}

const enviarPorEmail = ()=> {
    btnEnviar.innerHTML = loading()
    setTimeout(() => {
        const cotizacion = {
            fechaCotizacion: new Date().toLocaleString(),
            servicio: servicio[servicio.selectedIndex].text,
            ubicacion: ubicacion[ubicacion.selectedIndex].text,
            necesidad: necesidad.value,
        }
        localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
        alerta("Presupuesto enviado a su casilla de correo.", "success")
    }, 2000);
    
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)

/* const mostrarSelect = (contenido)=> {
    const{tipo, factor} = contenido
    return `<option value="${factor}">${tipo}</option>`
}

const cargarContenido = async (select, url)=> {
    try {
        const respuesta = await fetch(url) 
        const respuestaData = await respuesta.json()
            console.table(respuestaData)
            select = respuestaData
            servicios.forEach(contenido =>{
                servicio.innerHTML = const{tipo, factor} = contenido
                return `<option value="${factor}">${tipo}</option>`
            })
    } catch (error) {
        
    } finally {
        servicio.innerHTML = mostrarSelect(elemento)
    }
}

cargarContenido(servicio, URLservicio)
 */