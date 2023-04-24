let ws = {
    async showData(p1) {
        try {
            const url = await fetch(p1);
            const data = await url.json();
            for (let item of data.results) {
                const url = await fetch(item.url);
                const data = await url.json();
                postMessage(data)
            }
            return data
        } catch (error) {
            console.log("el error fue", error);
        }
    },
}

self.addEventListener("message", async (e)=>{
    let waitCall = await ws.showData(e.data);
})