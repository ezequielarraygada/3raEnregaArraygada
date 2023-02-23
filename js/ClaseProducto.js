// Clase Producto
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
// Array

let Lista = []

  // Crar array en local.

// Funcion
  const LocalLista = async () => {
    const respuesta = await fetch("../productos.json")
    const datos = await respuesta.json()
    
    for(let producto of datos){
        let NuevoProducto = new Producto(producto.id, producto.producto, producto.clase, producto.tipo, producto.detalle, producto.precio, producto.imagen)
        Lista.push(NuevoProducto)
    }
    localStorage.setItem("Lista", JSON.stringify(Lista))
}


// Seteo

if(localStorage.getItem("Lista")){

    for(let producto of JSON.parse(localStorage.getItem("Lista"))){
        let NuevoProducto = new Producto(producto.id, producto.producto, producto.clase, producto.tipo, producto.detalle, producto.precio, producto.imagen)
        Lista.push(NuevoProducto)
    }
}else{
    LocalLista()
}
