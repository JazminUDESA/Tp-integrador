window.onload = function() {


    // //Posters: `https://image.tmdb.org/t/p/original/`
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=en-US

    // REQUISITOS DETALLES!
    // PELÍCULAS: Imagen de Portada +
    //            Nombre +
    //            Promedio de votos +
    //            (HARD)Reviews de la película - (ver pregunta)
    // 
    // SERIES: Imagen de la serie +
    //         Nombre de la serie +
    //         Nombre del género (hipervínculo al detalle del genero) +
    //         Fecha de salida + (de estreno?)

    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
   
    var queryStringObj = new URLSearchParams(location.search);    
    var id = queryStringObj.get(`id`);
    var tipo = queryStringObj.get(`tipo`);
        
        if (tipo == "movies") {
            
            armarContenidoMovies (id)
        }
        else {
            armarContenidoSeries (id)
        }


      // D E T A L L E S      P E L Í C U L A S  
    function armarContenidoMovies () {
        
        //FETCH DEL DETALLE DE LA PELI
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`) 

            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                    var section = document.querySelector(".detalleInfo") 
                    section.innerHTML += `
                    <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="">
                    <div class="info">
                        <h2>${data.title}</h2>
                        <h5>${data.genres[0].name}</h5> 
                        <ul id="pri" class="uk-subnav uk-subnav-divider" uk-margin> 
                            <li>Calificación: ${data.vote_average}/10</li>
                            <li>${data.runtime} min.</li>
                            <li>${data.release_date}</li>
                        </ul>
                        <ul class="seg">
                            <li type="none">Director: Christopher Nolan</li>
                            <li type="none">Actores: Christian Bale, Katie Holmes, ...</li>
                        </ul>
                        <p>${data.overview}</p>
                    </div>
                        `
                // chequear el genero!
                // No puedo poner actores ni director??
                // Problema con pelis de horror, drama y thrillers
            })
            .catch(function(error) {
                console.log(`El error fue: ${error}`);          
            })

        // FETCH REVIEWS PELIS
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)

            .then(function(response) {
                return response.json()
            })

            .then(function (data) {
                console.log(data);

                for (let index = 0; index < 5; index++) {
                    const element = data.results[index].author;
                    var contenido = data.results[index].content;
                    
                    var div = document.querySelector(".todaslasreseñas")
                    div.innerHTML += `
                        <article id="reseña" class="uk-comment uk-comment-primary">
                            <header id="paraReview" class="uk-comment-header">
                                <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                    <div class="uk-width-expand">
                                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element}</a></h4>
                                    </div>
                                </div>
                            </header>
                            <div class="uk-comment-body">
                                <p>${contenido}</p>
                            </div>
                        </article>
                    `
                }
            
            })

            .catch(function(error) {
                console.log(`El error fue: ${error}`);
            })

    }
        
        // D E T A L L E S      S E R I E S 
    function armarContenidoSeries () {
        
        //FETCH DEL DETALLE DE LA SERIE
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

                var section = document.querySelector(".detalleInfo")
                section.innerHTML += `
                <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="">
                <div class="info">
                    <h2>${data.name}</h2>
                    <h5>${data.genres[0].name}, ${data.genres[1].name}</h5> 
                    <ul id="pri" class="uk-subnav uk-subnav-divider" uk-margin> 
                        <li>Calificación: ${data.vote_average}/10</li>
                        <li>${data.number_of_seasons} temporadas</li>
                        <li>Primera emisión: ${data.first_air_date}</li>
                    </ul>
                    <ul class="seg">
                        <li type="none">Director: Christopher Nolan</li>
                        <li type="none">Actores: Christian Bale, Katie Holmes, ...</li>
                    </ul>
                    <p>${data.overview}</p>
                </div>
                    `
            // chequear el genero!
            // No puedo poner actores ni director?
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

        // FETCH REVIEWS SERIES
        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)

        .then(function(response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 10; index++) {
                const element = data.results[index].author;
                var contenido = data.results[index].content;

                var div = document.querySelector(".todaslasreseñas")
                div.innerHTML += `
                    <article id="reseña" class="uk-comment uk-comment-primary">
                        <header id="paraReview" class="uk-comment-header">
                            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                <div class="uk-width-expand">
                                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element}</a></h4>
                                </div>
                            </div>
                        </header>
                        <div class="uk-comment-body">
                            <p>${contenido}</p>
                    </div>
                    </article>
                    `
                
            }
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })

    }

    // // D E T A L L E S      G É N E R O S ------> PARA CHEQUEAR

    // var queryStringObj = new URLSearchParams(location.search);

    // var generoSeleccionada = queryStringObj.get(`generos`);

    // var section = document.querySelector(".detalleGenero")

    // //FETCH DEL DETALLE DEL GÉNERO

    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=28&language=en`)

    // .then(function(response) {
    //     return response.json()
    // })

    // .then(function (data) {
    //     console.log(data);

    //     section.innerHTML + `<h2>PAGINA DE TODAS LAS PELÍCULAS DEL GENERO...</h2>`
        
    // })
    // .catch(function(error) {
    //     console.log(`El error fue: ${error}`);
    // })

    

}