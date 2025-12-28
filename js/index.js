document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // 1. Alternar Menu Hambúrguer
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 2. Fechar o menu ao clicar num link (para mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 3. Animação de entrada (Scroll Reveal) para elementos interativos
    const animatedElements = document.querySelectorAll('.cut-card, .product-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        // Estado inicial escondido
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        elementObserver.observe(element);
    });
});

/*modal*/
const agendarBtn = document.getElementById('agendar');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

agendarBtn.addEventListener('click', () => {
    modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
});

/*modal com o botao do cabecalho*/
const agendarSessaoBtn = document.getElementById('agendar_sessao');

agendarSessaoBtn.addEventListener('click', () => {
    modal.showModal();
});
