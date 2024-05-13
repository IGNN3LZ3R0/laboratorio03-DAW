'use strict';
const productos = ["Play","Tv","Laptop","Celular"];
const seguidores = [23,56,37,12];

console.log("Número de productos:", productos.length);
console.log("Número de seguidores en redes sociales:", seguidores.length);
producos.length > 0 ? console.log("Proceder con el pago") : console.log("Carrito de compras vacío");

const listaproductos = ["Play","Tv","Laptop","Celular"];

// Primera forma de iterar sobre los elementos de un arreglo
for (let i=0 ; i<listaproductos.length ; i++){
    console.log(listaproductos[i]);
}

// Segunda forma de iterar sobre los elementos de un arreglo
listaproductos.forEach((producto, index) => console.log(`${index} - ${producto}`));

// Tercera forma de iterar sobre los elementos de un arreglo
const nuevalistaproductos = listaproductos.map((producto) => `¡Nuevo ${producto} disponible!`);
console.log(listaproductos);
console.log(nuevalistaproductos);
// En conclusión (map) no altera el arreglo original

const productosinfo =[
    {
        nombre:"Play",
        precio:250,
        categoria: "Videojuegos"
    },
    {
        nombre:"Tv",
        precio:450,
        categoria: "Electrónica"
    }
];

productosinfo.forEach(producto => console.log(`${producto.nombre} - ${producto.precio}`));

'use strict';

const listaproducto = ["Play","Tv","Laptop","Celular"];
const nuevoproducto = "Audífonos";
const catogoria = ["Electrónica", "Accesorios"];
const nickname ="FAR4M";

// Agregar al final del arreglo
listaproducto.push(nuevoproducto);
// Agregar al inicio del arreglo
listaproducto.unshift(...CategorIA);
// Agregar un nuevo producto al inicio del arreglo
listaproducto.unshift(nick);
console.log(listaproducto);

'use strict';

const listaproducto2 = ["Play","Tv","Laptop","Celular"];

// Eliminar el último elemento del arreglo
listaproducto2.pop();
// Eliminar el primer elemento del arreglo
listaproducto2.shift();
console.log(listaproducto2);

// Método find
const encontrarproducto = listaproducto.find(producto => producto === "Tv");
console.log(encontrarproducto);

const productonoecontrado = listaproducto.find(producto => producto === "Tablet");
console.log(productonoecontrado);

'use strict';

// Método findIndex
const foundIndex = listaproducto.findIndex(producto => producto === "Laptop");
console.log(foundIndex);

const notFoundIndex = listaproducto.findIndex(producto => producto === "Tablet");
console.log(notFoundIndex);

const listaproductos3 = ["Play","Tv","Laptop","Celular","PSP","Xbox"];

// Método filter
const filteredListOne = listaproductos3.filter(producto => producto.startsWith('P'));
const filteredListTwo = listaproductos3.filter(producto => producto !== 'PSP');
console.log(filteredListOne);
console.log(filteredListTwo);

const productonombre = ["Play","Tv","Laptop","Celular"];
const nombres_mascotas = ["Puka","Chochitos","Peggy","Tobby","Blanqui"];

// Método concat
const combinedList = productonombre.concat(nombres_mascotas);
console.log(combinedList);

'use strict';

// Funciona únicamente con arreglos de un solo valor
const usuario= ["Lenin","Proano",20,true,{ciudad:"quito"}];

console.log(profileUser.includes(20));
console.log(profileUser.includes(['frontend']));

'use strict';

// Funciona para arreglos de un solo valor y arreglos de objetos

const friends = ["Peter","Juan","Luisa","Anahi","Mateus"];
const users =[
    {
        name:"Lenin",
        lastName:"Proano",
        age:20
    },
    {
        name:"andres",
        lastName:"cueva",
        age:36
    }
];

const userExists = users.some(user => user.name === "Lenin");
console.log(userExists);

const friendExists = friends.some(friend => friend === "Lenin");
console.log(friendExists);

"use strict";

const carritocompras = [
    {   product: "phone",
        qty: 1,
        price: 500
    },
    {   product: "Screen Protector",
        qty: 1,
        price: 10,
    },
    {
        product: "Memory Card",
        qty: 2,
        price: 20,
    }
];

// Todos los elementos deben cumplir la condición
const allExpensive = carritocompras.every(item => item.price >= 500);
console.log(allExpensive);
// Al menos un elemento debe cumplir la condición
const anyExpensive = carritocompras.some(item => item.price >= 500);
console.log(anyExpensive);

'use strict';

console.log(profileUser.reverse());

"use strict";

const estudiantes = [
    { nombre: "John", edad: 21 },
    { nombre: "Oliver", edad: 55 },
    { nombre: "Michael", edad: 55 },
    { nombre: "Dwight", edad: 19 },
    { nombre: "Oscar", edad: 21 },
    { nombre: "Kevin", edad: 55 },
];

const totalAge = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
console.log("Edad total de los estudiantes:", totalAge);

const totalProducts = carritocompras.reduce((total, item) => total + item.qty, 0);
console.log("Total de productos en el carrito:", totalProducts);

const totalPayment = carritocompras.reduce((total, item) => total + item.price, 0);
console.log("Total a pagar con impuestos:", totalPayment + (totalPayment * 0.12));

