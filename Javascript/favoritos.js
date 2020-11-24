window.onload = function () {
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    // ID PELI FAV
    var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
    console.log(idPelisFavoritas);

    for (let i = 0; i < idPelisFavoritas.length; i++) {
        const id = idPelisFavoritas[i];


        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`) 

            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                var divPelisFavoritas = document.querySelector("#divPelisFavoritas");
                divPelisFavoritas.innerHTML += 
                `<a class="agregarPosterPeliFav" href="detalles.html?tipo=peliculas&id=${id}"><img src="https://image.tmdb.org/t/p/original${data.poster_path}"></a>`

            })
            .catch(function(error) {
                console.log(`El error fue: ${error}`);          
            })

            
            
        
    }
    
    
    
}