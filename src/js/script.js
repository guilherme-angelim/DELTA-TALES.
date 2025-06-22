let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    const header = document.querySelector('header');

    // Scroll para baixo: adiciona .scrolled
    if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('scrolled');
    } 
    // Scroll para cima: remove .scrolled só no topo
    else if (currentScroll < 10) {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});