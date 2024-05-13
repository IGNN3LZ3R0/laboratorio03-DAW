// 1. Agregar y eliminar propiedades al objeto `producto`
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "laptop ideal para trabajo y gaming"
}

// Agregar una nueva propiedad al objeto
producto.imagenUrl = "https://www.ubuy.ec/es/product/DONW6KI-dell-xps-15-9570-8th-generation-intel-core-i7-8750h-processor-4k-touchscreen-display-16gb-ddr4-2666mhz-ram-512gb-ssd-nvidia-geforce-gtx-1050ti-windows"

// Eliminar una propiedad del objeto
delete producto.marca

console.log(producto);

// 2. Usar destructuración en objetos (sin cambios)
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "laptop ideal para trabajo y gaming"
}

// 3. Congelar un objeto para evitar cambios
const product = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "laptop ideal para trabajo y gaming"
}

Object.freeze(producto) // Esto congela el objeto, evitando cambios en sus propiedades
console.log(Object.isFrozen(producto));
producto.imagenUrl = "https://www.ubuy.ec/es/product/DONW6KI-dell-xps-15-9570-8th-generation-intel-core-i7-8750h-processor-4k-touchscreen-display-16gb-ddr4-2666mhz-ram-512gb-ssd-nvidia-geforce-gtx-1050ti-windows" 
// Intentar añadir una nueva propiedad al objeto después de congelarlo

// 4. Sellar un objeto para evitar agregar o eliminar propiedades pero permitir modificaciones
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "laptop ideal para trabajo y gaming"
}

Object.seal(producto) // Esto sella el objeto, permitiendo modificar propiedades pero no agregar ni eliminar
console.log(Object.isSealed(producto))
producto.precio = 2500 // Modificar una propiedad
console.log(producto);

// 5. Combinar objetos usando spread operator
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
}

const infoextra = {
    descripcion: "laptop ideal para trabajo y gaming",
    especificaciones: {
        procesador: "Intel Core i7",
        memoria: "16GB RAM",
        almacenamiento: "512GB SSD"
    },
    reviews: ['Buena Laptop', 'Me reulto muy confiable al usarla', 'Creo que el precio es un poco mas alto de lo que vale'],
    isNew: true,
}

// Combinar los dos objetos en uno solo
const infocompleta = { ...producto, ...infoextra }
console.log(infocompleta)

// 6. Uso de arrow functions y métodos de objetos (sin cambios)
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "Powerful laptop for professionals and gamers alike.",
    especificaciones: {
        procesador: "Intel Core i7",
        memoria: "16GB RAM",
        almacenamiento: "512GB SSD"
    },
    reviews: ['Great laptop!', 'Fast and reliable.', 'Excellent build quality.'],
    isNew: true,
    displayDiscount() {
        return `tiene 10% de descuento en ${this.nombre}!`
    }
}

console.log(product.displayDiscount()); // Método normal

// 7. Obtener claves, valores y pares de clave-valor de un objeto, y crear un nuevo objeto usando shorthand property names
const producto = {
    nombre: "Laptop Dell XPS 15",
    marca: "Dell",
    precio: 2000,
    descripcion: "Powerful laptop for professionals and gamers alike.",
    especificaciones: {
        procesador: "Intel Core i7",
        memoria: "16GB RAM",
        almacenamiento: "512GB SSD"
    },
    reviews: ['Great laptop!', 'Fast and reliable.', 'Excellent build quality.'],
    isNew: true,
    displayDiscount() {
        return `tiene 10% de descuento en ${this.nombre}!`
    }
}

console.log("Obtener las claves:", Object.keys(producto))
console.log("Obtener los valores:", Object.values(producto))
console.log("Obtener las claves y valores en un array:", Object.entries(producto))

const producto2 = "silla gamer";
const producto2precio = 300;

// Crear un nuevo objeto usando shorthand property names
const nuevoproducto = {
    nombre2: producto2,
    precio2: producto2precio
}

console.log(nuevoproducto);
