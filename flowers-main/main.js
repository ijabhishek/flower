// Remove the class "container" when the page loads
window.onload = () => {
        document.body.classList.remove("container");

        document.addEventListener('click', function () {
                var audio = document.getElementById('background-music');
                audio.play();
        });
};

// Pause the background music after 15 seconds
setTimeout(function () {
        var backgroundMusic = document.getElementById('background-music');
        if (backgroundMusic) {
                backgroundMusic.pause();
        }
}, 15000);
  
