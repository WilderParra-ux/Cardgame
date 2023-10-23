/*// Cliente WebSocket para la comunicación
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
*/
// Representa una baraja de cartas
const deck = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

// Función para barajar la baraja de cartas
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Función para repartir una carta
function dealCard() {
    const card = deck.pop();
    if (card) {
        document.getElementById('deck').textContent = card;
    } else {
        document.getElementById('deck').textContent = 'No quedan cartas';
    }
}

// Evento al hacer clic en el botón "Repartir Cartas"
const dealButton = document.getElementById('deal-button');
dealButton.addEventListener('click', () => {
    dealCard();
});

// Baraja la baraja al cargar la página
shuffleDeck();
Este código crea una baraja de cartas, muestra una carta y permite al jugador repartir cartas haciendo clic en el botón "Repartir Cartas". Las cartas se barajan al cargar la página.

Este es un ejemplo muy básico y simplificado de un juego de cartas. Para crear un juego de cartas completo, deberás agregar más funcionalidades como reglas, seguimiento de turnos, gráficos personalizados, y mucho más. El código anterior te proporciona una base sobre la cual puedes construir y personalizar tu juego de cartas.





