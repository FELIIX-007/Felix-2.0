 function isElementInViewport(el) {  //Função que verifica se um elemento está visível na tela.
    const rect = el.getBoundingClientRect(); //Obtém o tamanho e a posição do elemento.
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&  //rect.top, rect.left, rect.bottom, rect.right: Coordenadas do elemento em relação ao viewport.
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)  //window.innerHeight e window.innerWidth: Tamanho da janela do navegador.
    );
}

// Adiciona a classe de animação quando o elemento aparece


function checkAnimation() {    //erifica se o conteúdo está no viewport e adiciona a classe .slide-up.
    const cards = document.querySelectorAll('.cardA, .cardB');  // Seleciona o elemento com a classe .cardA, .cardB.
    cards.forEach(card => {
        if (isElementInViewport(card)) {  // verifica se o elemento .cardA, .cardB está visível na tela, ou seja, se ele está dentro do "viewport" do navegador.
            card.classList.add('slide-up');//Adiciona a classe slide-up, acionando a animação.
        }
    });
}

// Evento de rolagem para acionar a verificação
window.addEventListener('scroll', checkAnimation);  //Executa checkAnimation sempre que o usuário rolar a página, verificando se o elemento .cardA, .cardB já está visível.