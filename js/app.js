//Función cargar Combos SELECT
const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarCombo(servicio, datosServicios)
cargarCombo(ubicacion, datosUbicacion)
cargarCombo(necesidad, datosNecesidad)

const datosCompletos = ()=> {
    if (servicio.value !== "..." && ubicacion.value !== "..." && necesidad.value !== "..." && mail.value !== "") {
        return true
    } else {
        return false
    }
}

const cotizamos = ()=> {
    const ppto = new Cotizador(servicio.value, ubicacion.value, necesidad.value, CostoBase)
        importe.innerText = ppto.cotizar()
        btnEnviar.classList.remove("ocultar")
        recuadro.classList.remove("ocultar")
}


const realizarCotizacion = ()=> {
    datosCompletos() ? cotizamos() : alerta("Completa todos los campos.","warning")
}

const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        servicio: servicio[servicio.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        necesidad: necesidad.value,
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alerta("Presupuesto enviado a su casilla de correo.", "success")
    btnEnviar.classList.add("ocultar")
    recuadro.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)