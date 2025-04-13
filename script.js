// script.js

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// CTA button feedback
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
  joinBtn.addEventListener('click', () => {
    alert('Thank you for joining our sustainability movement!');
  });
}

const subscribeBtn = document.getElementById('subscribeBtn');
if (subscribeBtn) {
  subscribeBtn.addEventListener('click', () => {
    const name = document.getElementById('subscriberName').value;
    if (name.trim()) {
      alert(`Thanks for subscribing, ${name}! 🌱`);
    } else {
      alert('Please enter your name to subscribe.');
    }
  });
}

// Mobile Navigation Toggle (optional enhancement)
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
