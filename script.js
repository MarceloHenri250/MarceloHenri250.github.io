// Scroll event listener to handle section animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize section styles for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Carrossel de imagens
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.children.length;
    let currentIndex = 0;

    const updateCarousel = () => {
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Botão "Anterior"
    carousel.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });

    // Botão "Próximo"
    carousel.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

// Abrir modal ao clicar em uma imagem
document.querySelectorAll('.carousel-images img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        modal.style.display = 'block';
        modalImage.src = img.src;
    });
});

// Fechar modal ao clicar no botão de fechar
document.querySelector('.modal .close').addEventListener('click', () => {
    document.getElementById('image-modal').style.display = 'none';
});

// Fechar modal ao clicar fora da imagem
document.getElementById('image-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
});