let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    const header = document.querySelector('header');

    if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('scrolled');
    } 
    
    else if (currentScroll < 10) {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});