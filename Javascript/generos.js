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
                
                var ul = document.querySelector("#pelisAccion");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
                    </li>
                `
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

                var ul = document.querySelector("#pelisAventura");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisCs");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisComedia");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })

    //FETCH PARA PELIS COMEDIA
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&with_genres=99&language=en`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < 15; index++) {
                const element = data.results[index].poster_path;

                var ul = document.querySelector("#pelisDocu");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisDrama");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisFam");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisRomance");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisTerror");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
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

                var ul = document.querySelector("#pelisThrillers");
                ul.innerHTML += `
                    <li>
                        <img src="https://image.tmdb.org/t/p/original${element}">
                    </li>
                `
            }


        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })



    

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

}