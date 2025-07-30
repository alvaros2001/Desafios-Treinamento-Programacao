let listaAmigos = []; // Variável global

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos');

    amigosIncluidos.textContent == ''
        ? amigosIncluidos.innerHTML = nomeAmigo
        : amigosIncluidos.innerHTML += ', ' + nomeAmigo;

    listaAmigos = amigosIncluidos.textContent.split(',').map(nome => nome.trim());
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let listaEmbaralhada = embaralharSemMesmaPosicao([...listaAmigos]);
    let listaSorteio = document.getElementById('lista-sorteio')


    listaSorteio.innerHTML = listaAmigos.map((amigo, i) => {
        return `${amigo} → ${listaEmbaralhada[i]}`;
    }).join('<br>');

}


function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
    }
    return array;
}

function embaralharSemMesmaPosicao(array) {
    let resultado;
    let tentativas = 0;

    do {
        resultado = [...array];

        // Embaralha com Fisher-Yates
        for (let i = resultado.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
        }

        tentativas++;
        // Continua tentando até que nenhuma posição seja igual à original
    } while (resultado.some((valor, i) => valor === array[i]) && tentativas < 100);

    if (tentativas === 100) {
        throw new Error("Não foi possível embaralhar sem repetir posições após 100 tentativas.");
    }

    return resultado;
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';


}





