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
    //         Nombre de la serie +Nombre del género (h
    //         ipervínculo al detalle del genero) +
    //         Fecha de salida + (de estreno?)

    
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
                        <a class="idGenero" href="detalles.html?tipo=generos&id=${data.genres[0].name}">${data.genres[0].name}</a>
                        

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

                // WEB STORAGE 
                var corazon = document.querySelector("#agregarFav");
                var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
                var idPelis = data.id;
                
                function agregarAFav() { 
                    
                    // ID DE PELÍCULA FAV
                    if (idPelisFavoritas == null){
                        idPelisFavoritas = [];
                    }
                    idPelisFavoritas.push(idPelis);
                    localStorage.setItem("idPelisFavs", JSON.stringify(idPelisFavoritas));
                    console.log(idPelisFavoritas);
                    
                }
                
                function sacarDeFav() {
                    
                    for (let i = 0; i < idPelisFavoritas.length; i++) {
                        const element = idPelisFavoritas[i];
                        
                        
                        var indexPelis = idPelisFavoritas.findIndex(item => item.idPelis === idPelis)
                        idPelisFavoritas.splice(indexPelis,1)
                            console.log(idPelisFavoritas);
                    }

                    
                }

                corazon.addEventListener("click", function () {
                    
                    if (this.classList.contains("red")) {
                        // alert("sacar peli")
                        this.classList.remove("red");
                        this.classList.add("grey");
                        sacarDeFav();
                    }
                    else {
                        this.classList.remove("grey");
                        this.classList.add("red");
                        // alert("poner peli");

                        agregarAFav();
                    }
                        
                    
                    // if (localStorage.getItem("is_reloaded") && agregarAFav()) {
                    //     alert('Reloaded!');
                    //     corazon.classList.remove("grey")
                    //     corazon.classList.add("red")
                    // }
                    // else {
                    //     corazon.classList.remove("red")
                    //     corazon.classList.add("grey")
                    // }
                    
                    
                });



//                     First step is to check sessionStorage for some pre-defined value and if it exists alert user:


// Second step is to set sessionStorage to some value (for example true):

// sessionStorage.setItem("is_reloaded", true);
// Session values kept until page is closed so it will work only if page reloaded in a new tab with the site. You can also keep reload count the same way.



                // ---------------------
                // ID DE PELÍCULA FAV
                // var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
                //     if (idPelisFavoritas == null){
                //         idPelisFavoritas = [];
                //     }
                //     idPelisFavoritas.push(data.id);
                //     localStorage.setItem("idPelisFavs", JSON.stringify(idPelisFavoritas));
                //     console.log(idPelisFavoritas);
                // ---------------------




                // removeEventListener('click', agregarFAV);
                // traer el elemento con GET (para ver si hay elementos en el array)
                    // si no hay: crear un array vacío
                    // si hay algo: agregar el elemento al array: SET
                // en la página de favs, recorrer el array y mostrar lo que hay adentro: GET

  


                // chequear el genero!
                // No puedo poner actores ni director??
                // Problema con pelis de horror, drama y thrillers
                // window.localStorage.getItem("peliculasFav");
                // console.log(localStorage.getItem("peliculasFav"));
                // var arrayPelisFavoritas = ["avengers", "frozen"];
                // window.localStorage.setItem("peliculaFav", JSON.stringify(arrayPelisFavoritas));
                // var arrayTotalPelisFavoritas = JSON.parse(localStorage.getItem("peliculasFav"));
                // console.log(arrayTotalPelisFavoritas);
                
                // arrayPelisFavoritas.push(data.poster_path);
                // console.log(arrayPelisFavoritas);
                // JSON.parse(window.localStorage.getItem("peliculasFav"));
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
                    <a class="idGenero" href="detalles.html?tipo=generos&id=${data.genres[0].name}">${data.genres[0].name}</a> 
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
                    // WEB STORAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    var agregarAFav = document.querySelector("#agregarFav");
                        
                    agregarAFav.addEventListener("click", function () {
                        this.style.color = "red";            
                        
                        window.localStorage.getItem("peliculasFav");
                        console.log(localStorage.getItem("peliculasFav"));
                        var arrayPelisFavoritas = [];
                        window.localStorage.setItem("peliculaFav", JSON.stringify(arrayPelisFavoritas));
    
                        JSON.parse(window.localStorage.getItem("peliculasFav"));
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

        // D E T A L L E S      G E N E R O S
    function contenidoGeneros () {

        
        
        //FETCH DEL DETALLE DE GENEROS - no trae el nombre del genero, si hago genero por genero es un monton
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${id}&language=en`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            var sectionGenero = document.querySelector(".detalleGenero")
            sectionGenero.innerHTML += `
            <h2>Título género</h2>
            <div class="imagenesGeneros">
                <img src="https://image.tmdb.org/t/p/original/${data.results[0].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[1].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[2].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[3].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[4].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[5].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[6].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[7].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[8].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[9].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[10].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[11].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[12].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[13].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[15].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[16].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[17].poster_path}" alt="">
                <img src="https://image.tmdb.org/t/p/original/${data.results[18].poster_path}" alt="">
            </div>
            `
                
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