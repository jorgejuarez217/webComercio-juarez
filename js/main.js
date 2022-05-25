
let carrito = [];
const button = document.querySelector(".btn btn-primary");
const contenedorCarrito = document.querySelector("#contenedorCarrito");
const miModal = document.querySelector(".modal-body");
const contenedorProductos = document.querySelector(".contenedorProductos");
const contCarro = document.querySelector("#contCarro");
const total = document.querySelector("#precioTotal");
const modalFooter = document.querySelector(".modal-footer");


productos.forEach((producto) => {
  const articulo = document.createElement("article");
  articulo.classList.add(`card`, `col-3`, `m-3`);
  articulo.id = `${producto.id}`;
  articulo.cant = `${producto.cantidad}`;

  articulo.innerHTML = `
        <img src="${producto.Img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
             <p class="card-text"> ${producto.descripcion}</p>
             <p id="costo" class="card-text">$${producto.precio}</p>  
             <button id="agregar${producto.id}"  class="btn btn-primary">Agregar al carrito</button>
        </div>`;
  contenedorProductos.append(articulo);

const boton = document.getElementById(`agregar${producto.id}`);
  boton.addEventListener("click", () => {
    agregarProducto(producto.id);
    storage();
  });
});

const agregarProducto = (idProd) => {
  const art = productos.find((prod) => prod.id === idProd);
  const existe = carrito.some((prod) => prod.id === idProd);
  if (existe) {
     carrito.map((producto) => {
      if (producto.id === idProd) {
        producto.cantidad++;
      } else {
        return producto;
      }
    });
  } else {
    carrito.push(art);
  }
  actualizarCarrito();
  swal({
    position: "top-end",
    icon: "success",
    title: "Producto agregado",
    timer: 1000,
  })
}

const borrarDelCarrito = (idProd) => {
 
  const item = carrito.find((prod) => prod.id === idProd);
    if(item.cantidad = 1){
      const index = carrito.indexOf(item);
      carrito.splice(index, 1);
  }
  actualizarCarrito();
}

const actualizarCarrito = () => {
  
  miModal.innerHTML = ``;
    carrito.forEach((prod) => {
      let div = document.createElement("div");
        div.className = "productoAgregado";
        div.innerHTML = `
          <img src="${prod.Img}"</img>
          <p> ${prod.descripcion}</p>
          <p>$${prod.precio}</p>
          <p>${prod.cantidad}</p>
          <button type="button" class="btnBorrar" id="borrar${prod.id}">  </button>
    `
    miModal.append(div);
      const borrar = document.getElementById(`borrar${prod.id}`)
      borrar.addEventListener("click", () => {
        borrarDelCarrito(prod.id);
    })
  })

  total.innerText = precioFinal();
  contCarro.innerText = carrito.length;
}
 let storage = () => {
  localStorage.setItem("carroCompra", JSON.stringify(carrito));
} 

let precioFinal = () => {
  let precioGeneral = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    return precioGeneral;
}


