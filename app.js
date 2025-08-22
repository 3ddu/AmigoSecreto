//validar nome
const regexApenasLetras = /^[a-zA-ZáàâãéèêíïóôõöúüçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÜÇ\s]+$/;
const listaAmigos = [];

// Adicionar amigo 
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim().toLowerCase();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (!regexApenasLetras.test(nome)) {
        alert("O nome deve conter apenas letras e espaços.");
        return; // Retorna para evitar que o nome seja adicionado
        }
        // Verificar se o nome já existe na lista
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        input.value = "";
        return;
    }
    listaAmigos.push(nome);
    input.value = "";
vizualizarLista();
}
// Vizualizar lista de amigos
function vizualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });       
}
// Sortear amigo secreto
function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");// Pega o elemento onde o resultado vai aparecer
    resultadoElement.innerHTML = ""; // Limpa o resultado anterior
    if (listaAmigos.length < 2) {// Verifica se tem pelo menos dois amigos na lista
        alert("É necessário pelo menos dois amigos para realizar o sorteio.");
        return;
    }
    // A gente vai criar uma constante para guardar o número mágico.
    // A fórmula Math.floor(Math.random() * listaAmigos.length) faz a mágica de escolher um número aleatório.
    const sorteador = Math.floor(Math.random() * listaAmigos.length);
    // A gente usa o número mágico (sorteador) para encontrar o amigo na nossa lista.
    // O número dentro dos colchetes [] é a posição do amigo na lista.
    const amigoSorteado = listaAmigos[sorteador];// pega o nome do amigo que foi sorteado.
    const li = document.createElement("li");// cria um novo item na lista (li) para mostrar o resultado.
    li.textContent = `O nome sorteado foi ${amigoSorteado}`;// coloca o nome do amigo sorteado dentro do item da lista.
    resultadoElement.appendChild(li);// coloca o item da lista (li) dentro do elemento de resultado.
    
    // Remover o amigo sorteado da lista para evitar repetições  
    listaAmigos.splice(sorteador, 1);// remove o amigo sorteado da lista
    vizualizarLista(); // Atualiza a visualização da lista de amigos
}
    
function limparLista(){ // Limpa a lista de amigos e o resultado
        listaAmigos.length = 0; // Limpa a lista de amigos
        document.getElementById("listaAmigos").innerHTML = "";// Limpa a lista de amigos na interface
        document.getElementById("resultado").innerHTML = "";// Limpa o resultado na interface
}