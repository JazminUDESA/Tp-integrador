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