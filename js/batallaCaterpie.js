document.addEventListener("DOMContentLoaded", function(){
    const mensajeEncuentro = document.getElementById("mensajeEncuentro")
    const btnAtacar = document.getElementById("btnAtacar")
    const btnCapturar = document.getElementById("btnCapturar")

    let ataquesRealizados = 0

    function atacarCaterpie() {
        return new Promise(resolve => {
            setTimeout(() => {
                const danio = Math.floor(Math.random() * 10) + 1
                resolve(danio)
            }, 1000)
        })
    }

    function enfrentarCaterpie() {
        mensajeEncuentro.textContent = "Caterpie te ha retado a una batalla. No puedes esquivarlo. Debes atacar y luego capturarlo."
        btnAtacar.disabled = false
        btnCapturar.disabled = true

        btnAtacar.addEventListener("click", async function(){
            btnAtacar.disabled = true
            btnCapturar.disabled = true
        
        const danioRecibido = await atacarCaterpie()
        ataquesRealizados++

        if(ataquesRealizados === 1){
            mensajeEncuentro.textContent = `Caterpie te ha infligido ${danioRecibido} puntos de daño. No has debilitado del todo a Caterpie. Ataca nuevamente.`
            btnAtacar.disabled = false
        } else if (ataquesRealizados === 2){
            mensajeEncuentro.textContent = `Caterpie vuelve a contratacar y te ha inflido ${danioRecibido} puntos de daño, pero lo has debilitado totalmente. Ahora prueba capturarlo.`
            btnCapturar.disabled = false
        }
    })

    btnCapturar.addEventListener("click", () => {
        mensajeEncuentro.textContent = "¡Capturaste a Caterpie!"
        btnAtacar.disabled = true
        btnCapturar.disabled = true
    })
    }

    enfrentarCaterpie()
})