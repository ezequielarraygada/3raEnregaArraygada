//Clase Producto
class Producto {
  constructor(id, producto, clase, tipo, detalle, precio, imagen) {
    this.id = id
    this.producto = producto
    this.clase = clase
    this.tipo = tipo
    this.detalle = detalle
    this.precio = precio
    this.imagen = imagen
  }
}

class Carrito {
  constructor(id, producto, clase, tipo, detalle, precio, imagen) {
    this.id = id
    this.producto = producto
    this.clase = clase
    this.tipo = tipo
    this.detalle = detalle
    this.precio = precio
    this.imagen = imagen
  }
}

//Array ListaProductos y primeros productos.

const producto1 = new Producto("1", "Vivaz 20kg", "Alimentos", "Perros", "Adultos", "$4.850", "nodisponible.jpg")
const producto2 = new Producto("2", "Vivaz 10kg", "Alimentos", "Perros", "Adultos", "$3.000", "nodisponible.jpg")
const producto3 = new Producto("3", "Prof. Vet 20kgs", "Alimentos", "Perros", "Adultos", "$5.500", "profvet20ksperros.jpg")
const producto4 = new Producto("4", "Prof. Vet 10kgs", "Alimentos", "Gatos", "Adultos", "$5.000", "nodisponible.jpg")
const producto5 = new Producto("5", "Prof. Vet Urinari 2kgs", "Alimentos", "Gatos", "Tratamiento especial", "$2.000", "nodisponible.jpg")
const producto6 = new Producto("6", "Pipeta perros 2-5kgs", "Pipeta", "Perros", "Medianos", "$1.500", "nodisponible.jpg")
const producto7 = new Producto("7", "Pipeta gatos", "Cuidados", "Gatos adultos", "Antipulgas y garrapatas", "$1.000", "nodisponible.jpg")
const producto8 = new Producto("8", "Anticonceptivos gatos", "Medicación", "Gatos", "Pastillas anticonceptivas", "$1.600", "nodisponible.jpg")

const ListaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]



// Capturas de DOM

const Catalogo = document.getElementById("catalogo")
const BTVerCatalogo = document.getElementById("BTVerCatalogo")
const BTOcultarCatalogo = document.getElementById("BTOcultarCatalogo")
const form = document.getElementById("IngresoProductos")

// JSON

localStorage.setItem("Lista", JSON.stringify(ListaProductos))

// ListaProductos = JSON.parse(localStorage.getItem(Lista))


// Eventos

form.addEventListener("submit", (e) => {
  e.preventDefault()
  AgregarProducto(ListaProductos)
  console.log("Boton Agregar Funciona")
})

BTVerCatalogo.addEventListener("click", () => {MostrarCatalogo(ListaProductos)})
BTOcultarCatalogo.addEventListener("click", () => {Catalogo.innerHTML = ""})

//Funciones

function MostrarCatalogo(array) {
  Catalogo.innerHTML = ""
  for (let Producto of ListaProductos) {
    const Publicacion = document.createElement("div")
    Publicacion.innerHTML = `
    <img src="../imagenes/ecommerce/${Producto.imagen}" alt="Imagen">
    <div>
    <h5>${Producto.producto}</h5>
            <p>${Producto.detalle}</p>
          <li>${Producto.clase}</li>
            <li>${Producto.tipo}</li>
            <li>${Producto.precio}</li>
          </ul>
          <button id="AgregarCarritoBT${Producto.id}" class="BTAgregar btn btn-outline-success">Agregar al carrito</button>
          `
    Publicacion.classList.add("publicacion", "col-12", "col-md-6", "col-lg-4", "mb-3")
    Catalogo.appendChild(Publicacion)
    const BTAgregarCarrito = document.getElementById(`AgregarCarritoBT${Producto.id}`)
    BTAgregarCarrito.addEventListener("click", () => {console.log(`Producto: ${Producto.producto} Precio:${Producto.precio} ah sido agregado al carrito.`) })
  }
}




function AgregarProducto(array) {
  let IProducto = document.getElementById("ProductoI")
  let IClase = document.getElementById("ClaseI")
  let ITipo = document.getElementById("TipoI")
  let IDetalle = document.getElementById("DetalleI")
  let IPrecio = document.getElementById("PrecioI")

  const NuevoProducto = new Producto(ListaProductos.length + 1, IProducto.value,
    IClase.value, ITipo.value, IDetalle.value, parseInt(IPrecio.value), "nodisponible.jpg")
  console.log(NuevoProducto)

  array.push(NuevoProducto)
  console.log(array)

  localStorage.setItem("Lista", JSON.stringify(array)) 
  MostrarCatalogo(array)

  IProducto.value = ""
  IDetalle.value = ""
  IPrecio.value = ""
}

