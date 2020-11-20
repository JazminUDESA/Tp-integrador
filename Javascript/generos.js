window.onload = function () {

    var apiKey = "c3dcc0e9ef8f3864ee4f5ed844d151f8"
    
    //FETCH DEL CARRUSEL (MÁS POPULARES - PELICULAS)
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index].backdrop_path;
                var titulo = data.results[index].title;
                var ul = document.querySelector("#pelisPopulares");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
                        <div id="titulos" class="uk-position-center-left uk-position-small uk-text-center uk-light">
                            <h2 id="titulo-banner">Más vistas</h3>
                            <h2 id="titulo-pelicula" class="uk-margin-remove">${titulo}</h2>
                        </div>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    
    //https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=28

    //FETCH PARA PELIS ACCION
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=28&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisAccion");
                ul.innerHTML += `
                                <li>
                                    <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                                </li>    
                `
                        /*<div class="uk-animation-toggle" tabindex = "0" >
                            <div class="uk-card uk-animation-scale-up">
                                <li>
                                    <img src="https://image.tmdb.org/t/p/original${element}">
                                </li>    
                            </div>
                        </div>*/
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS AVENTURA
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=12&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;
                
                var ul = document.querySelector("#pelisAventura");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS CIENCIA FICCION
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=878&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisCs");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS COMEDIA
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=35&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisComedia");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS DOCUMENTALES
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=99&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisDocu");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    
    //FETCH PARA PELIS DRAMA
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=18&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisDrama");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS FAMILIARES
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10751&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisFam");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS ROMANCE
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10749&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisRomance");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS TERROR
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=27&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisTerror");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })
    
    //FETCH PARA PELIS THRILLERS
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=53&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#pelisThrillers");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?movies=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })



//-----------------------------------------------------------------------------------------------------------    

    //FETCH DEL CARRUSEL (MÁS POPULARES - SERIES)
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 18; index++) {
                const element = data.results[index].backdrop_path;
                var titulo = data.results[index].name;
                var ul = document.querySelector("#seriesPopulares");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
                        <div id="titulos" class="uk-position-center-left uk-position-small uk-text-center uk-light">
                            <h2 id="titulo-banner">Más vistas</h3>
                            <h2 id="titulo-pelicula" class="uk-margin-remove">${titulo}</h2>
                        </div>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })


    //FETCH PARA SERIES ACCION Y AVENTURAS
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10759&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesAccion");
                ul.innerHTML += `
                                <li>
                                    <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                                </li>    
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES CS FICCION
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10765&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesCs");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES COMEDIA
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=35&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesComedia");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES CRIMEN
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=80&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesCrimen");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES DOCUMENTALES
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=99&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesDocu");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })


    //FETCH PARA SERIES DRAMA
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=18&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesDrama");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES FAMILIARES
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10751&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesFam");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES MISTERIO
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=9648&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesMisterio");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES REALITY TV Y ENTREVISTAS
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10767&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesReality");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA SERIES TELENOVELA
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=10766&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;
                var elId = data.results[index].id;

                var ul = document.querySelector("#seriesTelenovela");
                ul.innerHTML += `
                    <li>
                        <a href="detalles.html?series=${elId}"><img src="https://image.tmdb.org/t/p/original${element}"></a>
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })


}