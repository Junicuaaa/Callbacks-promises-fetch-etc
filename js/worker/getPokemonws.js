let ws = {
    async showData(p1) {
        try {
            const url = await fetch(p1);
            const data = await url.json();
            return data
        } catch (error) {
            console.log("el error fue", error);
        }
    },
}

self.addEventListener("message", async (e)=>{
    let waitCall = await ws.showData(e.data);
    postMessage(waitCall)
})