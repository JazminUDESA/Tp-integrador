window.onload = function(){

    
        // Formulario
        console.log(`Usuario: ${sessionStorage.getItem('nombreUsuario')}`);
        var nombreIngresadoUsuario = document.querySelector('#nombre');
        nombreIngresadoUsuario.onkeyup = function () {
            var valorInputNombre = this.value;
            sessionStorage.setItem('nombreUsuario', valorInputNombre);
            console.log(`Usuario: ${sessionStorage.getItem('nombreUsuario')}`);
        };
}