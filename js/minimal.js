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

// Screenshots Slider Functionality
let currentSlide = 0;

function slideScreenshots(direction) {
    const wrapper = document.getElementById('screenshotsWrapper');
    const screenshots = wrapper?.querySelectorAll('.app-screenshot');
    
    if (!wrapper || !screenshots.length) return;
    
    currentSlide += direction;
    
    // Limit slides
    const maxSlide = screenshots.length - 1;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    
    // Apply transform - move by 33.333% for each slide (since wrapper is 300% width)
    const offset = currentSlide * 33.333;
    wrapper.style.transform = `translateX(-${offset}%)`;
    
    // Update button states
    updateSliderButtons();
}

// Make function global
window.slideScreenshots = slideScreenshots;

function updateSliderButtons() {
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    const wrapper = document.getElementById('screenshotsWrapper');
    const screenshots = wrapper?.querySelectorAll('.app-screenshot');
    const dots = document.querySelectorAll('.dot');
    
    if (prevBtn && nextBtn && screenshots) {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === screenshots.length - 1;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Function to go to specific slide
function goToSlide(slideIndex) {
    const wrapper = document.getElementById('screenshotsWrapper');
    const screenshots = wrapper?.querySelectorAll('.app-screenshot');
    
    if (!wrapper || !screenshots) return;
    
    currentSlide = slideIndex;
    const offset = currentSlide * 33.333;
    wrapper.style.transform = `translateX(-${offset}%)`;
    updateSliderButtons();
}

// Make function global
window.goToSlide = goToSlide;

// Initialize slider buttons on load
document.addEventListener('DOMContentLoaded', function() {
    updateSliderButtons();
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