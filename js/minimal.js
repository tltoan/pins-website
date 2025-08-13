// Minimal Pins JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Trigger pin animations on page load
    const pins = document.querySelectorAll('.pin');
    
    // Add click interaction to pins
    pins.forEach((pin, index) => {
        // Mark animation as complete after drop animation finishes
        setTimeout(() => {
            pin.classList.add('animation-complete');
        }, 600 + (index * 30)); // Faster completion for quicker hover availability
        
        pin.addEventListener('click', function() {
            // Pulse animation on click
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease';
            }, 10);
        });
        
        // Hover effect is handled by CSS
    });
    
    // Navigate to journey page on map click (for demo)
    const worldMap = document.getElementById('worldMap');
    if (worldMap) {
        worldMap.addEventListener('dblclick', function() {
            window.location.href = '/journey.html';
        });
    }
    
    // Remove parallax effect as it conflicts with hover animation
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