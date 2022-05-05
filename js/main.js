
/*
let producto;
let desc = 0;
let cant = 0;
let precio = 0;
let listaProd = [];
let precioFinal = 0;


const agregarProd = () => {
    cant = parseInt(prompt (`ingrese la cantidad de productos que desea comprar`));
    producto = (prompt (`ingrese el nombre del producto`));
    precio = parseInt(prompt (`ingrese el precio del producto`));
    let articulo = new Producto ( cant, producto, precio);
   listaProd.push(articulo);
}
const descuento = () => {
    if((precio >= 200) || (cant >= 4)){
         desc = (precio * 20) / 100 ; 
    }else if ((precio >= 150) && (precio < 200)){
         desc = (precio * 10) / 100 ;}
            precioFinal = this.precio - desc;

    for (let articulo of listaProd){
        articulo.precio -= desc;
        articulo.precio *= cant;
            console.log(`Usted a agregado ${articulo.cant} ${articulo.producto} al carrito y el precio total es $${articulo.precio}`)
        }
}
const compra = () => {
    let art = confirm("Desea agregar este producto al carrito?")    
    if(art){
    agregarProd();
    descuento();
    }else{
        alert("Seleccione un producto para agregar al carrito");
    }
    }
    
const prod1 = document.getElementById("Galle");
prod1.addEventListener("click", compra);
prod1.addEventListener("click", () =>{
    listaProd.forEach(articulo=>{
        let msj = document.createElement("div");
        msj.setAttribute("class", "msj");
        msj.innerHTML = `
            <div class="alert alert-primary" role="alert">
    A agregado ${articulo.cant} ${articulo.producto} al carrito y el precio total es ${articulo.precio}
    </div>
        `
        document.querySelector(".cont_producto").append(msj);
    })
    })
 infoProducto = (producto) =>{
    let id = producto.querySelector('#button').getAttribute(data-id);
    let nombre = producto.querySelector('.card-title').textContent;
    let  precio = producto.querySelector('#costo').textContent;
    let Img = producto.querySelector('img').src;

    const infoProducto = new Producto (id, nombre, precio, Img);
    carrito.push(infoProducto);
   
   
    return producto;
} */
const carrito = [];
let button = document.querySelector(".btn btn-primary");
let contenedorCarrito = document.querySelector("#contenedorCarrito");
let miModal = document.querySelector(".modal-body");
let contenedorProductos = document.querySelector(`.contenedorProductos`);
let contCarro = document.querySelector("#contCarro");


class Producto {
    constructor (id, nombre, precio, Img ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.Img = Img;
        this.cant = 1;
        this.subtotal = 0;
    }
}

    productos.forEach((producto) => {
    const articulo = document.createElement("article");
    articulo.classList.add(`card`, `col-3`, `m-3`);
    articulo.id = `${producto.id}`

    articulo.innerHTML= `
        <img src="${producto.Img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
             <p class="card-text"> ${producto.descripcion}</p>
             <p id="costo" class="card-text">$${producto.precio}</p>
             <button id="agregar${producto.id}"  class="btn btn-primary">Agregar al carrito</button>
        </div>
`
contenedorProductos.append(articulo);
    
const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () =>{
        agregarProducto(producto.id)
    })
})

const agregarProducto = (idProd) =>{
    const art = productos.find( (prod) => prod.id === idProd)
    carrito.push(art);
    actualizarCarrito();
    swal({
        position:'top-end',
        icon:'success',
        title:'Producto agregado',
        timer: 1300
    })
    }

 const borrarDelCarrito = (idProd) =>{
    const item = carrito.find( (prod) => prod.id === idProd)
     const index = carrito.indexOf(item);
        
     carrito.splice(index, 1)
    actualizarCarrito();
 }
 
 
const actualizarCarrito = () =>{
    miModal.innerHTML = ``;
    
    carrito.forEach((prod) =>{
    let div = document.createElement('div')
    div.className = "productoAgregado"
    div.innerHTML = `
        <img src="${prod.Img}"</img>
        <p> ${prod.descripcion}</p>
        <p>$${prod.precio}</p>
        <button type="button" class="btnBorrar" id="borrar${prod.id}">  </button>
    `
    miModal.append(div)
     const borrar = document.getElementById(`borrar${prod.id}`)
    borrar.addEventListener("click", () =>{
        borrarDelCarrito(prod.id);
      })  
    })
    contCarro.innerText = carrito.length
    
}
