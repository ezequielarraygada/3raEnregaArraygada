// // Capturas DOM
// const form = document.getElementById("IngresoProductos")

// //Captura LocaleStorage

// const ListaProductos = JSON.parse(localStorage.getItem(Lista))

// // Eventos
// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     AgregarProducto(ListaProductos)
//     console.log("Boton Agregar Funciona")
//   })

//   //Funciones
//   function AgregarProducto(array) {
//     let IProducto = document.getElementById("ProductoI")
//     let IClase = document.getElementById("ClaseI")
//     let ITipo = document.getElementById("TipoI")
//     let IDetalle = document.getElementById("DetalleI")
//     let IPrecio = document.getElementById("PrecioI")
  
//     const NuevoProducto = new Producto(ListaProductos.length + 1, IProducto.value,
//       IClase.value, ITipo.value, IDetalle.value, parseInt(IPrecio.value), "nodisponible.jpg")
//     console.log(NuevoProducto)
  
//     array.push(NuevoProducto)
//     console.log(array)
  
//     localStorage.setItem("Lista", JSON.stringify(array))
//     MostrarCatalogo(array)
  
//     IProducto.value = ""
//     IDetalle.value = ""
//     IPrecio.value = ""
//   }