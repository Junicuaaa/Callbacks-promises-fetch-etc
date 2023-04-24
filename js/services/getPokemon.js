import print from "./printPokemon.js"

export default{
    async getData(){
        let paginationData = 0;
        const next = document.querySelector("#next");
        const previous = document.querySelector("#previous");
        previous.style.display = "none"
        const ws = new Worker('js/worker/getPokemonws.js', {type: "module"});
        ws.postMessage("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
        ws.addEventListener("message", (e)=>{
            print.showPokemon(e.data)
        })
        next.addEventListener("click", (e)=>{
            paginationData += 20
            if (paginationData <= 0) {
                previous.style.display = "none"
            }else{
                previous.style.display = "block"
            }
            ws.postMessage(`https://pokeapi.co/api/v2/pokemon/?offset=${paginationData}&limit=20`)
            print.clearData()
        })
        previous.addEventListener("click", (e)=>{
            paginationData -= 20
            if (paginationData <= 0) {
                previous.style.display = "none"
            }else{
                previous.style.display = "block"
            }
            ws.postMessage(`https://pokeapi.co/api/v2/pokemon/?offset=${paginationData}&limit=20`)
            print.clearData()
        })
    }
}