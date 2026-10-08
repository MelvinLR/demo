// Importación de la ruta relativa o uso de Web Audio/Audio API nativa
const fireSoundPath = './src/multimedia/fuego.mp3'; // Asegúrate de incluir la extensión correspondiente (.mp3, .wav, etc.)
const fireAudio = new Audio(fireSoundPath);

// Seleccionamos el cuadro azul del cartel
const iconBox = document.querySelector('.icon-box');

if (iconBox) {
  // Configuración opcional: reproducir en bucle mientras está encima
  fireAudio.loop = true;

  // Evento cuando el ratón entra al contenedor
  iconBox.addEventListener('pointerenter', async () => {
    try {
      fireAudio.currentTime = 0; // Reinicia el audio al inicio
      await fireAudio.play();
    } catch (error) {
      console.warn('La reproducción fue bloqueada por el navegador hasta interacción del usuario:', error);
    }
  });

  // Evento cuando el ratón sale del contenedor
  iconBox.addEventListener('pointerleave', () => {
    fireAudio.pause();
    fireAudio.currentTime = 0;
  });
}