window.onload = function() {
    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    
    var section = `.detalleInfo`

    //Posters: `https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg`

    //FETCH DEL DETALLE DE LA PELI/SERIE
    fetch(`https://api.themoviedb.org/3/movie/340102?api_key=${apiKey}&language=en-US`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);


                   section.innerHTML += `
                   <img src="https://image.tmdb.org/t/p/original/${poster_path}" alt="">
                   <div class="info">
                       <h2>${titulo}</h2>
                       <h5>${genres.name}</h5>
                       <ul id="pri" class="uk-subnav uk-subnav-divider" uk-margin> 
                           <li>${vote_average}</li>
                           <li>2h 5min</li>
                           <li>2008</li>
                       </ul>
                       <ul class="seg">
                           <li type="none">Director: Christopher Nolan</li>
                           <li type="none">Actores: Christian Bale, Katie Holmes, Tu Vieja</li>
                       </ul>
                       <p>Un millonario busca venganza luego de la muerte de sus padres</p>
                   </div>
                   <div class="trailer">
                       <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/NLOp_6uPccQ" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe> -->
                   </div>
                    `
            

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

        
}