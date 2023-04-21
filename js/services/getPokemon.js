import print from "./printPokemon.js"

export default{
    async getData(){
        const next = document.querySelector("#next");
        const previous = document.querySelector("#previous");
        let pagination = (p1)=>{
            console.log(p1);
        }
        next.addEventListener("click", pagination(e.dat))
        const ws = new Worker('js/worker/getPokemonws.js', {type: "module"});
        ws.postMessage("https://pokeapi.co/api/v2/pokemon/");
        // next.addEventListener()
        ws.addEventListener("message", (e)=>{
            console.log(e.data);
            const ws2 = new Worker('js/worker/parsePokemon.js', {type: "module"});
            ws2.postMessage(e.data)
            ws2.addEventListener("message", (e)=>{
                let data = e.data
                print.showPokemon(data);
            })
        })
        
    }
}