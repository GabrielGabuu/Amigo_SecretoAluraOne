//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendsNames = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let inputValue = input.value.trim();

    if (inputValue === '') {
        return alert("Digite um nome!");
    }

    // Adiciona o novo amigo ao array
    friendsNames.push(inputValue);
    
    // Limpa a lista HTML antes de adicionar novos itens
    let friendsList = document.querySelector("#listaAmigos");
    friendsList.innerHTML = "";

    // Adiciona cada amigo da lista ao HTML
    friendsNames.forEach(friend => {
        let newFriend = document.createElement("li");
        newFriend.innerHTML = friend;
        friendsList.appendChild(newFriend);
    });

    // Limpa o campo de entrada
    input.value = "";
    console.log(friendsNames);
}

function sortearAmigo() {
    if (friendsNames.length === 0) {
        return alert("Adicione amigos antes de sortear!");
    }
    let sorteado = friendsNames[Math.floor(Math.random() * friendsNames.length)];
    let listResultado = document.querySelector("#resultado");
    listResultado.textContent = `O amigo sorteado foi: ${sorteado}`; // Definindo o conteúdo do h2
    
}