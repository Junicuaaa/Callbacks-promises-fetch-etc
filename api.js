export default {
    Worker: new Worker("printws.js", {type: "module"}),
    async pene(){
        try {
            const url = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1280")
            const data = await url.json();
            console.log(data);
        } catch (error) {
            console.log("el error fue", error);
        }

        
    } 


}



