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

// // Capturas DOM
const form = document.getElementById("IngresoProductos")

// //Captura LocaleStorage

const Lista = JSON.parse(localStorage.getItem("Lista")) || [];

// // Eventos
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    AgregarProducto(Lista)

    console.log("Boton Agregar Funciona")
  })

   //Funciones
   function AgregarProducto(array) {
     let IProducto = document.getElementById("ProductoI")
     let IClase = document.getElementById("ClaseI")
     let ITipo = document.getElementById("TipoI")
     let IDetalle = document.getElementById("DetalleI")
     let IPrecio = document.getElementById("PrecioI")
  
     const NuevoProducto = new Producto(Lista.length + 1, IProducto.value,
       IClase.value, ITipo.value, IDetalle.value, parseInt(IPrecio.value), "nodisponible.jpg")
     console.log(NuevoProducto)
     Lista.push(NuevoProducto)
     localStorage.setItem("Lista", JSON.stringify(array))
     form.reset()
   }