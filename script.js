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

    function enterSite() {
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
    }

    enterButton.addEventListener('click', enterSite);
    overlay.addEventListener('click', enterSite);
});

// Efeito typewrite e mudança de cores
document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var enterButton = document.getElementById('enter-site');
    var mainContent = document.getElementById('main-content');
    var audio = document.getElementById('background-audio');

    // Adiciona a classe de desfoque ao conteúdo principal ao carregar a página
    mainContent.classList.add('blur-content');

    function enterSite() {
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
    }

    enterButton.addEventListener('click', enterSite);
    overlay.addEventListener('click', enterSite);

    // Função para o efeito typewrite
    function typeWriter(text, element, delay, callback) {
        let charIndex = 0;
        element.innerHTML = ''; // Limpa o conteúdo do elemento antes de começar

        function type() {
            if (charIndex < text.length) {
                let span = document.createElement('span');
                span.textContent = text[charIndex];
                span.classList.add('color-change');
                element.appendChild(span);
                charIndex++;
                setTimeout(type, delay);
            } else if (callback) {
                setTimeout(callback, 1000); // Pausa antes de iniciar a próxima ação
            }
        }
        type();
    }

    function eraseText(element, delay, callback) {
        let charIndex = element.textContent.length;

        function erase() {
            if (charIndex > 0) {
                element.removeChild(element.lastChild);
                charIndex--;
                setTimeout(erase, delay);
            } else if (callback) {
                setTimeout(callback, 500); // Pausa antes de iniciar a próxima ação
            }
        }
        erase();
    }

    function loopTypewriter(text, element, delay) {
        typeWriter(text, element, delay, function() {
            eraseText(element, delay, function() {
                loopTypewriter(text, element, delay);
            });
        });
    }

    // Inicia o efeito typewrite contínuo
    var typewriterElement = document.querySelector('.typewriter .colorful-text');
    var typewriterText = 'estou por aqui ヾ(･|';
    loopTypewriter(typewriterText, typewriterElement, 150); // Ajuste o delay conforme necessário

    // Mudança de cores do texto
    function changeColors() {
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        var colorfulText = document.querySelectorAll('.color-change');
        colorfulText.forEach(function(letter) {
            var color = colors[Math.floor(Math.random() * colors.length)];
            letter.style.color = color;
        });
    }
    setInterval(changeColors, 500); // Altere a cada meio segundo
});
