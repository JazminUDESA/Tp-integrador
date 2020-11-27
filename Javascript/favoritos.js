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

    // Título favoritos con nombre usuario
    var tituloFavoritosDe = document.querySelector("#tituloFavoritosDe");
    tituloFavoritosDe.innerHTML = `Favoritos de ${sessionStorage.getItem('nombreUsuario')}`;
    // document.getElementById('button2').innerHTML = 'You have ' +  + ' coins';
    // document.getElementById('button2').innerHTML = 'You have ' + sessionStorage.getItem('nombreUsuario') + ' coins';



    var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`
    
    // Películas favoritas
    var idPelisFavoritas = JSON.parse(localStorage.getItem("idPelisFavs"));
    console.log(idPelisFavoritas);

    for (let i = 0; i < idPelisFavoritas.length; i++) {
        const id = idPelisFavoritas[i];


        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`) 

            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                var divPelisFavoritas = document.querySelector("#divPelisFavoritas");
                divPelisFavoritas.innerHTML += 
                `<a class="agregarPosterPeliFav" href="detalles.html?tipo=peliculas&id=${id}">
                <img src="https://image.tmdb.org/t/p/original${data.poster_path}">
                </a>`;

            })
            .catch(function(error) {
                console.log(`El error fue: ${error}`);          
            })    
    }
    
    // Series favoritas
    var idSeriesFavoritas = JSON.parse(localStorage.getItem("idSeriesFavs"));
    console.log(idSeriesFavoritas);

    for (let i = 0; i < idSeriesFavoritas.length; i++) {
        const id = idSeriesFavoritas[i];


        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`) 

            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);

                var divSeriesFavoritas = document.querySelector("#divSeriesFavoritas");
                divSeriesFavoritas.innerHTML += 
                `<a class="agregarPosterSerieFav" href="detalles.html?tipo=series&id=${id}">
                    <img src="https://image.tmdb.org/t/p/original${data.poster_path}">
                </a>`;
            })
            .catch(function(error) {
                console.log(`El error fue: ${error}`);          
            })    
    }
}