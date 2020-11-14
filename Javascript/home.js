window.onload = function(){

    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8` 

    //FETCH DEL CARRUSEL (MÁS VISTAS)
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < 10; index++) {
                const element = data.results[index].backdrop_path;
                var titulo = data.results[index].title;
                   var ul = document.querySelector("#holi");
                   ul.innerHTML += `
                       <li class="agregarImagen">
                           <img src="https://image.tmdb.org/t/p/original${element}">
                           <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 id="fondobanner" class="uk-margin-remove">${titulo}</h3>
                            </div>
                       </li>
                       `
            }
            

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        }) 

    //FETCH DE PELÍCULAS MEJORES CALIFICADAS
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < 6; index++) {
                const element = data.results[index].poster_path;
                var titulo = data.results[index].title;
                var calificacion = data.results[index].vote_average;
                var div = document.querySelector(".califPelis");
                div.innerHTML += `
                <a href="">
                        <img src="https://image.tmdb.org/t/p/original${element}" alt="peliculas mejor calificadas">
                        <h4>${titulo}</h4>
                        <h5>Calificación: ${calificacion}</h5>
                    </a>
                    `
            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

    //FETCH DE SERIES MEJOR CALIFICADAS
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < 6; index++) {
                const element = data.results[index].poster_path;
                var titulo = data.results[index].name;
                var calificacion = data.results[index].vote_average;
                var div = document.querySelector(".califSeries");
                div.innerHTML += `
                <a href="">
                        <img src="https://image.tmdb.org/t/p/original${element}" alt="series mejor calificadas">
                        <h4>${titulo}</h4>
                        <h5>Calificación: ${calificacion}</h5>
                    </a>
                    `
            }       
        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

}