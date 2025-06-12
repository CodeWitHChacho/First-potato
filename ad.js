document.addEventListener("DOMContentLoaded", () => {
    // GSAP is assumed to be loaded from the HTML
    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            });
        });
    }
});