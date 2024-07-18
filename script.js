// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-music');
    const iframe = document.getElementById('youtube-music');

    playButton.addEventListener('click', () => {
        iframe.style.display = 'block';
        playButton.style.display = 'none';
    });    
});

document.addEventListener('DOMContentLoaded', () => {
    const favicon = document.getElementById('favicon');
    favicon.classList.add('rotating');
});

// Efeito typewrite
document.addEventListener("DOMContentLoaded", function() {
    function typeWriter(element, text, delay) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else {
                setTimeout(() => {
                    element.innerHTML = "";
                    i = 0;
                    type();
                }, delay * 10); // Delay before restarting
            }
        }
        type();
    }

    const typewriterElements = document.querySelectorAll(".typewriter");

    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = "";
        typeWriter(element, text, 100);
    });
});

