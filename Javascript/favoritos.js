window.onload = function () {
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    // ID PELI FAV
    var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
    console.log(idPelisFavoritas);

    for (let i = 0; i < idPelisFavoritas.length; i++) {
        const id = idPelisFavoritas[i];

        var divPelisFavoritas = document.querySelector("#divPelisFavoritas");
        divPelisFavoritas.innerHTML += 
        `<a class="agregarPosterPeliFav" href="detalles.html?tipo=peliculas&id=${id}"></a>`
    }
    
    // PÓSTER PELI FAV
    var posterPelisFavoritas = JSON.parse(localStorage.getItem("posterPelisFavs"));
    console.log(posterPelisFavoritas);
    
    for (let i = 0; i < posterPelisFavoritas.length; i++) {
        const poster = posterPelisFavoritas[i];
        
        var agregarPosterPeliFav = document.querySelector(".agregarPosterPeliFav");
        agregarPosterPeliFav.innerHTML += `<img src="https://image.tmdb.org/t/p/original${poster}">`
    }
    

    
        
        
        // `<div>
        //     <div class="uk-card uk-card-hover uk-card-body">
        //         <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
        //     </div>
        //  </div>`
    // fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`) 
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    
    //         for (let i = 0; i < data.results.length; i++) {
    //             const element = data.results[i];
    //             var divPelis = document.querySelector("#divPelisFavoritas");
    //             var divSeries = document.querySelector("#divSeriesFavoritas");
            
    //             divPelis.innerHTML += `
    //                 <div>
    //                     <div class="uk-card uk-card-hover uk-card-body">
    //                         <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
    //                     </div>
    //                  </div>
    //                 `
    //             divSeries.innerHTML += `
    //                 <div class="uk-card uk-card-hover uk-card-body">
    //                     <!--<img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">-->
    //                 </div>
    //                 `
    //         } 
    //     })
    //     .catch (function(error) {
    //         console.log(`El error fue: ${error}`);
    //     })
}