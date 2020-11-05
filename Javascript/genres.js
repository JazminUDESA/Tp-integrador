window.onload = function () {

    var apiKey = "c3dcc0e9ef8f3864ee4f5ed844d151f8"

    //CARRUSEL PELICULAS MAS POPULARES
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index].backdrop_path;

                var ul = document.querySelector("#peliculas-popular");

                ul.innerHTML += `
                <li class="uk-panel">
                    <img src="https://image.tmdb.org/t/p/w500${element}">
                    <div class="uk-position-center uk-panel"></div>
                </li>`
            }
        })
        .catch(function (error) {
            console.error(error);
        });
    

    //CARRUSEL SERIES MAS POPULARES
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=en-US&page=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index].backdrop_path;

                var ul = document.querySelector("#series-popular");

                ul.innerHTML += `
                <li class="uk-panel">
                    <img src="https://image.tmdb.org/t/p/w500${element}">
                    <div class="uk-position-center uk-panel"></div>
                </li>`
            }
        })
        .catch(function (error) {
            console.error(error);
        });

    

}