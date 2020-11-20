window.onload = function() {

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


    // D E T A L L E S      P E L Í C U L A S
    var queryStringObj = new URLSearchParams(location.search);

    var peliculaSeleccionada = queryStringObj.get(`movies`);

    var section = document.querySelector(".detalleInfo")


    // //Posters: `https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg`

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=en-US

    //FETCH DEL DETALLE DE LA PELI
    fetch(`https://api.themoviedb.org/3/movie/${peliculaSeleccionada}?api_key=${apiKey}&language=en-US`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

                section.innerHTML += `
                <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="">
                <div class="info">
                    <h2>${data.title}</h2>
                    <h5>${data.genres.name}</h5> 
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
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

    // FETCH REVIEWS

    fetch(`https://api.themoviedb.org/3/movie/${peliculaSeleccionada}/reviews?api_key=${apiKey}&language=en-US&page=1`)

        .then(function(response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 5; index++) {
                const element = data.results[index].author;
                var contenido = data.results[index].content;

                section.innerHTML += `
                <div class="reviews">
                    <h2>Reviews</h2>
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
                </div>
                `
            }
            // el array de results dentro de reviews esta vacio, por qué??
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })

    // D E T A L L E S      S E R I E S
    var queryStringObj = new URLSearchParams(location.search);

    var serieSeleccionada = queryStringObj.get(`series`);

    var section = document.querySelector(".detalleInfo")

    //FETCH DEL DETALLE DE LA SERIE
    fetch(`https://api.themoviedb.org/3/tv/${serieSeleccionada}?api_key=${apiKey}&language=en-US`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

                section.innerHTML += `
                <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="">
                <div class="info">
                    <h2>${data.name}</h2>
                    <h5>${data.genres.name}</h5> 
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
            // No puedo poner actores ni director??
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

    // FETCH REVIEWS

    fetch(`https://api.themoviedb.org/3/tv/${serieSeleccionada}/reviews?api_key=${apiKey}&language=en-US&page=1`)

    .then(function(response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);

        for (let index = 0; index < 10; index++) {
            const element = data.results[index].author;
            var contenido = data.results[index].content;

            section.innerHTML += `
            <div class="reviews">
                <h2>Reviews</h2>
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
            </div>
            `
        }
        // el array de results dentro de reviews esta vacio, por qué??
    })
    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })

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