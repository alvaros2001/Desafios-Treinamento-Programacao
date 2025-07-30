
function comprar() {
    let qtdCompra = document.getElementById('qtd').value;
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (tipoIngresso == 'inferior') {
        subtracaoInf = qtdInferior - qtdCompra;
        if (tipoIngresso == 'inferior' && subtracaoInf < 0) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        qtdInferior = subtracaoInf;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
    } else if (tipoIngresso == 'superior') {
        subtracaoSup = qtdSuperior - qtdCompra;
        if (tipoIngresso == 'superior' && subtracaoSup < 0) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        qtdSuperior = subtracaoSup;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
    } else {
        subtracaoPista = qtdPista - qtdCompra;
        if (tipoIngresso == 'pista' && subtracaoPista < 0) {
            alert(`Quantidade indisponível para ${tipoIngresso}!`);
            return;
        }
        qtdPista = subtracaoPista;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
    }





}