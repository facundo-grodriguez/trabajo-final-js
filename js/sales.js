// LLAMADAS AL HTML
const filter = document.querySelector("#filter")//Filtro
const result = document.querySelector("#result")//resultado
const everyBody = document.querySelector("#everybody")//Todos los productos
const filtered = document.getElementsByName("filtered")//Menor precio / Mayor precio 
const select = document.querySelector("#filteredPrice")//select
const addingNewProducts = document.querySelector("#addingProducts")//Cargando productos
const container = document.querySelector("#container")//Contenedor de cards
const btnCart = document.querySelector("#btnCart") //Contenedor de productos


// VARIABLES NECESARIAS 


// CLASE CONSTRUCTORA   
class Product {
    constructor(brand, name, image, price) {
        this.brand = brand
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 0
    }
    priceIVA() {
        this.price = this.price * IVA
    }
    discountStock(units) {
        this.quantity = this.quantity - units
    }

}


// ARRAYS
const products = []
const cart = []
const search = []


// LISTA DE PRODUCTOS 
function list() {
    //XIAOMI
    products.push(new Product("XIAOMI", "REDMI 9A", "./assets/images/redmi-9A.jpg", 145))
    products.push(new Product("XIAOMI", "REDMI 9C", "./assets/images/redmi-9C.jpg", 175))
    products.push(new Product("XIAOMI", "REDMI 9T", "./assets/images/redmi-9t.jpg", 210))
    products.push(new Product("XIAOMI", "NOTE 9 PRO", "./assets/images/redmiNote9Pro.jpg", 290))
    products.push(new Product("XIAOMI", "REDMI 10", "./assets/images/redmi-10.png", 215))
    products.push(new Product("XIAOMI", "REDMI 10A", "./assets/images/redmi-10a.jpg", 180))
    products.push(new Product("XIAOMI", "REDMI 10C", "./assets/images/redmi-10c.jpg", 190))
    products.push(new Product("XIAOMI", "REDMI 10S", "./assets/images/redmi-10s.jpg", 260))
    products.push(new Product("XIAOMI", "REDMI 10 PRO", "./assets/images/redmi-10pro.jpg", 280))
    products.push(new Product("XIAOMI", "NOTE 11", "./assets/images/redmi-note11.jpg", 220))
    products.push(new Product("XIAOMI", "NOTE 11S", "./assets/images/redmi-note11s.jpg", 275))
    products.push(new Product("XIAOMI", "NOTE 11 PRO", "./assets/images/redmi-note11pro.jpg", 305))
    products.push(new Product("XIAOMI", "11 LITE G5 NE", "./assets/images/redmi-11lite.jpg", 365))
    products.push(new Product("XIAOMI", "MI 12", "./assets/images/redmi-mi12.jpg", 685))
    products.push(new Product("XIAOMI", "POCO M4 PRO", "./assets/images/redmi-poco4pro.jpg", 255))
    products.push(new Product("XIAOMI", "POCO X4 PRO", "./assets/images/redmi-pocox4pro.jpg", 360))

    //IPHONE
    products.push(new Product("IPHONE", "11", "./assets/images/iphone-11.jpg", 620))
    products.push(new Product("IPHONE", "12 MINI", "./assets/images/iphone-12mini.jpg", 790))
    products.push(new Product("IPHONE", "12", "./assets/images/iphone-12.jpg", 930))
    products.push(new Product("IPHONE", "13", "./assets/images/iphone-13.jpg", 1110))
    products.push(new Product("IPHONE", "13 PRO", "./assets/images/iphone-13pro.jpg", 1500))
    products.push(new Product("IPHONE", "13 PRO MAX 1TB", "./assets/images/iphone-13promax.jpg", 1850))

}


// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    let brand = prompt("ingrese una marca").toUpperCase()
    let name = prompt("ingrese nombre").toUpperCase()
    let image = prompt("ingrese el url de la imagen")
    let price = Number(prompt("ingrese el precio"))


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)
}


// CARGANDO PRODUCTOS (NUEVO)
let div = ""
const loadProducts = (products) => {
    container.innerHTML = ""
    for (const product of products) {
        div = document.createElement("div")
        div.setAttribute("class", "card text-center col-xl-3 col-md-4 col-8  m-3")

        div.innerHTML += ` 
            <h2>${product.name}</h2>
            <h4>${product.brand}</h4>
            <img  class="image w-75" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
            <p class="price"><strong>${product.price} USD</strong></p>
            <button class="button btn cart " id="${product.name}" >Agregar al carro</button>
            `
        container.appendChild(div)
    }
}
const addCart = document.querySelectorAll(".cart")



// PARA ORDENAR LOS PRECIOS (NUEVO)
function optionPrice() {
    products.sort((a, b) => {
        if (filteredPrice.value === "lowerPrice") {
            if (a.price > b.price)
                return 1
            if (a.price < b.price)
                return -1
            return 0
        }
        if (filteredPrice.value === "higherPrice") {
            if (a.price > b.price)
                return -1
            if (a.price < b.price)
                return 1
            return 0
        }
    })
    loadProducts(products)
}


// MAS DE UN RESULTADO
function searching() {
    let parameter = filter.value.toUpperCase()
    if (parameter !== "") {
        const result = products.filter(product => product.name.match(parameter))
        if (result.length !== 0) {
            search.push(result)
            search.map(search => {
                products
                loadProducts(search)
            })
        } else if (parameter !== "") {
            result1 = products.filter(product => product.brand.match(parameter))
            if (result1.length !== 0) {
                search.push(result1)
                search.map(search => {
                    products
                    loadProducts(search)
                })
            
        } else {
            alert("No se encontro el producto")
        }
    }
}
}

///SACAR 
function hola() {
    alert(`hola`)
}
///SACAR

//CART

/* function loadCart() {

}

function contentCard(){

}
 */


// BOTONES

//OPCION DE PRECIOS
select.addEventListener("change", () => optionPrice())
//AGREGADO DE PRODUCTOS
addingNewProducts.addEventListener("click", () => addingProducts())
//MUESTRA LOS PRODUCTOS
everyBody.addEventListener("click", () => loadProducts(products), list())
//BUSCADOR
result.addEventListener("click", searching)
filter.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searching()
    }
})
//AGREGADO DE PRODUCTOS
//addCart.addEventListener("click", () => hola())

//CONTENIDO DE CARRO
//btnCart.addEventListener("click", () => hola())