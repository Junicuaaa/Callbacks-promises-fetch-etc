export default {
    showPokemon(p1) {
        let { name, sprites, height, weight } = p1
        let root = document.querySelector(".root")
        let html =  /*html*/ `
        <div class="rounded border border-1 shadow-sm p-2 bg-white" style="min-width: 300px;">
            <div style="height: 250px;" class="rounded-top bg-light">
                <img class="w-100 h-100"  src="${sprites.other.home.front_default}">
            </div>
        <div class="mt-2">
            <h6 class="text-secondary">Nombre: ${name}</h6>
            <h6 class="text-secondary">Peso: ${weight}</h6>
            <h6 class="text-secondary">Altura: ${height}</h6>
        </div>
        </div>
        `
        root.insertAdjacentHTML("beforeend", html)
    },
    clearData(){
        let root = document.querySelector(".root")
        root.innerHTML = null
    }
}
