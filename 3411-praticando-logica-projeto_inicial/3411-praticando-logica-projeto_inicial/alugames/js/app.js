function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.className == 'dashboard__item__img dashboard__item__img--rented'){
        imagem.className = 'dashboard__item__img';
    } else {
        imagem.className = 'dashboard__item__img dashboard__item__img--rented';
    }

    if (botao.textContent == 'Alugar'){
        botao.textContent = 'Devolver';
        botao.className = 'dashboard__item__button dashboard__item__button--return';
    } else {
        botao.textContent = 'Alugar';
        botao.className = 'dashboard__item__button';
    }
}
