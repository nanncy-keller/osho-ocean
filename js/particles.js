// particles.js

// ── SPLASH (efeito ao clicar na concha) ──────────────────────────────────────

function createSplashEffect(x, y) {
    const buttonContainer = document.querySelector('.button-container');

    // Ondas
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'splash-wave';
        wave.style.left = (x - 30) + 'px';
        wave.style.top  = (y - 30) + 'px';
        wave.style.animationDelay = (i * 0.1) + 's';
        buttonContainer.appendChild(wave);
        setTimeout(() => wave.remove(), 800);
    }

    // Partículas
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'splash-particle';

        const angle = (Math.PI * 2 * i) / 12;
        const distance = 40 + Math.random() * 30;
        const size = 15 + Math.random() * 20;

        particle.style.left = x + 'px';
        particle.style.top  = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        buttonContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }

    // Gotículas caindo
    for (let i = 0; i < 8; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'splash-droplet';

        const offsetX = (Math.random() - 0.5) * 60;
        droplet.style.left = (x + offsetX) + 'px';
        droplet.style.top  = (y - 20) + 'px';
        droplet.style.animationDelay = (Math.random() * 0.2) + 's';

        buttonContainer.appendChild(droplet);
        setTimeout(() => droplet.remove(), 600);
    }
}


// ── PARTÍCULAS DE LUZ SUBAQUÁTICA ────────────────────────────────────────────

function createLightParticles() {
    const container = document.getElementById('fishContainer');
    const totalParticles = 35;

    for (let i = 0; i < totalParticles; i++) {
        setTimeout(() => {
            spawnLightParticle(container);
        }, i * 300);
    }
}

function spawnLightParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'light-particle';

    // Posição aleatória na tela
    const startX = Math.random() * 100;
    const startY = 60 + Math.random() * 40; // nasce na parte de baixo

    // Tamanho variado para dar profundidade
    const size = 2 + Math.random() * 5;

    // Duração longa e aleatória — movimento lento como luz na água
    const duration = 8 + Math.random() * 14;
    const delay    = Math.random() * 10;

    // Deriva horizontal suave
    const driftX = (Math.random() - 0.5) * 120;

    particle.style.cssText = `
        left: ${startX}vw;
        top: ${startY}vh;
        width: ${size}px;
        height: ${size}px;
        --drift-x: ${driftX}px;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
    `;

    container.appendChild(particle);

    // Remove e recria ao terminar — mantém sempre partículas na tela
    particle.addEventListener('animationend', () => {
        particle.remove();
        spawnLightParticle(container);
    });
}

// Inicia as partículas de luz quando a página carrega
window.addEventListener('load', () => {
    createLightParticles();
});
