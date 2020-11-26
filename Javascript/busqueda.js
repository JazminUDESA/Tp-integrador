window.onload = function () {
    // Agregar el nombre al QS de header
    var queryStringObj = new URLSearchParams(location.search);
    var nombreQS = queryStringObj.get(`nombre`);
    var header = document.querySelector(".ulHeader");
    header.innerHTML += `
            <li id="logo">
                <a href="home.html?nombre=${nombreQS}">
                    <img src="img/logo-transparente-cinemaweb.png" alt="ir a inicio">
                </a>
            </li>
            <li id="inicio">
                <a id="inicioHeader" href="home.html?nombre=${nombreQS}">Inicio</a>
            </li>
            <li id="peliculas">
                <a href="generos.html?nombre=${nombreQS}&tipo=peliculas">Películas</a>
            </li>
            <li id="series">
                <a href="generos.html?nombre=${nombreQS}&tipo=series">Series</a>
            </li>
            <li id="favs">
                <a href="favoritos.html?nombre=${nombreQS}" uk-icon="heart"></a>
            </li>
            <li id="buscar">
                <form class="buscador" action="busqueda.html" method="GET">
                    <div class="divInput">
                        <input  class="inputBuscador" type="text" name="busqueda" placeholder="Buscar..."/>
                    </div>
                    <button  class="botonSearch" type="submit"><span id="lupa" href="" uk-icon="search"></span></button>
                </form>
            </li>
            <li id="cuenta">
                <a href="" uk-icon="user"></a>
            </li>
    `

    
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
                        <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
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
                            <img src="https://image.tmdb.org/t/p/original${element.poster_path}">
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
        
        


        
}