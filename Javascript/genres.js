window.onload = function () {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index].poster_path;
            var ul = document.querySelector("#populares");
            ul.innerHTML += `
                <li class="agregarImagen">
                <img src="https://image.tmdb.org/t/p/original${element}">
                <div class="uk-position-center uk-panel"></div>
                </li>
                       `
            }

        })
    .catch(function (error) {
        console.log(`El error fue: ${error}`);
    })

    



}