 let noticias = document.querySelector("#news")

let notis = async () =>{
    try{
        let response = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=751b3823f97a458a8f92485013364451");
        let resultado = await response.json();
        noticia = resultado.sources;
        noticia.forEach(not =>{
           if (not.country === "ar"){
          let notas = document.createElement("div");
            notas.className = "noticias";
            notas.innerHTML = `
              <p>${not.name} </p>
              <div>${not.description} </div>
              <a href="${not.url}"> Click aqui !!</a> 
            `
          noticias.appendChild(notas)
           }
        })
        }catch (error){
        console.log(error)
    }
} 
notis ();  