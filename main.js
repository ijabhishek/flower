onload = () => {
        document.body.classList.remove("container");
};
function playAndRedirect() {
        var audio = new Audio('mysong.mp3');
        audio.play();
        setTimeout(function () {
                window.location.href = 'flower.html';
        }, 1000); // Redirect after 1 second (adjust as needed)
}
