// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;

    // Verificamos si el nombre está vacío
    if (nombre === '') {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Agregamos el nombre a la lista
    listaDeAmigos.push(nombre);

    // Limpiamos el input
    document.getElementById('amigo').value = '';

    // Actualizamos la lista visible en la página
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionamos un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoAleatorio = listaDeAmigos[indiceAleatorio];

    // Mostramos el resultado
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoAleatorio}`;
