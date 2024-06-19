document.addEventListener("DOMContentLoaded", () =>{
    const seccionEvolucion = document.getElementById('seccionEvolucion')

    function PiedraEvolucion() {

        fetch("https://pokeapi.co/api/v2/item/82/")
        .then((response) => response.json())
        .then(data => {
            const imgPiedraEvolucion = data.sprites.default

            const titulo = document.createElement('h2')
            titulo.textContent = "Te encontaste una piedra evolutiva en el camino. ¿Querés evolucionar tu Pokemon?"

            const parrafo = document.createElement('p')
            parrafo.textContent = "Haz click sobre la piedra evolutiva para ver qué sucede."

            const contenedorPiedra = document.createElement('div')
            contenedorPiedra.classList.add('piedra')

            const imagenPiedra = document.createElement('img')
            imagenPiedra.src = imgPiedraEvolucion
            imagenPiedra.alt = "Piedra Fuego"
            imagenPiedra.id = "piedraFuego"

            const textoPiedra = document.createElement('p')
            textoPiedra.textContent = "Piedra Fuego"

            const botonContinuar = document.createElement('button')
            botonContinuar.id = "continuarSinEvolucion"
            botonContinuar.textContent = "Continuar sin Evolucionar"

            const mensajeEvolucion = document.createElement('div')
            mensajeEvolucion.id = "MensajeEvolucion"

        /*CONTENEDOR E HIJOS*/
        
        contenedorPiedra.appendChild(imagenPiedra)
        contenedorPiedra.appendChild(textoPiedra)

        seccionEvolucion.appendChild(titulo)
        seccionEvolucion.appendChild(parrafo)
        seccionEvolucion.appendChild(contenedorPiedra)
        seccionEvolucion.appendChild(botonContinuar)
        seccionEvolucion.appendChild(mensajeEvolucion)

        /*EVENTO DE PIEDRA*/

        imagenPiedra.addEventListener("click", () => {
            mensajeEvolucion.textContent = "Tu pokemon ha evolucionado con la Piedra Fuego"
        })

        botonContinuar.addEventListener("click", () => {
            mensajeEvolucion.textContent = "Decidiste no evolucionar a tu Pokemon."
        })
    })
    .catch(error => {
        console.error("Error al obtener la piedra de evolución:", error)
    })
}

PiedraEvolucion()
})