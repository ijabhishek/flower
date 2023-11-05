window.onload = () => {
  document.body.classList.remove("container");

  var audio = new Audio('mysong.mp3');

  document.querySelector('.beautiful-button').addEventListener('click', function() {
    audio.play();
    setTimeout(function() {
      window.location.href = 'flower.html';
    }, 1000); // Redirect after 1 second (adjust as needed)
  });

  audio.addEventListener('ended', function() {
    window.location.href = 'index.html';
  });
};
