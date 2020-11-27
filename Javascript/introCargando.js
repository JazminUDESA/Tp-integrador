window.onload = function(){
    // Video
    var video = document.querySelector("#video");
    video.onended = function () {
        window.location.href = `home.html`;
    }
}