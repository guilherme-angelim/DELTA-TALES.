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

const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});