

// function AgregarProducto() {

//     let NombreProducto = prompt("Ingrese el producto a ingresar")
//     let ClaseProducto = prompt("Ingrese la clase del producto")
//     let TipoProducto = prompt("Ingrese el tipo del producto")
//     let DetalleProducto = prompt("Ingrese el detalle del producto")
//     let PrecioProducto = parseInt(prompt("Ingrese el precio del producto"))
//     const NuevoProducto = new Producto(ListaProductos.length + 1, NombreProducto,
//         ClaseProducto, TipoProducto, DetalleProducto, PrecioProducto)
//     ListaProductos.push(NuevoProducto)
//     alert(`Producto ingresado:
//             Producto: ${NombreProducto}
//             Clase: ${ClaseProducto}
//             Tipo: ${TipoProducto}
//             Detalle: ${DetalleProducto}
//             Precio: ${PrecioProducto}`)
// }

//Menu

// function Menu(salir) {
//     let OpcionIngresada = parseInt(prompt(`Ingrese el número de la opción deseada
//            1 - Inscribir producto
//            2 - Borrar producto
//            3 - Consultar lista de productos
//            4 - Consultar lista de tipo
//            5 - Buscar producto por ID
//            6 - Buscar producto por clase
//            7 - Buscar producto por tipo
//            8 - Ordenar:
//            0 - Salir del menu`))

//     switch (OpcionIngresada) {
//         case 1:
//             Ingresar()
//             break
//         case 2:
//             EliminarProducto(ListaProductos)
//             break
//         case 3:
//             MostrarLista(ListaProductos)
//             break
//         case 4:
//             MostrarTipos(ListaProductos)
//             break
//         case 5:
//             BuscarPorID(ListaProductos)
//             break
//         case 6:
//             BuscarPorClase(ListaProductos)
//             break
//         case 7:
//             BuscarPorTipo(ListaProductos)
//             break
//         case 8:
//             Ordenar(ListaProductos)
//             break
//         case 0:
//             alert("Gracias, que tenga buen día")
//             salir = true
//             return salir
//             break
//         default:
//             alert("Ingrese una opción correcta")
//             Menu()
//             break
//     }
// }

// // Menu - 1

// function Ingresar() {
//     AgregarProducto()
//     Ingresar = false
//     while (!Ingresar) {
//         let agregar = prompt(`Desea seguir ingresando productos? Ponga "ESC" para salir
//          o "Menu" para volver al menu principal`)
//         if (agregar.toLowerCase() == "esc") {
//             Ingresar = true
//         }
//         else if (agregar.toLowerCase() == "menu") {
//             Menu()
//         }
//         else {
//             AgregarProducto()
//         }
//     }
// }

// //Menu - 2

// function EliminarProducto(array) {
//     alert("A partir del listado busque el id del producto que desea eliminar")
//     for (let j of array) {
//         alert(`${j.id} - ${j.nombre} ${j.clase}`)
//     }
//     let IDEliminar = parseInt(prompt("Ingrese el id del producto que desea eliminar"))
//     let ArrayID = array.map(p => p.id)
//     let eliminado = ArrayID.indexOf(IDEliminar)
//     array.splice(eliminado, 1)
//     MostrarLista(array)
// }


// // Menu - 3

// function MostrarLista(array) {
//     array.forEach(
//         (p) => {
//             alert(`Lista de productos:
//             ID: ${p.id}
//             Producto: ${p.producto}
//             Clase: ${p.clase}
//             Tipo: ${p.tipo}
//             Detalle: ${p.detalle}
//             Precio: ${p.precio}`)
//         }
//     )
//     Menu()
// }


// // Menu - 4

// function MostrarTipos(array) {
//     const tipos = array.map((t) => t.tipo)
//     alert(tipos)
//     Menu()
// }


// // Menu - 5

// function BuscarPorID(array) {
//     let IDBuscado = parseInt(prompt("Ingrese el ID del producto buscado"))
//     let IDEncontrado = array.find(
//         (Producto) => Producto.id == IDBuscado
//     )
//     if (IDEncontrado == undefined) {
//         alert(`Para el ID ${IDBuscado} no hay coincidencias en nuestra lista de productoes.`)
//         Menu()
//     } else {
//         console.log(IDEncontrado)
//         alert(`ID:${IDEncontrado.id} - Nombre: ${IDEncontrado.clase}, ${IDEncontrado.nombre} - Tipo: ${IDEncontrado.tipo} - Precio: ${IDEncontrado.precio}`)
//         Menu()
//     }

// }


// // Menu - 6

// function BuscarPorClase(array) {
//     let ProductoBuscado = prompt("Ingrese el clase del producto buscado")
//     const busqueda = array.filter(
//         (j) => j.clase.toLowerCase() == ProductoBuscado.toLowerCase()
//     )
//     if (busqueda.length == 0) {
//         alert(`Para el producto ${ProductoBuscado} no hay coincidencias en nuestra lista de productoes.`)
//         Menu()
//     } else {
//         MostrarLista(busqueda)
//     }
// }

// // Menu - 7

// function BuscarPorTipo(array) {
//     let TipoBuscado = prompt("Ingrese el tipo del producto buscado")
//     const busqueda = array.filter(
//         (c) => c.tipo.toLowerCase() == TipoBuscado.toLowerCase()
//     )
//     if (busqueda.length == 0) {
//         alert(`Para el tipo ${TipoBuscado} no hay coincidencias en nuestra lista de productoes.`)
//         Menu()
//     } else {
//         MostrarLista(busqueda)
//     }
// }

// // Menu - 8 

// function Ordenar(array) {
//     let opcion = parseInt(prompt(`
//     1 - Ordenar por id de producto
//     2 - Ordenar alfabeticamente por clase de producto
//     3 - Ordenar por tipo
//     4 - Ordenar por precio
//     5 - Volver al menu`))
//     switch (opcion) {
//         case 1:
//             OrdenarPorID(array)
//             break
//         case 2:
//             OrdenarPorClase(array)
//             break
//         case 3:
//             OrdenarPorTipo(array)
//             break
//         case 4:
//             OrdenarPorPrecio(array)
//             break
//         case 5:
//             Menu()
//             break
//         default:
//             alert(`${opcion} no es una opción válida`)
//             Ordenar()
//             break
//     }
// }

// //Submenu - 1

// function OrdenarPorID(array) {
//     const PorID = [].concat(array)
//     PorID.sort((d1, d2) => d1.id - d2.id)
//     MostrarLista(PorID)
//     Ordenar()
// }

// //Submenu - 2

// function OrdenarPorClase(array) {
//     const PorClase = [].concat(array)
//     PorClase.sort((c1, c2) => {

//         if (c1.clase > c2.clase) {
//             return 1
//         }
//         if (c1.clase < c2.clase) {
//             return -1
//         }
//         return 0;
//     })
//     MostrarLista(PorClase)
//     Ordenar()
// }

// //Submenu - 3 

// function OrdenarPorTipo(array) {
//     const PorTipo = [].concat(array)
//     PorTipo.sort((t1, t2) => {

//         if (t1.tipo > t2.tipo) {
//             return 1
//         }
//         if (t1.tipo < t2.tipo) {
//             return -1
//         }
//         return 0;
//     })
//     MostrarLista(PorTipo)
//     Ordenar()
// }

// //Submenu - 4

// function OrdenarPorPrecio(array) {
//     const PorPrecio = [].concat(array)
//     PorPrecio.sort((p1, p2) => p2.precio - p1.precio)
//     MostrarLista(PorPrecio)
//     Ordenar()
// }
