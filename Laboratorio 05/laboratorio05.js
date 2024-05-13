// Asíncrona
async function cargarDatos() {
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    const datos = [
      { imagen: "./imaguen1.jpg", descripcion: "Tatuaje de un buho en en brazo." },
      { imagen: "./imagen2.jpg", descripcion: "Tatuaje de una boca en blackout en el cuello." },
      { imagen: "./imagen3.jpg", descripcion: "Tatuaje a blanco y negro en el antebrazo." },
      { imagen: "./imagen4.jpg", descripcion: "Tatuaje de estrella fugaz en el antebrazo." }
    ];
  
    return datos;
}

function buscarDescripcion() {
    const nombreTatuaje = document.getElementById("nombreTatuaje").value.toLowerCase(); // Convertir a minúsculas para hacer la búsqueda más flexible
    cargarDatos().then(datos => {
        const descripcionEncontrada = datos.find(tatuaje => tatuaje.descripcion.toLowerCase().includes(nombreTatuaje));
        if (descripcionEncontrada) {
            alert(`${descripcionEncontrada.imagen}: ${descripcionEncontrada.descripcion}`);
        } else {
            alert("Tatuaje no encontrado");
        }
    }).catch(error => {
        console.error("Error al cargar los datos:", error);
    });
}

cargarDatos().then(datos => {
    document.getElementById("tatuaje1").innerHTML = `<img src="${datos[0].imagen}" alt="Tatuaje 1"><br>${datos[0].descripcion}`;
    document.getElementById("tatuaje2").innerHTML = `<img src="${datos[1].imagen}" alt="Tatuaje 2"><br>${datos[1].descripcion}`;
    document.getElementById("tatuaje3").innerHTML = `<img src="${datos[2].imagen}" alt="Tatuaje 3"><br>${datos[2].descripcion}`;
    document.getElementById("tatuaje4").innerHTML = `<img src="${datos[3].imagen}" alt="Tatuaje 4"><br>${datos[3].descripcion}`;
}).catch(error => {
    console.error("Error al cargar los datos:", error);
});



