document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton")
    const nombreUsuarioInput = document.getElementById("nombreUsuario")
    const errorNombreDiv = document.getElementById('errorNombre')
    const resultadoDiv = document.getElementById("resultado")
    const mensajeEleccionDiv = document.getElementById("mensajeEleccion")
    const pokemonImagenes = document.querySelectorAll('.eleccion img')
    const botonesElegir = document.querySelectorAll('.btnComprar')

    startButton.addEventListener("click", function() {
        let nombre = nombreUsuarioInput.value
        resultadoDiv.innerHTML = nombre ? `<p>Bienvenido ${nombre}, hoy podrás elegir tu Pokémon y luego tus elementos en la tienda.</p>`: ''
        errorNombreDiv.innerHTML = nombre ? '' : '<p>Por favor, ingrese su nombre.</p>'
    })

    pokemonImagenes.forEach(img => {
        img.addEventListener('click', function() {
            let eleccionDePokemon = img.id
            mensajeEleccionDiv.innerHTML = `<p>¡Felicitaciones! Elegiste a ${eleccionDePokemon}. Ahora ve por tus cosas a la tienda.</p>`
        })
    })

    const nombresProductos = {
        "btnPokebola": "Pokebola",
        "btnPokebolaMaster": "Pokebola Master",
        "btnPokebolaBlue": "Pokebola Blue",
        "btnPokebolaUltra": "Pokebola Ultra",
        "btnBayas": "Bayas",
        "btnCaramelos": "Caramelos",
        "btnPocion": "Poción",
        "btnArroz": "Arroz",
        "btnPokochos": "Pokochos"
    }
    
    botonesElegir.forEach(boton => {
        boton.addEventListener('click', function() {

            const nombreProducto = nombresProductos[boton.id]

            const mensajeDiv = document.createElement('div')
            mensajeDiv.classList.add('mensajeEleccion')
            mensajeDiv.innerHTML = `
                <p>¡Elegiste ${nombreProducto}! 
                <button class="btnEliminar">Eliminar</button></p>`

            const commerceSection = document.querySelector('.commerce')
            commerceSection.appendChild(mensajeDiv)
    
            const btnEliminar = mensajeDiv.querySelector('.btnEliminar')
            btnEliminar.addEventListener('click', function() {

                mensajeDiv.remove()
            })
        })
    })
})

btnContinuar.addEventListener("click", () => {
Swal.fire({
    title: "¡El viaje continúa!",
    text: "¡Preparate para tu próxima aventura!",
    icon: "success",
    confirmButtonText: "OK"
})
})