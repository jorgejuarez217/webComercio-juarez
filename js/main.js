

/*let numero = parseInt(prompt("ingrese un numero menor a 10 "));

if ((numero%2) == 0 && numero < 10){
    for (let i =numero; i <= 30; i+=2 ){
        document.write(i + "  " + "es un  numero par" + "<br>");
    }
        document.write("se muestran numero pares hasta el numero 30");
}else if ((numero%2) !== 0 && numero < 10){
    for (let i =numero; i <= 30; i+=3 ){
        document.write(i + "  " + "es un  numero impar" + "<br>");
    }
        document.write("se muestran numero impares hasta el numero 30");
}else {
    numero = parseInt(prompt("ingrese un numero menor a 10 "));
}


// Codigo para la entrega de simulador interactivo 
let desc = 0;
let precioFinal = 0;
let articulo;
let precio = parseFloat(prompt(`Ingrese el precio del articulo`))
let cantProducto =parseInt(prompt(`Ingrese la cantidad de articulos que desea comprar`));
*/
/*
do{
agregarProd();
descuento();
}
while (listaProd.length < 2);




class Producto {
    constructor (cant, producto, precio){
        this.cant = cant;
        this.producto = producto;
        this.precio = precio;
    }
}
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
*/
const carrito = [];
let button = document.querySelector("#button");
let contenedorCarrito = document.querySelector("#contenedorCarrito");
let miModal = document.querySelector(".modal-body");

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
 const agregarProducto = (e) =>{
      e.preventDefault();
      
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
             <p class="card-text">$${producto.precio}</p>
             <a href="#" id="button" data-id="${producto.id}" class="btn btn-primary">Agregar al carrito</a>
        </div>
`
contenedorProductos.append(articulo);

})
button.addEventListener("click", agregarProducto);
 
