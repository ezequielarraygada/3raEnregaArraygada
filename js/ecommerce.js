// // Capturas DOM
const form = document.getElementById("IngresoProductos")

// // Eventos
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    AgregarProducto(Lista)
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
     Lista.push(NuevoProducto)
     localStorage.setItem("Lista", JSON.stringify(array))
     swal({
      title: "¡Producto agregado!",
      text: `Producto:${NuevoProducto.producto} ha sido agregado a la lista de productos`,
      icon: "success",
      button: "Ok",
    });
     form.reset()
   }