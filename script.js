document.addEventListener('DOMContentLoaded', () => {
    // Play Music
    const playButton = document.getElementById('play-music');
    const iframe = document.getElementById('youtube-music');
    if (playButton && iframe) {
        playButton.addEventListener('click', () => {
            iframe.style.display = 'block';
            playButton.style.display = 'none';
        });
    }

    // Rotating Favicon
    const favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.classList.add('rotating');
    }

    // Overlay
    const overlay = document.getElementById('overlay');
    const enterButton = document.getElementById('enter-site');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('background-audio');

    if (mainContent) {
        mainContent.classList.add('blur-content');
    }

    if (enterButton) {
        enterButton.addEventListener('click', () => {
            if (mainContent) {
                mainContent.classList.remove('blur-content');
            }
            if (audio) {
                audio.play().catch(error => console.error("Failed to play audio:", error));
            }
            setTimeout(() => {
                if (overlay) {
                    overlay.style.display = 'none';
                }
            }, 500);
        });
    }

    // Typewriter Effect
    function typeWriter(text, element, delay, callback) {
        let charIndex = 0;
        element.innerHTML = '';

        function type() {
            if (charIndex < text.length) {
                let span = document.createElement('span');
                span.textContent = text[charIndex];
                span.classList.add('color-change');
                element.appendChild(span);
                charIndex++;
                setTimeout(type, delay);
            } else if (callback) {
                setTimeout(callback, 1000);
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
                setTimeout(callback, 500);
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

    const typewriterElement = document.querySelector('.typewriter .colorful-text');
    const typewriterText = 'estou por aqui ヾ(･|';
    if (typewriterElement) {
        loopTypewriter(typewriterText, typewriterElement, 150);
    }

    // Color Change
    function changeColors() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        const colorfulText = document.querySelectorAll('.color-change');
        colorfulText.forEach(letter => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            letter.style.color = color;
        });
    }
    setInterval(changeColors, 500);

    // Bolinhas de Navegação
    let currentPage = 0;

    function showPage(pageIndex) {
        const pages = document.querySelectorAll('.page');
        const dots = document.querySelectorAll('.dot');

        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === pageIndex);
        });

        currentPage = pageIndex;
    }

    // Initialize the first page
    showPage(currentPage);

    // Add event listeners to dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => showPage(index));
    });
});
