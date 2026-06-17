const formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;

    if (nombre.length < 5) {
        alert("El nombre debe tener al menos 5 caracteres.");
        return;
    } else {
        localStorage.setItem('nombre', nombre)
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El email no es valido.");
        return;
    } else {
        localStorage.setItem('email', email)
    }

    if (isNaN(edad) || edad < 18 || edad > 60) {
        alert("La edad debe ser un numero entre 18 y 60.");
        return;
    } else {
        localStorage.setItem('edad', edad)
    }

    if (pais === "") {
        alert("Debe seleccionar un pais.");
        return;
    } else {
        localStorage.setItem('pais', pais)
    }

    if (!terminos) {
        alert("Debe aceptar los terminos y condiciones.");
        return;
    } else {
        localStorage.setItem('terminos', terminos)
    }

    window.location.href="./resultado.html"
});
