const agregandoProducto = () => {
    let nuevoNombre = prompt("ingrese nombre")
    let nuevaMarca = prompt("ingrese una marca")
    let nuevoCodigo = prompt("ingrese el  codigo")
    let nuevoPrecio = Number(prompt("ingrese el precio"))
    let nuevaDisponibilidad = confirm("ingrese si está disponible")

    let nuevoProducto = new Producto(nuevoNombre, nuevaMarca, nuevoCodigo, nuevoPrecio, nuevaDisponibilidad)

    productos.push(nuevoProducto)

}
let cargarProducto = confirm("¿Quiere cargar un nuevo producto?")

while (cargarProducto === true) {
    agregandoProducto()
    cargarProducto = confirm("¿Quiere cargar otro producto?")
}
/* console.log("Productos nuevos")
console.table(productos) */