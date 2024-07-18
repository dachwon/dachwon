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
    var mainContent = document.getElementById('main-content');
    var audio = document.getElementById('background-audio');

    // Adiciona a classe de desfoque ao conteúdo principal ao carregar a página
    mainContent.classList.add('blur-content');

    enterButton.addEventListener('click', function() {
        // Remove a classe de desfoque do conteúdo principal
        mainContent.classList.remove('blur-content');
        // Inicia a reprodução do áudio
        audio.play().catch(function(error) {
            console.error("Failed to play audio:", error);
        });
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

// Mudança de cores do texto
    var colorfulText = document.querySelectorAll('.color-change');
    function changeColors() {
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        colorfulText.forEach(function(letter) {
            var color = colors[Math.floor(Math.random() * colors.length)];
            letter.style.color = color;
        });
    }
    setInterval(changeColors, 500); // Altere a cada meio segundo
});
