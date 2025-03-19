//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar o nome ao array
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    inputAmigo.value = "";

    // Atualizar a lista de nomes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpar a lista antes de atualizar

    // Adicionar cada nome à lista
    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    // Sortear um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    // Exibir o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSecreto}</strong></li>`;
}