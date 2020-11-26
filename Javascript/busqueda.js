window.onload = function () {
    
    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    var queryStringObj = new URLSearchParams(location.search);    
    var busqueda = queryStringObj.get(`busqueda`);

    var inputSearch = document.querySelector(".inputBuscador");
    inputSearch.style.display = "none";
    var lupa = document.querySelector("#lupa");
    lupa.addEventListener("mouseover", function () {
        inputSearch.style.display = "block";
    })
    inputSearch.addEventListener("mouseout", function () {
        inputSearch.style.display = "none";
    })

    
    // Filtros
    var filtros = document.querySelector("#filtros");
    filtros.innerHTML += `<ul id="resulFil" class= "uk-breadcrumb"
                            <li><span class="filtro" href"" id="peliculasFiltro"><a class="link" href="busqueda.html?#resultadosPeliculas">Películas</a></span></li>
                            <li><span class="filtro" href"" id="seriesFiltro"><a class= "link" href="busqueda.html?#resultadosSeries">Series</a></span></li>
                            <li><span class="filtro" href"" id="actoresFiltro"><a class="link" href="busqueda.html?#resultadosActores">Actores</a></span></li>
                        </ul>`

    


                      
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
                        <a href="detalles.html?tipo=peliculas&id=${element.id}"><img src="https://image.tmdb.org/t/p/original${element.poster_path}"></a>
                    `
                }
            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

        
        // ---------------------------------------------SERIES---------------------------------------
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
                            <a href="detalles.html?tipo=peliculas&id=${element.id}"><img src="https://image.tmdb.org/t/p/original${element.poster_path}"></a>
                        `
                    }

            }

        })
        .catch(function(error) {
            console.log(`El error fue: ${error}`);          
        })

    // ---------------------------------------------ACTORES---------------------------------------

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
        
        
    //SPINNER
    function display() {
        var aparecer = document.querySelector(".detalleGenero");
        aparecer.style.visibility = "visible";

    }


    setTimeout(hideElement, 2000)
    var desaparecer = document.querySelector(".seccionSpinner");
    function hideElement() {
        desaparecer.style.display = 'none';
        display();
    }
}
    

