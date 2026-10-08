// Ruta corregida ya que JS está dentro de /src junto a /multimedia
const fireSoundPath = './multimedia/fuego.mp3'; 
const fireAudio = new Audio(fireSoundPath);

const iconBox = document.querySelector('.icon-box');

if (iconBox) {
  fireAudio.loop = true;

  iconBox.addEventListener('pointerenter', async () => {
    try {
      fireAudio.currentTime = 0;
      await fireAudio.play();
    } catch (error) {
      console.warn('El navegador bloqueó el audio. Haz un clic previo en la página para habilitarlo.', error);
    }
  });

  iconBox.addEventListener('pointerleave', () => {
    fireAudio.pause();
    fireAudio.currentTime = 0;
  });
}