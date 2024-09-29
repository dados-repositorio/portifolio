function changeColor() {
    // Pega a nova cor escolhida pelo usuário
    const newColor = document.getElementById('newColor').value;

    // Seleciona todos os elementos que possuem a cor #1cffc2
    const elements = document.querySelectorAll('h1, h2, span, nav a, .about button, .progress, footer, aside#icones h2, aside#icones p, p.hashtag');

    // Itera sobre os elementos e altera a cor
    elements.forEach(element => {
        if (window.getComputedStyle(element).color === 'rgb(28, 255, 194)' || element.style.backgroundColor === 'rgb(28, 255, 194)') {
            element.style.color = newColor;
        }
        if (window.getComputedStyle(element).backgroundColor === 'rgb(28, 255, 194)') {
            element.style.backgroundColor = newColor;
        }
    });

    // Atualiza as barras de progresso, caso sejam coloridas
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        bar.style.backgroundColor = newColor;
    });

    // Atualiza os links de navegação (botões e outros que têm a cor de fundo #1cffc2)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.style.backgroundColor === 'rgb(28, 255, 194)') {
            link.style.backgroundColor = newColor;
        }
    });

    // Atualiza o botão de contato
    const contactButton = document.getElementById('contato');
    if (contactButton.style.backgroundColor === 'rgb(28, 255, 194)') {
        contactButton.style.backgroundColor = newColor;
    }
}