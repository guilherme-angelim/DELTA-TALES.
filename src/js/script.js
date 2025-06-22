let lastScroll = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;
    const header = document.querySelector('header');

    if (currentScroll > 40 && currentScroll > lastScroll) {
        // Descendo
        header.classList.add('scrolled'); // Esconde logo
    } else if (currentScroll <= 0) {
        // De volta ao topo
        header.classList.remove('scrolled'); // Mostra logo
    }

    lastScroll = currentScroll;
});

