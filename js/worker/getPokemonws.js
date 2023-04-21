let ws = {
    async showData(p1) {
        try {
            const url = await fetch(p1);
            const data = await url.json();
        } catch (error) {
            console.log("el error fue", error);
        }
    },
}

self.addEventListener("message", async (e)=>{
    let waitCall = await ws.showData("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1281");
})