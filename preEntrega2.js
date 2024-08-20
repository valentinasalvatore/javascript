preEntrega2
 function promocion (bebida, comida, precio) {
    this.bebida = bebida;
    this.comida = comida;
    this.precio = precio;
 }

 const promocion1 = new promocion ("latte", "cookie", 7000);
 const promocion2 = new promocion ("cappuccino", "medialunas", 8500);
 const promocion3 = new promocion ("mocaccino", "porcion de torta", 9000)


function porcentaje (efectivo, porcen) {
    return (efectivo * porcen) / 100;
} if (efectivo === 0) {
    return ("el total no puede ser igual a 0");
}


let efectivo = prompt ("ingrese un numero");

let porcen = prompt ("ingrese un numero");

const resultado = porcentaje(efectivo,porcen);

alert ("el porcentaje a disminuir es " + resultado);

console.log (Math.min(11000,9000,8500,4000,3200,5000)); //calcula el cafe mas barato
console.log(Math.max(2000,50000,30000,6000,1500,4500)); //calcula el cafe mas caro

const array = ["cookie de chocolate", "chocotorta"];
array.push ("americano");

console.log(array.length);
console.log(array); //un agregar al carrito



