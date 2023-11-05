window.onload = () => {
  document.body.classList.remove("container");

  var audio = document.getElementById('background-music');

  document.addEventListener('click', function() {
    if (audio.paused) {
      audio.muted = false; // Unmute the audio
      audio.play(); // Start playback
    }
  });
};
