const formulario = document.getElementById('miFormulario');
const mensajeError = document.getElementById('error');

formulario.addEventListener('submit', function(evento){

    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;

    let errores = [];

    if(nombre.length < 5) {
        errores.push("El nombre debe tener al menos 5 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        errores.push("El email no es valido.");
    }

    if(isNaN(edad) || edad < 18 || edad >60){
        errores.push("La edad debe ser un numero entre 18 y 60.");
    }

    if(pais === ""){
        errores.push("Debe seleccionar un pais.");
    }

    if(!terminos){
        errores.push("Debe aceptar los terminos y condiciones.");
    }

    if(errores.length > 0){
        mensajeError.innerHTML = errores.join("<br>");
    } else{
        mensajeError.innerHTML = "";

        alert("!Todo listo! Enviando datos...");

        window.location.href = `resultado.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&edad=${edad}&pais=${encodeURIComponent(pais)}`;
    }
});
