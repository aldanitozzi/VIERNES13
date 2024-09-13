const song = document.getElementById('song');
const playButton = document.getElementById('playSong');
const pauseButton = document.getElementById('pauseSong');
const messageBox = document.querySelector('.message-box');
const showMessageButton = document.getElementById('showMessage');
const controls = document.querySelector('.controls');
const header = document.querySelector('#header');
const introText = document.querySelector('.intro');

const messages = [


    "CADA ACORDE QUE ESCUCHO ES COMO UN SUSURRO DEL UNIVERSO QUE REAFIRMA LO INFINITO DE MI AMOR POR TI. CADA SONIDO RESUENA CON LA MAGIA DE LO QUE COMPARTIMOS.",
    
    "EN CADA NOTA, ENCUENTRO UN REFLEJO DE LA INMENSA GRATITUD QUE SIENTO POR TENERTE A MI LADO. ES COMO SI CADA ARMONÍA FUERA UN REGALO DEL DESTINO QUE CELEBRA NUESTRO AMOR.",
    
    "AL SUMERGIRME EN ESTA MELODÍA, SIENTO QUE CADA ACORDE ES UN VÍNCULO QUE UNE NUESTROS ALMAS EN UNA DANZA ETERNA. CADA SONIDO ES UNA DECLARACIÓN DE LA PROFUNDIDAD DE MIS SENTIMIENTOS.",
    
    "LA MÚSICA ENVUELVE CADA RINCÓN DE MI SER, COMO UN ABRAZO CALIENTE QUE TRANSMITE CADA SENTIMIENTO DE AMOR Y DEVOCIÓN QUE TE TENGO. ES UNA EXPRESIÓN DEL ANHELO DE NUESTRO CORAZÓN.",
    
    "CADA SONIDO RESUENA CON LA RIQUEZA DE LO QUE SENTIMOS EL UNO POR EL OTRO, COMO SI CADA NOTA FUERA UNA CARICIA QUE CELEBRA CADA MOMENTO DE NUESTRA HISTORIA JUNTOS.",
    
     "EN CADA ESTROFA ENCUENTRO UN REFLEJO DE LOS SUEÑOS Y ESPERANZAS QUE COMPARTIMOS. CADA RITMO ES UN TESTIMONIO DE LA PROFUNDIDAD DE NUESTRO AMOR, UNA CELEBRACIÓN DE LO QUE SOMOS.",
    
     "AL ESCUCHAR ESTOS SONIDOS, CADA ACORDE ES UN ECO DE LA BELLEZA Y LA COMPLEJIDAD DE NUESTRO AMOR. ES COMO SI CADA NOTA DESAFIARA LAS PALABRAS A EXPRESAR LO INEFABLE DE LO QUE SENTIMOS.",

    "CADA RITMO ES UN RECORDATORIO DE LO MARAVILLOSO QUE ES AMARTE. ES COMO SI CADA SONIDO TE DICHA QUE ERES EL SUEÑO HECHO REALIDAD Y LA FUENTE DE MI FELICIDAD MÁS PROFUNDA.",
    
    "EN CADA NOTA HAY UNA PROMESA SILENCIOSA DE AMOR ETERNO. CADA SONIDO PARECE CARGADO DE UNA EMOCIÓN TAN PURA Y VERDADERA QUE CADA VEZ QUE LO ESCUCHO, ME SIENTO MÁS CONECTADO A TI.",
    
    "LA MELODÍA ES UN VÍNCULO QUE UNE NUESTRO PASADO, PRESENTE Y FUTURO. CADA SONIDO ES UNA DECLARACIÓN DE LO QUE SIENTO, UNA CELEBRACIÓN DE CADA MOMENTO COMPARTIDO Y UNA PROMESA DE LO QUE AÚN ESTÁ POR VENIR.",
    
    "AL ESCUCHAR CADA ACORDE, SIENTO QUE MI AMOR POR TI SE MANIFIESTA EN CADA SONIDO. ES COMO SI CADA NOTA FUERA UNA CARICIA QUE ENVIAS DIRECTAMENTE A MI CORAZÓN.",
    
    "CADA ESTROFA DE ESTA MELODÍA ES UN REFLEJO DEL AMOR INFINITO QUE TE TENGO. CADA SONIDO HABLA DE LA PROFUNDIDAD Y LA PUREZA DE MIS SENTIMIENTOS, HACIENDO QUE CADA MOMENTO SEA MÁS SIGNIFICATIVO.",
    
    "EN CADA ACORDE RESUENA LA HERMOSURA DE NUESTRO AMOR, COMO SI CADA SONIDO FUERA UN COMPÁS QUE MARCA EL LATIDO DE NUESTRO CORAZÓN EN ARMONÍA PERFECTA. ES UNA EXPRESIÓN DE LA INFINITA FELICIDAD QUE ENCUENTRO CONTIGO.",
    
   
];


let messageIndex = 0;

// Función para mostrar el siguiente mensaje
function showNextMessage() {
    // Ocultar el mensaje anterior
    messageBox.style.display = 'none';

    // Ocultar el botón de mostrar mensaje durante la transición
    showMessageButton.style.visibility = 'hidden';

    // Esperar un breve momento antes de mostrar el siguiente mensaje
    setTimeout(() => {
        messageBox.innerHTML = `<p>${messages[messageIndex]}</p>`;
        messageBox.style.display = 'block';

        // Avanzar al siguiente mensaje
        messageIndex = (messageIndex + 1) % messages.length;

        // Mostrar el botón de mostrar mensaje después de la transición
        showMessageButton.style.visibility = 'visible';
    }, 300); // Ajusta el tiempo de espera si es necesario
}

// Mostrar el primer mensaje y los controles
showMessageButton.addEventListener('click', () => {
    if (header.style.display !== 'none') {
        // Ocultar el encabezado y el texto de introducción al mostrar el primer mensaje
        header.style.display = 'none';
        introText.style.display = 'none';
        controls.style.display = 'flex'; // Mostrar los controles (play/pause)

        // Ocultar el botón de mostrar mensaje temporalmente
        showMessageButton.style.visibility = 'hidden';
        
        // Mostrar el primer mensaje
        showNextMessage();
    } else {
        // Si ya se ha hecho clic antes, simplemente muestra el siguiente mensaje
        showNextMessage();
    }
});

// Botones de reproducción y pausa
playButton.addEventListener('click', () => {
    song.play();
});

pauseButton.addEventListener('click', () => {
    song.pause();
});

// Función para generar corazones animados
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 6}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Generar corazones constantemente
setInterval(createHeart, 300);
