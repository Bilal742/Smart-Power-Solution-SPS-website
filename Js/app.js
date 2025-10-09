const reveals = document.querySelectorAll('.reveal');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        }
    });
}, options);

reveals.forEach(reveal => {
    observer.observe(reveal);
});


const container = document.getElementById('particles-container');
const particleCount = 30; // number of particles

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size 5-15px
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position inside container
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;

    // Random animation duration between 3-6 seconds
    particle.style.animationDuration = `${3 + Math.random() * 3}s`;

    // Random animation delay for natural effect
    particle.style.animationDelay = `${Math.random() * 6}s`;

    container.appendChild(particle);
}

tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: {
        color: {
            value: "#000000"
        }
    },
    particles: {
        number: {
            value: 80,
            density: { enable: true, value_area: 800 }
        },
        color: {
            value: "#00ffcc"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            outMode: "bounce"
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 }
        }
    }
});
