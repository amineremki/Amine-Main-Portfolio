// أنيميشن الظهور التدريجي (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // تأخير بسيط لكل بطاقة لتعطي تأثير الدرج
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => observer.observe(card));

// تأثير الـ 3D Tilt البسيط عند تحريك الماوس
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = (card.offsetWidth / 2 - e.offsetX) / 20;
        let y = (card.offsetHeight / 2 - e.offsetY) / 20;
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    });
});