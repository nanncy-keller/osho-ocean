// main.js

// Osho's Thoughts
const oshoQuotes = [
            "Life begins where fear ends.",
            "Be realistic: Plan for a miracle.",
            "Experience, don't believe. Experience is the only truth.",
            "The real question is not whether life exists after death. The real question is whether you are alive before death.",
            "Joy is spiritual, happiness is psychological. Joy comes from within, happiness depends on the outside.",
            "Meditation is just being. No effort, no action, no thought.",
            "Don't be serious. Seriousness is a sin, and it is a disease.",
            "The moment a child is born, the mother is also born. She never existed before.",
            "Courage is not the absence of fear, but the triumph over it.",
            "Life is not a problem to be solved, but a mystery to be lived.",
            "Love is the goal, life is the journey.",
            "Never belong to the past. The past is gone. Nor belong to the future. The future is not here yet.",
            "Creativity is the greatest rebellion in existence.",
            "Become a tree. When spring comes and flowers bloom, bloom.",
            "Unless you drop yourself, you will never be able to know who you are.",
            "Don't move from the path, even if it is beautiful. Remain with the pathless, always.",
            "Be yourself. Be true to yourself.",
            "Silence is the language of existence and chatter is the language of the mind.",
            "Meditation happens only when you are totally aware of what you are doing.",
            "When you love, love flows from you without any reason.",
            "Don't try to become. You are already a masterpiece.",
            "Live dangerously and live totally.",
            "Enlightenment is just a word. Experience it and then you will know what it is.",
            "Accept yourself totally, just as you are, without conditions.",
            "Mind is noise. Meditation is music.",
            "The greatest fear in the world is the opinion of others.",
            "Tomorrow never comes, it is always today.",
            "Friendship is the purest love.",
            "Drop the idea of becoming someone, because you are already a masterpiece.",
            "Sadness gives depth. Happiness gives height.",
            "Nobody is superior, nobody is inferior, but nobody is equal either.",
            "If you love a flower, don't pick it up. Because if you pick it up it dies.",
            "The less people know, the more stubbornly they know it.",
            "Truth is not something outside to be discovered, it is something inside to be realized.",
            "Respect yourself if you would have others respect you.",
            "To be creative means to be in love with life.",
            "Each person comes into this world with a specific destiny. He has something to fulfill.",
            "Be watchful—the goose is out!",
            "The capacity to be alone is the capacity to love.",
            "Zen is not some fancy, special art of living. Our teaching is just to live, always in reality.",
            "A certain darkness is needed to see the stars.",
            "Falling in love you remain a child; rising in love you mature.",
            "Listen to your being. It is continuously giving you hints; it is a still, small voice.",
            "The moment you accept yourself, you become beautiful.",
            "Comparison is a very foolish attitude, because each person is unique.",
            "Celebrate yourself, and you will see that the whole existence celebrates you.",
            "Wherever you are, be there totally.",
            "Adventure is worthwhile in itself.",
            "One thing: you have to walk, and create the way by your walking.",
            "Don't be unnecessarily burdened by the past. Go on closing the chapters.",
            "Trust yourself. Create the kind of self that you will be happy to live with all your life.",
            "Each moment is a new life. Each moment is a fresh flower.",
            "Maturity is the art of living in peace with that which cannot be changed.",
            "The real power is not in making a big noise; the real power is in silence.",
            "Your whole idea about yourself is borrowed—borrowed from those who have no idea of who they are.",
            "Aloneness is the presence of oneself. Aloneness is very positive.",
            "Intelligence is the door to freedom and alert attention is the mother of intelligence.",
            "The moment you start seeing life as non-serious, a playfulness, all the burden disappears.",
            "Find ecstasy within yourself. It is not out there.",
            "To be alone is the only real revolution.",
            "If you suffer it is because of you, if you feel blissful it is because of you.",
            "Life should not only be lived, it should be celebrated.",
            "The mind is a beautiful servant, but a dangerous master.",
            "Existence is beyond the power of words to define.",
            "The greatest art is to sit and wait, and let it come."
];

const quoteText = document.getElementById('quoteText');
const author    = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');

let oceanAudio = new Audio('sounds/splash.mp3');

function playOceanSound() {
    try {
        oceanAudio.currentTime = 0;
        oceanAudio.volume = 0.8;
        oceanAudio.play();
    } catch (err) {
        console.log('Erro ao tocar som:', err);
    }
}

function getRandomQuote() {
    const idx = Math.floor(Math.random() * oshoQuotes.length);
    return oshoQuotes[idx];
}

function displayNewQuote() {
    quoteText.style.opacity = '0';
    quoteText.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        const newQuote = getRandomQuote();
        quoteText.textContent = newQuote;
        author.textContent = '— Osho';

        quoteText.style.transition = 'all 0.5s ease';
        quoteText.style.opacity = '1';
        quoteText.style.transform = 'translateY(0)';
    }, 300);
}

// Função de copiar para área de transferência
function copyToClipboard() {
    const textToCopy = quoteText.textContent + '\n' + author.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Adiciona classe de animação
        copyBtn.classList.add('copied');
        
        // Remove a classe após a animação
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
    });
}

// Event listener para o botão de copiar
copyBtn.addEventListener('click', copyToClipboard);

newQuoteBtn.addEventListener('click', (e) => {
    playOceanSound();
    displayNewQuote();

    const rect = newQuoteBtn.getBoundingClientRect();
    const containerRect = document.querySelector('.button-container').getBoundingClientRect();
    const x = rect.left + rect.width / 2 - containerRect.left;
    const y = rect.top + rect.height / 2 - containerRect.top;

    createSplashEffect(x, y);

    const anchor = document.getElementById('anchor');
    if (anchor) {
        anchor.classList.remove('anchor-dropping');
        void anchor.offsetWidth; // força reflow
        anchor.classList.add('anchor-dropping');
        setTimeout(() => anchor.classList.remove('anchor-dropping'), 2500);
    }

    newQuoteBtn.classList.add('glow');
    setTimeout(() => newQuoteBtn.classList.remove('glow'), 600);
});

// Inicializa com uma frase ao carregar
window.addEventListener('load', () => {
    setTimeout(displayNewQuote, 500);
});