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

// Overlay

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var enterButton = document.getElementById('enter-site');
    var body = document.querySelector('body');
    var audio = document.getElementById('background-audio');

    // Adiciona a classe de desfoque ao conteúdo do body ao carregar a página
    body.classList.add('blur-content');

    enterButton.addEventListener('click', function() {
        // Remove a classe de desfoque do conteúdo do body
        body.classList.remove('blur-content');
        // Inicia a reprodução do áudio
        audio.play();
        // Remove o overlay após a transição
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 500); // Tempo da transição em milissegundos
    });
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
                    typeWriter(element, text, delay);
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
