// window.onload = function () {
//     var apiKey = `c3dcc0e9ef8f3864ee4f5ed844d151f8`

//     fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`) 
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
    
//             for (let i = 0; i < data.results.length; i++) {
//                 const element = data.results[i];
//                 var divPelis = document.querySelector("#divPelisFavoritas");
//                 var divSeries = document.querySelector("#divSeriesFavoritas");
            
//                 divPelis.innerHTML += `
//                     <div>
//                         <div class="uk-card uk-card-hover uk-card-body">
//                             <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
//                         </div>
//                      </div>
//                     `
//                 divSeries.innerHTML += `
//                     <div class="uk-card uk-card-hover uk-card-body">
//                         <!--<img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">-->
//                     </div>
//                     `
//             } 
//         })
//         .catch (function(error) {
//             console.log(`El error fue: ${error}`);
//         })
// }