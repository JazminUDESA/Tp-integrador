window.onload = function() {
    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8` 

    var poster_path = `https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg`

    //FETCH DEL DETALLE DE LA PELI/SERIE
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
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

        
}