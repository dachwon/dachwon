// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-music');
    const iframe = document.getElementById('youtube-music');

    playButton.addEventListener('click', () => {
        iframe.style.display = 'block';
        playButton.style.display = 'none';
    });

    const favicon = document.getElementById('favicon');
    favicon.classList.add('rotating');
    
    // Função para obter o IP do usuário e atualizar o texto
    function updateWelcomeMessageWithIP() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const welcomeMessage = document.getElementById('welcome-message');
                welcomeMessage.textContent = `Seu IP: ${data.ip}`;
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
            });
    }

    updateWelcomeMessageWithIP();
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

    // Evita que o clique no botão propague para o overlay
    enterButton.addEventListener('click', function(event) {
        event.stopPropagation();
        enterSite();
    });

    // Permite que o clique em qualquer lugar do overlay entre no site
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
        mainContent.classList.remove
