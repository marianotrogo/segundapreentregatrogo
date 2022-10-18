/*-----------------------*/
let iniciarProceso = true;

const preguntaCompra = "\n- Aceptar para continuar\n- Cancelar para salir";
let presioneSalir = false;
let adquirirServicio = false;
let seleccion;
let carrito = [];
let totalCarrito = 0;
/*-----------------------*/
function comenzarApp() {
  iniciarProceso = confirm("Desea adquirir un servicio?" + preguntaCompra);
  return iniciarProceso;
}
/*-----------------------*/
function salida(regresarSalida) {
  presioneSalir = confirm("Desea Salir?" + preguntaCompra);
  if (presioneSalir) {
    alert("Gracias");
  } else {
    regresarSalida();
  }
        return presioneSalir;
}
/*-----------------------*/
function opcionesDeServicios() {
  let seleccionDeServicios = "Selecciona el Servicio que deseas adquirir:\n";
  for (producto of servicios) {
    seleccionDeServicios += `${producto.id} - ${producto.nombre} - $ ${producto.precio}\n`;
  }
  seleccion = prompt(seleccionDeServicios);
  return seleccion;
}
/*-----------------------*/
function buscarServicio() {
  const productoCliente = seleccion;
  if (seleccion != null) {
    const productoSeleccionado = servicios.filter(
      (producto) => producto.id == productoCliente
    );
    return productoSeleccionado;
  }
}
/*-----------------------*/
function agregarAlPedido() {
  const agregar = buscarServicio();
  if (seleccion == null) {
    salida(cargarCarro);
  } else if (agregar.length > 0) {
    carrito.push(agregar);
      alert(
        `Servicio: ${agregar[0].nombre} fue agregado al carro`
      );
      totalCarrito = totalCarrito + agregar[0].precio;
      carritoCargado();
    }

  return totalCarrito;
}
/*-----------------------*/
function carritoCargado() {
  let carritoServicios =
    "Finalizar Compra?\nAceptar para finalizar \nCancelar para adquirir otro servicio:\n\nTotal carrito:\n";
  for (producto of carrito) {
    let i = 0;
    carritoServicios += `${producto[i].nombre} - $ ${producto[i].precio}\n`;
    i++;
  }
  adquirirServicio = confirm(`${carritoServicios}\nTotal $ ${totalCarrito}`);
  return adquirirServicio;
}
/*-----------------------*/
function cargarCarro() {
  opcionesDeServicios();
  buscarServicio();
  agregarAlPedido();
}
/*-----------------------*/
function finalizarCompra() {
  let carroFinalizado = confirm (`El total es: ${totalCarrito} `);
  if (carroFinalizado) {
    totalCarrito = 0;
    carrito = [];
    adquirirServicio = false;
    procesoFull();
  } else {
    alert("Muchas Gracias");
  }
}
function procesoFull() {
  comenzarApp();
  if (iniciarProceso === true) {
    while (presioneSalir === false && adquirirServicio === false) {
      cargarCarro();
    }
  } else {
    salida(procesoFull);
  }
  if (adquirirServicio === true) {
    finalizarCompra();
  }
}
procesoFull();


