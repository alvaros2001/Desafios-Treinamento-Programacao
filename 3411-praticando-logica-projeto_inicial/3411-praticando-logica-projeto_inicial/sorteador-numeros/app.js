let textoResultado = document.getElementById('resultado').querySelector('.texto__paragrafo');
let botaoReiniciar = document.getElementById('btn-reiniciar')

function sortear() {
    let qtdNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;

    let sorteados = [];

    for (let i = 0; i < qtdNumeros; i++) {
        numero = obterNumeroAleatorio(de, ate);

        if (sorteados.includes(numero)) {
            return sortear();
        } else {
            sorteados.push(numero);
        }
    }

    if (isNaN(de, ate, numero)) {
        textoResultado.innerHTML = 'Preencha os campos';

    } else {
        textoResultado.innerHTML = `Números sorteados:  ${sorteados}`;
        botaoReiniciar.className = 'container__botao';
    }

}

function obterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function limparCampos() {
    // inputQuantidade = document.getElementById('quantidade');
    // inputQuantidade.value = '';
    // inputDe = document.getElementById('de');
    // inputDe.value = '';
    // inputAte = document.getElementById('ate');
    // inputAte.value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    limparCampos();
    botaoReiniciar.className = 'container__botao-desabilitado';
    textoResultado.innerHTML = 'Preencha os campos';
}