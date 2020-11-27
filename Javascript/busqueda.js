window.onload = function () {
    // BUSCAR MOBILE
    if (screen.width >= 420 && screen.width <= 1023) {
        var inputSearch = document.querySelector(".inputBuscador");
        var lupa = document.querySelector("#lupa");
        var contenedorBuscador = document.querySelector(".buscador");
        var headerCambiar = document.querySelector("header");
        var ulHeaderCambiar = document.querySelector("ulHeader")

        var botonSearch = document.querySelector(".botonSearch");
        botonSearch.classList.add("botonSearchMobile")

        inputSearch.style.display = "none";


        // Click en lupa (abrir input)
        var hiceTodo = false;
        botonSearch.addEventListener("click", function clickLupa(event) {
            if (hiceTodo) {
                hiceTodo = false;
                return;
            }

            event.preventDefault();

            headerCambiar.classList.add("headerRelative");
            inputSearch.style.display = "flex";
            botonSearch.classList.add("botonSearchMobileInputAbierto");
            inputSearch.classList.remove("inputBuscador");
            inputSearch.classList.add("inputBuscadorMobile");

            hiceTodo = true;
            botonSearch.trigger("click");
        })
    }
    // BUSCAR DESKTOP
    else {
        var lupa = document.querySelector("#lupa");
        var inputSearch = document.querySelector(".inputBuscador");
        inputSearch.classList.add("inputBuscadorDesktop");
        var botonSearch = document.querySelector(".botonSearch");
        botonSearch.classList.add("botonSearchDesktop")
        inputSearch.style.visibility = "hidden";

        // Mouse over
        lupa.addEventListener("mouseover", function () {
            inputSearch.style.visibility = "visible";
            inputSearch.style.display = "block";
        })

        // Mouse out
        inputSearch.addEventListener("mouseout", function () {
            inputSearch.style.display = "none";
        });
    }

    // Click en cuenta
    var usuario = document.querySelector("#cuenta");
    usuario.addEventListener("click", function (e) {
        var preguntaCerrarSesion = confirm("¿Estás seguro que deseas cerrar sesión?");
        if (preguntaCerrarSesion) {
            sessionStorage.clear("nombreUsuario");
            console.log(`Usuario: ${sessionStorage.getItem('nombreUsuario')}`);
            window.location.href = "sesion.html"
        }
        else {
            console.log(`El usuario @${sessionStorage.getItem('nombreUsuario')} no cerró sesión`);
            return false;
        }

    })


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
    
    resultadosPeliculas();
    resultadosSeries();
    resultadosActores();
    
    var filtroQS = queryStringObj.get(`filtro`);
    var seccionPelis = document.querySelector("#peliculasFiltro");
    var seccionSeries = document.querySelector("#seriesFiltro");
    var seccionActores = document.querySelector("#actoresFiltro");
    filtros.addEventListener("click", function () {
        if (filtroQS == "peliculas") {
            resultadosPeliculas();
            seccionSeries.style.display = none;
            seccionActores.style.display = none;
        }
        else if (filtroQS == "series") {
            resultadosSeries();
            seccionPelis.style.display = none;
            seccionActores.style.display = none;
        }
        else {
            resultadosActores();
            seccionSeries.style.display = none;
            seccionPelis.style.display = none;
        }
    })
    // ---------------------------------------------PELICULAS---------------------------------------
    function resultadosPeliculas () {
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
    }

        
        // ---------------------------------------------SERIES---------------------------------------
        function resultadosSeries () {
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
        }

    // ---------------------------------------------ACTORES---------------------------------------
    function resultadosActores () {
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
        
    // Filtros
    var filtros = document.querySelector("#filtros");
    filtros.innerHTML += `<ul id="resulFil" class= "uk-breadcrumb"
                            <li><span class="filtro" href"" id="peliculasFiltro"><a class="link" href="busqueda.html?filtro=peliculas">Películas</a></span></li>
                            <li><span class="filtro" href"" id="seriesFiltro"><a class= "link" href="busqueda.html?filtro=series">Series</a></span></li>
                            <li><span class="filtro" href"" id="actoresFiltro"><a class="link" href="busqueda.html?filtro=actores">Actores</a></span></li>
                        </ul>`

    

    
    
    
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
    

