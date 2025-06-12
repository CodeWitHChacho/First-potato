document.addEventListener('DOMContentLoaded', () => {
    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.animate-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.animate-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.cta-button', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'elastic.out(1, 0.3)'
    });

    // Services section animations
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.animate-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // About section animations
    gsap.from('.about .section-title', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.about .animate-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });

    // Contact section animations
    gsap.from('.contact .section-title', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.contact .animate-text', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power2.out'
    });

    // Three.js 3D Model
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry(2, 3, 0.2); // Simplified phone model
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
    const phone = new THREE.Mesh(geometry, material);
    scene.add(phone);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // Mouse interaction for 3D model
    document.addEventListener('mousemove', (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        phone.rotation.y = mouseX * Math.PI * 0.5;
        phone.rotation.x = mouseY * Math.PI * 0.5;
    });

    // Responsive canvas
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Form submission (basic handling)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo, no real submission.)');
        form.reset();
    });
});