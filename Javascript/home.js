window.onload = function(){

    // Buscar mobile
    var inputSearch = document.querySelector(".inputBuscador");
    var lupa = document.querySelector("#lupa");

    if (screen.width >= 420 && screen.width <= 1023){
        lupa.style.display = "none";
        inputSearch.style.display = "none";
    }

    // Buscar desktop
    inputSearch.style.visibility = "hidden";
    
    // Mouse over
    lupa.addEventListener("mouseover", function(){
        inputSearch.style.visibility = "visible";
        inputSearch.style.display = "block";
    })
    
    // Mouse out
    inputSearch.addEventListener("mouseout", function () {
        inputSearch.style.display = "none";
    });
    
    
    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`;

    // Banner carrusel estrenos (https://developers.themoviedb.org/3/movies/get-now-playing)
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            
            for (let index = 0; index < 5; index++) {
                const element = data.results[index];

                var ul = document.querySelector("#banner");
                ul.innerHTML +=
                `
                    <li>
                        <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                            <img id="posterBanner" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="estreno" uk-cover>
                        </div>
                        
                        <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0.7; backgroundColor: #000000"></div>
                        
                        <div class="uk-position-bottom uk-position-bottom uk-text-left">
                                <div id="titulosBanner" uk-slideshow-parallax="scale: 1,1,0.8">
                                    <h4 id="titulo-estrenos" uk-slideshow-parallax="x: 400,0,0;">Estreno</h4>
                                    <a class="linkTituloBanner" href="detalles.html?tipo=peliculas&id=${element.id}">
                                        <h2 id="titulo-pelicula" uk-slideshow-parallax="x: 200,0,0">${element.title}</h2>
                                    </a>
                                </div>
                        </div>
                    </li>
                `
            }        
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        }) 
        





        
    // Carrusel trending (https://developers.themoviedb.org/3/trending/get-trending)
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];
                var ulTrendingMovie = document.querySelector("#trendingMovies"); 
                var ulTrendingTV = document.querySelector("#trendingTV");
                
                if ( element.media_type == "movie"){
                    ulTrendingMovie.innerHTML += 
                    `<li>
                        <a href="detalles.html?tipo=peliculas&id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        </a>
                    </li>`
                } else if ( element.media_type == "tv") {
                    ulTrendingTV.innerHTML +=
                        `<li>
                            <a href="detalles.html?tipo=series&id=${element.id}">
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                            </a>
                        </li>`
                }
            }
        })
        .catch (function(error) {
                console.log(`El error fue: ${error}`);
        }) 

    // Películas alabadas por la crítica (https://developers.themoviedb.org/3/movies/get-top-rated-movies)
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var contenedorCriticaMovies = document.querySelector("#criticaMovies");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];
                
                contenedorCriticaMovies.innerHTML += 
                    `<li>
                        <a href="detalles.html?tipo=peliculas&id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        </a>
                    </li>`
            }
        })
    

    // Series alabadas por la crítica (https://developers.themoviedb.org/3/tv/get-top-rated-tv)
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var contenedorCriticaSeries = document.querySelector("#criticaTV");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                contenedorCriticaSeries.innerHTML +=
                    `<li>
                            <a href="detalles.html?tipo=peliculas&id=${element.id}">
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                            </a>
                        </li>`
            }
        })
        

    // Recomendación películas con ID de Avengers (https://developers.themoviedb.org/3/movies/get-movie-recommendations)
    fetch(`https://api.themoviedb.org/3/movie/299534/recommendations?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var recomendadasMovies = document.querySelector("#recomendadasMovies");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                recomendadasMovies.innerHTML +=
                    `<li>
                            <a href="detalles.html?tipo=peliculas&id=${element.id}">
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                            </a>
                        </li>`
            }
        })

    // Recomendación series con ID de "The Queen's Gambit" (https://developers.themoviedb.org/3/tv/get-tv-recommendations)
    fetch(`https://api.themoviedb.org/3/tv/87739/recommendations?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var recomendadasTV = document.querySelector("#recomendadasTV");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                recomendadasTV.innerHTML +=
                    `<li>
                            <a href="detalles.html?tipo=peliculas&id=${element.id}">
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                            </a>
                        </li>`
            }
        })

    var inicioHeader = document.querySelector("#inicioHeader");
    inicioHeader.style.color = "red";

}
