// Programa beta de Amazon solo JS
//Lenin Proaño

// Función anónima autoejecutable para imprimir un mensaje de prueba
console.log((function(){
    return "esto es una prueba para validar una cuenta";
})());

// Función anónima autoejecutable para validar datos del usuario
(function(){
    console.log("función para validar datos del usuario");
})();

// Crear un botón dentro del elemento con id 'search-178'
const buscador = document.querySelector('#search-178');
const button = document.createElement("button");
button.innerText = "Hello React";
buscador.appendChild(button);

// Event listener para el botón
button.addEventListener('click', function(){
    alert("Usuario registrado");
});

