class Producto {
    constructor(nombre, marca, codigo, precio, disponibilidad) {
        this.nombre = nombre
        this.marca = marca
        this.codigo = codigo
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
    hayStock() {
        let error = "Producto disponible"
        if (this.disponibilidad === false) {
            this.disponibilidad = true
        } else { console.warn(error) }
    }
    noHayStock() {
        let error = "Producto no disponible"
        if (this.disponibilidad === true) {
            this.disponibilidad = false
        } else { console.warn(error) }
    }
    modificandoPrecio() {
        alert("Por ejemplo escriba el porcentaje en 1.21 si quiere un 21% ")
        let porcentaje = Number(prompt("ingrese el porcentaje de aumento"))
        this.precio = this.precio * porcentaje
    }
}
























