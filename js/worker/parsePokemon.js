let ws2 = {
    async parse(p1) {
        let i = 0;
        for (let item of p1.results) {
          const url = await fetch(item.url);
          const data = await url.json();
          postMessage(data);
          console.log(data, i);
          i++;
          if (i === 10) {
            break;
          }
        }
      }      
}


self.addEventListener("message", async (e) => {
    const data = await ws2.parse(e.data)
})