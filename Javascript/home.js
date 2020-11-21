window.onload = function(){

    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`;

    // BANNER carrusel estrenos
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
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
                                    <a class="linkTituloBanner" href="detalles.html?type=movie&id=${element.id}">
                                        <h2 id="titulo-pelicula" uk-slideshow-parallax="x: 200,0,0">${element.title}</h2>
                                    </a>
                                </div>
                        </div>
                    </li>
                `
                // VER!!
                // if(desktop){
                //     var contenedorBanner = document.querySelector("#contenedorBanner");
                //     contenedorBanner.innerHTML = `<div id="contenedorBanner" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push; autoplay: true; ratio: 8: 3">`
                // }
            }        
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        }) 

        
    // Carrusel trending
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];
                var ulTrendingMovie = document.querySelector("#trendingMovies"); 
                var ulTrendingTV = document.querySelector("#trendingTVs");
                
                if ( element.media_type == "movie"){
                    ulTrendingMovie.innerHTML += 
                    `<li>
                        <a href="detalles.html?type=movie&id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        </a>
                    </li>`
                } else if ( element.media_type == "tv") {
                    ulTrendingTV.innerHTML +=
                        `<li>
                            <a href="detalles.html?type=series&id=${element.id}">
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                            </a>
                        </li>`
                }
                else {
                    ulTrendingMovie.style.backgroundColor = "white";
                }
            }
        })
        .catch (function(error) {
                console.log(`El error fue: ${error}`);
        }) 

    // Películas alabadas por la crítica
        // fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)

    // Series alabadas por la crítica
        // fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)

    // Películas recomendadas para vos

    // Series recomendadas para vos


    
   
    


}
