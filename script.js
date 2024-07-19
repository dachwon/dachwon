document.addEventListener('DOMContentLoaded', () => {
    // Função para obter o IP do usuário e atualizar o texto
    function updateWelcomeMessageWithIP() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const welcomeMessage = document.getElementById('welcome-message');
                if (welcomeMessage) {
                    welcomeMessage.textContent = `${data.ip}`;
                }
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
            });
    }

    updateWelcomeMessageWithIP();
    
    const playButton = document.getElementById('play-music');
    const iframe = document.getElementById('youtube-music');
    
    if (playButton && iframe) {
        playButton.addEventListener('click', () => {
            iframe.style.display = 'block';
            playButton.style.display = 'none';
        });
    }
    
    const favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.classList.add('rotating');
    }
    
    var overlay = document.getElementById('overlay');
    var enterButton = document.getElementById('enter-site');
    var mainContent = document.getElementById('main-content');
    var audio = document.getElementById('background-audio');

    if (mainContent) {
        // Adiciona a classe de desfoque ao conteúdo principal ao carregar a página
        mainContent.classList.add('blur-content');
    }

    function enterSite() {
        // Remove a classe de desfoque do conteúdo principal
        if (mainContent) {
            mainContent.classList.remove('blur-content');
        }
        // Inicia a reprodução do áudio
        if (audio) {
            audio.play().catch(function(error) {
                console.error("Failed to play audio:", error);
            });
        }
        // Remove o overlay após a transição
        if (overlay) {
            setTimeout(function() {
                overlay.style.display = 'none';
            }, 500); // Tempo da transição em milissegundos
        }
    }

    // Evita que o clique no botão propague para o overlay
    if (enterButton) {
        enterButton.addEventListener('click', function(event) {
            event.stopPropagation();
            enterSite();
        });
    }

    // Permite que o clique em qualquer lugar do overlay entre no site
    if (overlay) {
        overlay.addEventListener('click', enterSite);
    }

    // Função para o efeito typewrite
    function typeWriter(text, element, delay, callback) {
        let charIndex = 0;
        if (element) {
            element.innerHTML = ''; // Limpa o conteúdo do elemento antes de começar
        }

        function type() {
            if (element && charIndex < text.length) {
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
        let charIndex = element ? element.textContent.length : 0;

        function erase() {
            if (element && charIndex > 0) {
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

    var typewriterElement = document.querySelector('.typewriter .colorful-text');
    var typewriterText = 'estou por aqui ヾ(･|';
    loopTypewriter(typewriterText, typewriterElement, 150); // Ajuste o delay conforme necessário

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
