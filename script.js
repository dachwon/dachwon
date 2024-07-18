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
body {
    transition: filter 0.5s;
}

#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.overlay-content {
    text-align: center;
    color: white;
    z-index: 1001; /* Certifique-se de que o conteúdo do overlay esteja acima do desfoque */
}

#enter-site {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: #ffffff;
    border: none;
    color: #000;
    transition: background-color 0.3s;
}

#enter-site:hover {
    background-color: #f0f0f0;
}

#main-content.blur-content {
    filter: blur(20px); /* Aumente o valor do desfoque aqui */
    transition: filter 0.5s;
}

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
