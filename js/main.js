

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

*/
//listaProd.forEach(articulo =>{
  //  console.log(`El producto ingresado es ${articulo.nombreProd} y el precio es $ ${precioFinal}`);
//});

let producto;
let desc = 0;
let cant = 0;
let precio = 0;
let listaProd = [];
let precioFinal = 0;

class Producto {
    constructor (cant, producto, precio){
        this.cant = cant;
        this.producto = producto;
        this.precio = precio;
    }
}
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


const prod2 = document.getElementById("yerba");
prod2.addEventListener("click", compra);

const prod3 = document.getElementById("cafe");
prod3.addEventListener("click", compra);

const prod4 = document.getElementById("cerveza");
prod4.addEventListener("click", compra);




