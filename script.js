// Параллакс эффект для фоновых слоев
document.addEventListener('DOMContentLoaded', function() {
    const parallaxContainer = document.querySelector('.parallax-container');
    const layers = document.querySelectorAll('.parallax-layer');
    
    // Эффект параллакса
    parallaxContainer.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        layers.forEach(layer => {
            const depth = parseFloat(layer.style.transform.split('translateZ(')[1] || '0');
            const moveX = (x - 0.5) * depth * 100;
            const moveY = (y - 0.5) * depth * 100;
            
            layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Анимация при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.service-card, .gallery-item').forEach(card => {
        observer.observe(card);
    });
});