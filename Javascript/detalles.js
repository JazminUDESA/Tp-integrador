window.onload = function() {
    
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

    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    var queryStringObj = new URLSearchParams(location.search);    
    var id = queryStringObj.get(`id`);
    var tipo = queryStringObj.get(`tipo`);
        
        if (tipo == "peliculas") {
            
            contenidoMovies ()
        }
        else if (tipo == "series") {

            contenidoSeries ()
        }
        else {
            contenidoGeneros ()
        }
    


      // D E T A L L E S      P E L Í C U L A S  
    function contenidoMovies () {
        
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
                        <h2>
                            ${data.title}
                            <div id="agregarFav" class="uk-icon-link" uk-icon="heart"></div>
                        </h2>
                        <h4 class="pelicula mediaType">Película</h4>
                        <a class="idGenero" href="detalles.html?tipo=generos&id=${data.genres[0].name}">${data.genres[0].name}</a>
                        <p id="especificaciones">Calificación: ${data.vote_average}/10 | ${data.runtime} min. | Estreno: ${data.release_date}</p>
                        <div>
                        <h5>Sinopsis:</h5>
                            <p>${data.overview}</p>
                        </div>
                        `

            // WEB STORAGE pelis :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :)
                var corazon = document.querySelector("#agregarFav");
                var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
                if (idPelisFavoritas == null) {
                    idPelisFavoritas = [];
                }

                // Al cargar la página, si la posición del elemento es mayor a -1 poner el corazón rojo
                if (idPelisFavoritas.indexOf(data.id) > -1) {
                    corazon.classList.add("red");
                }
                // Click en el corazón
                corazon.addEventListener("click", function () {
                    // Si el corazón está en rojo...
                    if (corazon.classList.contains("red")) {
                        this.classList.remove("red");
                        this.classList.add("grey");

                        var indexPelis = idPelisFavoritas.indexOf(data.id);
                        idPelisFavoritas.splice(indexPelis, 1);
                        console.log(idPelisFavoritas);
                    }
                    // Si el corazón no está en rojo...
                    else{
                        this.classList.remove("grey");
                        this.classList.add("red");


                        idPelisFavoritas.push(data.id);
                        localStorage.setItem("idPelisFavs", JSON.stringify(idPelisFavoritas));
                        console.log(idPelisFavoritas);
                    }
                });
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
                    
                    var divsinReseña = document.querySelector(".sinReseña")

                    if (data.results.length > 0) {
                        divsinReseña.style.display = "none";
                    }

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

        // FETCH RECOMENDADOS

        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var carruselRecomendadas = document.querySelector("#carruselRecomendadas");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                var divsinRecomendaciones = document.querySelector(".sinRecomendaciones")

                if (data.results.length > 0) {
                    divsinRecomendaciones.style.display = "none";
                }

                carruselRecomendadas.innerHTML += `
                    <li>
                        <a href="detalles.html?tipo=peliculas&id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        </a>
                    </li>
                    `

            }
        })
        
    }
        
        // D E T A L L E S      S E R I E S 
    function contenidoSeries () {
        
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
                    <h2>
                        ${data.name}
                        <div id="agregarFav" class="uk-icon-link" uk-icon="heart"></div>
                    </h2>
                    <h4 class="seriemediaType">Serie</h4>
                    <a class="idGenero" href="detalles.html?tipo=generos&id=${data.genres[0].name}">${data.genres[0].name}</a> 
                    <p id="especificaciones">Calificación: ${data.vote_average}/10 | ${data.number_of_seasons} temporadas | Primera emisión: ${data.first_air_date}</p>
                    <div>
                        <h5>Sinopsis:</h5>
                        <p>${data.overview}</p>
                    </div>
                </div>
                `
            // WEB STORAGE series :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :)
            var corazon2 = document.querySelector("#agregarFav");
            var idSeriesFavoritas = JSON.parse(localStorage.getItem("idSeriesFavs"));
            if (idSeriesFavoritas == null) {
                idSeriesFavoritas = [];
            }

            // Al cargar la página, si la posición del elemento es mayor a -1 poner el corazón rojo
            if (idSeriesFavoritas.indexOf(data.id) > -1) {
                corazon2.classList.add("red");
            }
            // Click en el corazón
            corazon2.addEventListener("click", function () {
                // Si el corazón está en rojo...
                if (corazon2.classList.contains("red")) {
                    this.classList.remove("red");
                    this.classList.add("grey");

                    var indexSeries = idSeriesFavoritas.indexOf(data.id);
                    idSeriesFavoritas.splice(indexSeries, 1);
                    console.log(idSeriesFavoritas);
                }
                // Si el corazón no está en rojo...
                else {
                    this.classList.remove("grey");
                    this.classList.add("red");


                    idSeriesFavoritas.push(data.id);
                    localStorage.setItem("idSeriesFavs", JSON.stringify(idSeriesFavoritas));
                    console.log(idSeriesFavoritas);
                }
            });
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
                const autor = data.results[index].author;
                var contenido = data.results[index].content;
                 
                var div = document.querySelector(".todaslasreseñas")
                var divsinReseña = document.querySelector(".sinReseña")

                if (data.results.length > 0) {
                    divsinReseña.style.display = "none";
                }

                div.innerHTML += `
                    <article id="reseña" class="uk-comment uk-comment-primary">
                        <header id="paraReview" class="uk-comment-header">
                            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                <div class="uk-width-expand">
                                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${autor}</a></h4>
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

        // FETCH RECOMENDADOS

        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var carruselRecomendadas = document.querySelector("#carruselRecomendadas");
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                var divsinRecomendaciones = document.querySelector(".sinRecomendaciones")

                if (data.results.length > 0) {
                    divsinRecomendaciones.style.display = "none";
                }

                carruselRecomendadas.innerHTML += `
                    <li>
                        <a href="detalles.html?tipo=series&id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        </a>
                    </li>
                    `

            }
        })

    }

        // D E T A L L E S      G E N E R O S
    function contenidoGeneros () {

        
        
        //FETCH DEL DETALLE DE GENEROS - no trae el nombre del genero, si hago genero por genero es un monton
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}&language=en`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index].poster_path;

                var sectionGenero = document.querySelector(".detalleGenero")
                sectionGenero.innerHTML += `
                <!-- <h2>Título género</h2> -->
                <div class="imagenesGeneros">
                    <img src="https://image.tmdb.org/t/p/original/${element}" alt="">
                </div>
                `    
            }
                
        })

        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

        var divReviews = document.querySelector(".reviews");
        divReviews.style.display = "none";

        var section = document.querySelector(".detalleInfo") 
        section.style.display = "none";

    }

    // // D E T A L L E S      G É N E R O S ------> PARA CHEQUEAR

    // var queryStringObj = new URLSearchParams(location.search);

    // var serieSeleccionada = queryStringObj.get(`series`);

    // var section = document.querySelector(".detalleInfo")

    // //FETCH DEL DETALLE DE LA SERIE
    // fetch(`https://api.themoviedb.org/3/tv/${serieSeleccionada}?api_key=${apiKey}&language=en-US`) 

    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         console.log(data);

    //             section.innerHTML += `
    //             <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="">
    //             <div class="info">
    //                 <h2>${data.name}</h2>
    //                 <h5>${data.genres.name}</h5> 
    //                 <ul id="pri" class="uk-subnav uk-subnav-divider" uk-margin> 
    //                     <li>Calificación: ${data.vote_average}/10</li>
    //                     <li>${data.number_of_seasons} temporadas</li>
    //                     <li>Primera emisión: ${data.first_air_date}</li>
    //                 </ul>
    //                 <ul class="seg">
    //                     <li type="none">Director: Christopher Nolan</li>
    //                     <li type="none">Actores: Christian Bale, Katie Holmes, ...</li>
    //                 </ul>
    //                 <p>${data.overview}</p>
    //             </div>
    //                 `
    //         // chequear el genero!
    //         // No puedo poner actores ni director??
    //     })
    //     .catch(function(error) {
    //         console.log(`El error fue: ${error}`);          
    //     })

    // // FETCH REVIEWS

    // fetch(`https://api.themoviedb.org/3/tv/${serieSeleccionada}/reviews?api_key=${apiKey}&language=en-US&page=1`)

    // .then(function(response) {
    //     return response.json()
    // })

    // .then(function (data) {
    //     console.log(data);

    //     for (let index = 0; index < 10; index++) {
    //         const element = data.results[index].author;
    //         var contenido = data.results[index].content;

    //         section.innerHTML += `
    //         <div class="reviews">
    //             <h2>Reviews</h2>
    //             <article id="reseña" class="uk-comment uk-comment-primary">
    //                 <header id="paraReview" class="uk-comment-header">
    //                     <div class="uk-grid-medium uk-flex-middle" uk-grid>
    //                         <div class="uk-width-expand">
    //                             <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${element}</a></h4>
    //                         </div>
    //                     </div>
    //                 </header>
    //                 <div class="uk-comment-body">
    //                     <p>${contenido}</p>
    //                 </div>
    //             </article>
    //         </div>
    //         `
    //     }
    //     // el array de results dentro de reviews esta vacio, por qué??
    // })
    // .catch(function(error) {
    //     console.log(`El error fue: ${error}`);
    // })

    // // // D E T A L L E S      G É N E R O S ------> PARA CHEQUEAR

    // // var queryStringObj = new URLSearchParams(location.search);

    // // var generoSeleccionada = queryStringObj.get(`generos`);

    // // var section = document.querySelector(".detalleGenero")

    // // //FETCH DEL DETALLE DEL GÉNERO

    // // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=28&language=en`)

    // // .then(function(response) {
    // //     return response.json()
    // // })

    // // .then(function (data) {
    // //     console.log(data);

    // //     section.innerHTML + `<h2>PAGINA DE TODAS LAS PELÍCULAS DEL GENERO...</h2>`
        
    // // })
    // // .catch(function(error) {
    // //     console.log(`El error fue: ${error}`);
    // // })

    

}