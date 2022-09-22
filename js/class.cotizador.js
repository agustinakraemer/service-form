class Cotizador {
    constructor(factorNecesidad, factorServicio, factorUbicacion, factorBase) {
        this.factorNecesidad = parseInt(factorNecesidad)
        this.factorSr = parseFloat(factorServicio)
        this.factorUb = parseFloat(factorUbicacion)
        this.factorBase = parseFloat(factorBase)
    }
    cotizar() {
        let resultado = (this.factorBase + this.factorSr + this.factorUb + this.factorNecesidad)
        return resultado.toFixed(2)
    }
}