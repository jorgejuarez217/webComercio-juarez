

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
let cantProd = 0;
 let precio = 0;
let listaProd = [];
let precioFinal = 0;
class Producto {
    constructor (nombreProd, cantProd, precio){
        this.nombreProd = nombreProd;
        this.cantProd = cantProd;
        this.precio = precio;
    }
}

const agregarProd = () => {
     nombreProd = prompt(`ingrese el nombre del producto`);
     cantProd = parseInt(prompt (`ingrese la cantidad de productos que desea comprar`));
     precio = parseInt(prompt (`ingrese el precio del producto`));
    let articulo = new Producto (nombreProd, cantProd, precio);
    listaProd.push(articulo);
} 
agregarProd();
const descuento = (precio, cantProd) => {
    if((precio >= 200) || (cantProd >= 4)){
         desc = (precio * 20) / 100 ; 
    }else if (precio >= 150 && precio < 200){
         desc = (precio * 10) / 100 ;
            precioFinal = precio - desc;
    return (precioFinal);
        
}
}
descuento();
listaProd.forEach(articulo => {
    console.log(`El producto ingresado es ${articulo.nombreProd} y el precio es $ ${articulo.precio} `);
});