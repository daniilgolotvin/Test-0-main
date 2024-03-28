const cameraToggleBtn = document.getElementById('cameraToggleBtn');
const videoElement = document.getElementById('videoElement');
const icon = document.getElementById('icon');
const themeToggleBtn = document.getElementById('themeToggleBtn');
let stream;

cameraToggleBtn.addEventListener('click', () => {
  if (!stream) {
    startVideo();
  } else {
    stopVideo();
  }
});

async function startVideo() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    icon.style.backgroundImage = "url('./image/camera-video-svgrepo-com.svg')";
    cameraToggleBtn.classList.add('active');
  } catch (err) {
    console.error('Ошибка при получении доступа к веб-камере:', err);
  }
}

function stopVideo() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
    stream = null;
    icon.style.backgroundImage = "url('./image/camera-video-off-svgrepo-com.svg')";
    cameraToggleBtn.classList.remove('active');
  }
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggleBtn.classList.toggle('container__table-buttontoggle_dark');
});