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

const realizarCotizacion = ()=> {
    if (datosCompletos()) {//realizar la cotización
        const seguro = new Cotizador(servicio.value, ubicacion.value, necesidad.value, CostoBase)
              importe.innerText = seguro.cotizar()
              btnEnviar.classList.remove("ocultar")
              recuadro.classList.remove("ocultar")
    } else {
        alert("⛔️ Completa todos los campos.")
    }
}

const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        servicio: servicio[servicio.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        necesidad: necesidad.value,
        poliza: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("✅ Presupuesto enviado a su casilla de correo.")
    btnEnviar.classList.add("ocultar")
    recuadro.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)