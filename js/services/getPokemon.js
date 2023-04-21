export default{
    async getData(){
        const ws = new Worker('js/worker/getPokemonws.js', {type: "module"});
        ws.postMessage({data: "data"});
        ws.addEventListener("message", (e)=>{
            console.log(e.data);
        })
    }
}