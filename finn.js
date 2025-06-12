document.addEventListener("DOMContentLoaded", () => {
    // Set flip card back background
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        const frontImage = card.querySelector('.flip-card-front img');
        const back = card.querySelector('.flip-card-back');
        if (frontImage) {
            back.style.backgroundImage = `url(${frontImage.src})`;
        }
    });

    // Theme switcher logic
    const themeSwitch = document.getElementById("checkbox");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark-mode") {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener("change", function(e) {
        if (e.target.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Animate elements on scroll
    const animateOnScroll = (elem, fromVars) => {
        gsap.from(elem, {
            ...fromVars,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
    };

    // Apply animations
    animateOnScroll(".hero-content", { opacity: 0, y: 50 });
    animateOnScroll("footer", { opacity: 0, y: 50 });

    // About section animation
    const aboutSection = document.querySelector('.about-full');
    const aboutContent = aboutSection.querySelector('.about-content');
    const aboutImages = aboutSection.querySelectorAll('.about-image-placeholder');

    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: "top center",
            end: "bottom center",
            scrub: 1,
        }
    });

    aboutTl.from(aboutContent, {
        y: 100,
        opacity: 0,
        duration: 1
    }).from(aboutImages, {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1
    }, "-=0.5");

    // Transition between about and products
    const productsSection = document.querySelector('.products');
    gsap.from(productsSection, {
        scrollTrigger: {
            trigger: productsSection,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 200,
        opacity: 0,
        scale: 0.8
    });


    // Dynamic section animations
    const sections = document.querySelectorAll('.products, .services');
    sections.forEach(section => {
        const image = section.querySelector('img');
        const text = section.querySelectorAll('h3, p');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none none",
            }
        });

        tl.from(image, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }).from(text, {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.5");
    });

    // Navbar scroll effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                if (document.querySelector(targetId)) {
                    gsap.to(window, {
                        scrollTo: { y: targetId, offsetY: 70 },
                        duration: 1,
                        ease: "power2.inOut",
                    });
                }
            }
        });
    });
});
