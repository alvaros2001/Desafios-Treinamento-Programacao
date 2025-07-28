let totalGeral = 0
// MUDEI DO GIT HUB
function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    totalGeral = totalGeral + preco

    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;


}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('valor-total').innerHTML = `<span class="texto-azul" id="valor-total">R$0,00</span>`
    document.getElementById('lista-produtos').innerHTML = '';
    totalGeral = 0;


}
