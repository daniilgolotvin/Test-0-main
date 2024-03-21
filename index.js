const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let stream;

// Функция для запуска видео с веб-камеры
async function startVideo() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
  } catch (err) {
    console.error('Ошибка при получении доступа к веб-камере:', err);
  }
}

// Функция для отключения видео
function stopVideo() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
  }
}

startButton.addEventListener('click', startVideo);
stopButton.addEventListener('click', stopVideo);