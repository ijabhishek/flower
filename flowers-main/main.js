window.onload = () => {
        document.body.classList.remove("container");
};

// Pause the background music after 15 seconds
setTimeout(function () {
        var backgroundMusic = document.getElementById('background-music');
        if (backgroundMusic) {
                backgroundMusic.pause();
        }
}, 15000);

      
