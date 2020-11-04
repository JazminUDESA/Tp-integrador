window.onload = function(){

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8`) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            //consultar como hacer para que te aparezca un objeto del array por cada lista
            //(y no todos los objetos dentro de una lista)
            // for (let index = 0; index < 10; index++) {
            //     const element = data.results[index].poster_path;
            //     var li = document.querySelector(".agregarImagen");
            //    li.innerHTML += `<img src="https://image.tmdb.org/t/p/original${element}">`
                
            // }

            for (let index = 0; index < 10; index++) {
                const element = data.results[index].poster_path;
                   var ul = document.querySelector("#holi");
                   ul.innerHTML += `
                       <li class="agregarImagen">
                           <img src="https://image.tmdb.org/t/p/original${element}">
                           <div class="uk-position-center uk-panel"></div>
                       </li>
                       `
            }

        })        
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        }) 



}