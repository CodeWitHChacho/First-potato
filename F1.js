// Select elements to animate
const animatedElements = document.querySelectorAll('.hero-content, .about, .products h2, .product-card');

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

// Observe each animated element
animatedElements.forEach(element => {
    observer.observe(element);