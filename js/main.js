// Pins Website - Main JavaScript

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation classes when elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe all feature cards and sections
document
  .querySelectorAll(".feature-card, .pricing-card, .step")
  .forEach((el) => {
    observer.observe(el);
  });

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Waitlist form handling
const waitlistForm = document.querySelector(".android-waitlist");
if (waitlistForm) {
  const button = waitlistForm.querySelector("button");
  const input = waitlistForm.querySelector("input");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const email = input.value;

    if (email && email.includes("@")) {
      // Here you would send to your backend
      console.log("Waitlist signup:", email);

      // Show success message
      button.textContent = "Added to Waitlist!";
      button.style.background = "#10B981";
      input.value = "";

      setTimeout(() => {
        button.textContent = "Join Waitlist";
        button.style.background = "";
      }, 3000);
    } else {
      input.style.borderColor = "#EF4444";
      setTimeout(() => {
        input.style.borderColor = "";
      }, 2000);
    }
  });
}

// Add subtle parallax effect to hero mockup
const heroMockup = document.querySelector(".hero-mockup");
if (heroMockup) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    heroMockup.style.transform = `translateY(${rate}px)`;
  });
}

// Pricing card hover effects
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (!card.classList.contains("coming-soon")) {
      card.style.transform = "translateY(-8px)";
    }
  });

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(0)";
    }
  });
});