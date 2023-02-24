// Capturas de DOM

const Catalogo = document.getElementById("catalogo")
const BTVerCatalogo = document.getElementById("BTVerCatalogo")
const BTOcultarCatalogo = document.getElementById("BTOcultarCatalogo")
const BTOrdenPrecioMe = document.getElementById("BTOrdenPrecioMe")
const BTOrdenPrecioMa = document.getElementById("BTOrdenPrecioMa")



// Eventos

BTVerCatalogo.addEventListener("click", () => { MostrarCatalogo(Lista) })
BTOcultarCatalogo.addEventListener("click", () => { Catalogo.innerHTML = "" })
BTOrdenPrecioMe.addEventListener("click", () => { OrdenarPorPrecioMe(Lista) })
BTOrdenPrecioMa.addEventListener("click", () => { OrdenarPorPrecioMa(Lista) })

//Funciones

function MostrarCatalogo(array) {
  Catalogo.innerHTML = ""
  for (let Producto of array) {
    const Publicacion = document.createElement("div")
    Publicacion.innerHTML = `
    <img src="../imagenes/ecommerce/${Producto.imagen}" alt="Imagen">
    <div>
    <h5>${Producto.producto}</h5>
            <p>${Producto.detalle}</p>
          <li>${Producto.clase}</li>
            <li>${Producto.tipo}</li>
            <li>$ ${Producto.precio}</li>
          </ul>
          <button id="AgregarCarritoBT${Producto.id}" class="BTAgregar btn btn-outline-success">Agregar al carrito</button>
    </div>`
    Publicacion.classList.add("publicacion", "col-12", "col-md-6", "col-lg-4", "mb-3")
    Catalogo.appendChild(Publicacion)
    const BTAgregarCarrito = document.getElementById(`AgregarCarritoBT${Producto.id}`)
    BTAgregarCarrito.addEventListener("click", () => { console.log(`El producto ${Producto.producto} ah sido agregado al carrito.`) })
  }
}

function OrdenarPorPrecioMe(array) {
  const PorPrecio = [].concat(array)
  PorPrecio.sort((p1,p2) => p1.precio - p2.precio)
  MostrarCatalogo(PorPrecio)
}

function OrdenarPorPrecioMa(array) {
  const PorPrecio = [].concat(array)
  PorPrecio.sort((p1,p2) => p2.precio - p1.precio)
  MostrarCatalogo(PorPrecio)
}

