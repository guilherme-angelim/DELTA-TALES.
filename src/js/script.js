// código de rolagem de página

// armazena posição inicial para saber quando irá subir ou descer(começo da pg)
let lastScroll = 0;
// toda vez que executar o scroll, a função é executada
window.addEventListener('scroll', function () {
    // irá salvar a posição na variável e retornará a posição vertical atual do scroll
    const currentScroll = window.scrollY;
    // seleciona o header para manipular
    const header = document.querySelector('header');

    // se o usuário rolar 40 pixels, será acionado a classe scrolled ao header
    if (currentScroll > 40 && currentScroll > lastScroll) {
        // Descendo
        // adiciona o scroll ao css
        header.classList.add('scrolled'); // Esconde logo
        // remove a classe scrolled do header, significa q a pg voltou ao início
    } else if (currentScroll <= 0) {
        // De volta ao topo
        // remove a classe de fato
        header.classList.remove('scrolled'); // Mostra logo
    }
    // atualiza a posição atual do scroll, ou seja 0
    lastScroll = currentScroll;
});

