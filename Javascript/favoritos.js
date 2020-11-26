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
    // Buscar mobile
    var inputSearch = document.querySelector(".inputBuscador");
    var lupa = document.querySelector("#lupa");

    if (screen.width >= 420 && screen.width <= 1023){
        lupa.style.display = "none";
        inputSearch.style.display = "none";
    }

    // Buscar desktop
    inputSearch.style.visibility = "hidden";
    
    // Mouse over
    lupa.addEventListener("mouseover", function(){
        inputSearch.style.visibility = "visible";
        inputSearch.style.display = "block";
    })
    
    // Mouse out
    inputSearch.addEventListener("mouseout", function () {
        inputSearch.style.display = "none";
    });


    // Título favoritos de NOMBRE
    var queryStringObj = new URLSearchParams(location.search);
    var nombreQS = queryStringObj.get(`nombre`);
    var tituloFavoritosDe = document.querySelector("#tituloFavoritosDe");
    tituloFavoritosDe.innerHTML = `Favoritos de ${nombreQS}`;


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
    
    // poner el corazoncito rojo (porque esta en la pag de favs)
    var favsHeader = document.querySelector("#favsHeader");
    favsHeader.style.color = "grey"; 

    
}