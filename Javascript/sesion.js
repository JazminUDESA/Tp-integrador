window.onload = function(){

    // Formulario
    var nombreUsuario = document.querySelector("#nombre");
    var contrasena = document.querySelector("#contrasena");
    var form = document.querySelector("form")

    var queryStringObj = new URLSearchParams(location.search);
    var nombreQS = queryStringObj.get(`nombre`);

    // Video
    var video = document.querySelector("#video");
    video.onended = function () {
        window.location.href = `home.html?nombre=${nombreQS}`;
    }

}