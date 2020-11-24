window.onload = function () {
    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    var queryStringObj = new URLSearchParams(location.search);    
    var busqueda = queryStringObj.get(`busqueda`);

    // ---------------------------------------------PELICULAS---------------------------------------
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=${busqueda}`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];

                if (element.poster_path !== null) {
                    var resultadosPeliculas = document.querySelector("#resultadosPeliculas")
                    resultadosPeliculas.innerHTML += `
                        <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                    `
                }

            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=1&query=${busqueda}`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];

                    if (element.poster_path !== null) {
                        var resultadosSeries = document.querySelector("#resultadosSeries");
                        resultadosSeries.style.backgroundColor = "transparent"
                        resultadosSeries.innerHTML += `
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
                        `
                    }

            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

    // ---------------------------------------------SERIES---------------------------------------

        fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&page=1&query=${busqueda}`) 

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];

                    if (element.profile_path !== null) {
                        var resultadosActores = document.querySelector("#resultadosActores")
                        resultadosActores.innerHTML += `
                            <img src="https://image.tmdb.org/t/p/original${element.profile_path}">
                    `
                    }

            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })
        
        
}