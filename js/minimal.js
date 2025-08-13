// Minimal Pins JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Trigger pin animations on page load
    const pins = document.querySelectorAll('.pin');
    
    // Add click interaction to pins
    pins.forEach((pin, index) => {
        pin.addEventListener('click', function() {
            // Pulse animation on click
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease';
            }, 10);
        });
        
        // Add hover sound effect (optional)
        pin.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        pin.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Navigate to journey page on map click (for demo)
    const worldMap = document.getElementById('worldMap');
    if (worldMap) {
        worldMap.addEventListener('dblclick', function() {
            window.location.href = '/journey.html';
        });
    }
    
    // Add subtle parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const pins = document.querySelectorAll('.pin');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        pins.forEach((pin, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            pin.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
        }
        50% {
            transform: translateY(-5px) scale(1.2);
            filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
        }
        100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
        }
    }
`;
document.head.appendChild(style);