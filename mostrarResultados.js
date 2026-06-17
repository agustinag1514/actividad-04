const nombre = localStorage.getItem('nombre');
const mail = localStorage.getItem('mail');
const edad = localStorage.getItem('edad');
const pais = localStorage.getItem('pais');
const terminos = localStorage.getItem('terminos');

function mostrarResultados() {
    const container = document.querySelector('.resultados-container');
    container.innerHTML = '';

    const div = document.createElement('div');

    div.innerHTML = `
            <p>Nombre: ${nombre} </p>
            <p>E-Mail: ${mail} </p>
            <p>Edad: ${edad} </p>
            <p>Pais: ${pais} </p>
            <p>Terminos: ${terminos ? 'Aceptado' : 'Rechazado'} </p>`;

    container.appendChild(div);
 }

mostrarResultados();

