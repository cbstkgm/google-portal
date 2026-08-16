const canvas = document.getElementById('bg_canvas');
const ctx = canvas.getContext('2d');

let width, height, cx, cy;
let particles = [];

const colors = [
    '#4285F4', // Google Blue
    '#EA4335', // Google Red
    '#FBBC05', // Google Yellow
    '#34A853', // Google Green
];

// Configuration
const PARTICLE_COUNT = window.innerWidth > 768 ? 600 : 300;
const MAX_RADIUS = Math.max(window.innerWidth, window.innerHeight) * 0.6;
const MIN_RADIUS = 50;

function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    cx = width / 2;
    cy = height / 2;
}

class Particle {
    constructor() {
        this.reset();
        // Scatter initial particles so they don't all start at radius 0
        this.radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
        this.angle = Math.random() * Math.PI * 2;
    }

    reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = MIN_RADIUS + Math.random() * 50; // Start near center
        this.speed = 0.5 + Math.random() * 1.5;
        this.angleSpeed = (Math.random() - 0.5) * 0.005;
        this.length = 5 + Math.random() * 15;
        this.thickness = 1 + Math.random() * 2.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = 0;
        this.targetOpacity = 0.3 + Math.random() * 0.5; // Max opacity
    }

    update() {
        // Expand outward
        this.radius += this.speed;
        // Rotate slowly
        this.angle += this.angleSpeed;

        // Fade in
        if (this.radius < MIN_RADIUS + 100) {
            this.opacity = Math.min(this.targetOpacity, this.opacity + 0.01);
        }
        // Fade out as it reaches the edge
        else if (this.radius > MAX_RADIUS - 150) {
            this.opacity = Math.max(0, this.opacity - 0.01);
        }

        // Reset if too far or fully faded out at the edge
        if (this.radius > MAX_RADIUS || (this.radius > MAX_RADIUS - 50 && this.opacity <= 0)) {
            this.reset();
        }
    }

    draw() {
        if (this.opacity <= 0) return;

        const x = cx + Math.cos(this.angle) * this.radius;
        const y = cy + Math.sin(this.angle) * this.radius;

        // The line should be drawn tangent to the circle, or slightly angled
        const tangentAngle = this.angle + Math.PI / 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(tangentAngle + this.angleSpeed * 10); // Slight wobble based on angle speed

        ctx.beginPath();
        ctx.moveTo(-this.length / 2, 0);
        ctx.lineTo(this.length / 2, 0);
        
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

// Ensure it plays well with dark mode (opacity adjustment if needed)
// Currently, the colors pop nicely on both light and dark backgrounds due to globalAlpha.

window.addEventListener('resize', () => {
    initCanvas();
    // Optionally re-init particles or just let them adjust organically
});

// Initialize
initCanvas();
initParticles();
animate();
