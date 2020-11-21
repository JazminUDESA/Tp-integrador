window.onload = function(){
    
    var submit = document.querySelector("#submit");
    var form = document.querySelector("form");
    var logo = document.querySelector("#logoCWSesion");
    var video = document.querySelector("#video");
    
    video.style.display = "none";
        submit.addEventListener("click", function () {
            form.style.display = "none";
            logo.style.display = "none";
            video.style.display = "block";
            video.onended = function () {
                window.location.href = "home.html";
            };
        });
        
}