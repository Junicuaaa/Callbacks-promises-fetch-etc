export default {
    Worker: new Worker("printws.js", { type: "module" }),
    async showData() {
        try {
            const url = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1281`);
            const data = await url.json();
            this.peticiones(data)
        } catch (error) {
            console.log("el error fue", error);

        }
    },
    async peticiones(p1) {
        let i = 0
        for (let item of p1.results) {
            const url = await fetch(item.url);
            const data = await url.json();
            console.log(data, i++);
        }
    }
}
