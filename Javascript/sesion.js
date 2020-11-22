window.onload = function(){
    
    var iniciarSesion = document.querySelector("#submit");
    var form = document.querySelector("form");
    var logo = document.querySelector("#logoCWSesion");
    var video = document.querySelector("#video");

    // Ocultar video intro al inicio
    video.style.display = "none";
    
    // Al iniciar sesión, redirigir a intro video
    iniciarSesion.addEventListener("click", function () {
        form.style.display = "none";
        logo.style.display = "none";
        video.style.display = "block";
        video.onended = function () {
        window.location.href = "home.html";
        return false;
        };
    });
}