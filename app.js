// Cliente WebSocket para la comunicación
const socket = new WebSocket('ws://tu_servidor_web'); // Reemplaza 'tu_servidor_web' con la dirección de tu servidor

socket.addEventListener('open', (event) => {
    console.log('Conexión establecida con el servidor');
});

socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    console.log('Mensaje del servidor:', message);
    // Implementa la lógica del juego aquí
});

socket.addEventListener('close', (event) => {
    if (event.wasClean) {
        console.log('Conexión cerrada de manera limpia');
    } else {
        console.error('Conexión perdida');
    }
});

// Evento al hacer clic en el botón "Iniciar partida"
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    // Envía un mensaje al servidor para iniciar la partida
    const message = { action: 'start_game' };
    socket.send(JSON.stringify(message));
});
