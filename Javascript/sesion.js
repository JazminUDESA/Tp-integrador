window.onload = function () {

    var video = document.querySelector("#video");
    var form = document.querySelector("form");
    form.addEventListener("submit", function () {
        video.innerHTML += `<source src="video/introVideoCW.mp4" type="video/mp4">
                            <source src="video/introVideoCW.ogg" type="video/ogg">`
        form.style.display = "none";
    });
    video.onended = function (){
        window.location.replace("home.html");
    };
}