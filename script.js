// JavaScript copyable addresses
document.querySelectorAll('.copyable-address').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.textContent.trim());
        alert('Address copied to clipboard!');
     });
});



// Matrix rain background effect
const canvas = document.getElementById('matrix-bg');
const context = canvas.getContext('2d');

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '{}[]();<>/\\+-*=|&^%$#@!~`';
    const alphabet = katakana + latin + nums + symbols;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops = new Array(columns).fill(1); // Initialize drop positions

    const draw = () => {
        context.fillStyle = 'rgba(26, 26, 26, 0.02)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#9400D3';
        context.font = fontSize + 'px monospace'; // Monospace for code-like feel

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0; // Reset drop randomly for variation
            }
            rainDrops[i]++;
        }
    };

    setInterval(draw, 50); // Slower interval (50ms) for subtle, less frantic motion; increase to 100 for even slower
}

// Initialize on load and handle resize
initMatrix();
window.addEventListener('resize', initMatrix);



// Fade-in animations for sections using Intersection Observer
document.addEventListener('DOMContentLoaded', () => { // Wait for the page to fully load
    const sections = document.querySelectorAll('section'); // Select all <section> elements

    const observerOptions = {
        root: null, // Use the viewport as the root (default)
        rootMargin: '0px', // No extra margin; trigger at exact viewport edge
        threshold: 0.5 // Trigger when 10% of the section is visible (adjust for sensitivity)
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // If the section enters the viewport
                entry.target.classList.add('visible'); // Add the class to trigger CSS animation
                observer.unobserve(entry.target); // Stop observing once animated (one-time effect)
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section); // Start observing each section
    });
});