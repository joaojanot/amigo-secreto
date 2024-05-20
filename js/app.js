//Declarando listas 
let listaDeAmigos = [];
let listaSorteio = document.getElementById('lista-sorteio');
//Adicionando nomes, bloqueando nomes vazios ou iguais
function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    if (nome == ''){
        alert('Digite um nome para que possa ser adicionado à lista');
    } else {
        if (listaDeAmigos.includes(nome)){
            alert('Nome já adicionado');
            return;
        }
        listaDeAmigos.push(nome);
        document.getElementById('lista-amigos').innerHTML = listaDeAmigos;
        document.getElementById('nome-amigo').value = '';
    }
}
//Sorteando, bloqueando sorteios com menos de 3 nomes
function sortear(){
    if (listaDeAmigos.length < 3){
        alert('Nomes insuficientes');
        return;
    }
    embaralha(listaDeAmigos);
    for (let i = 0; i < listaDeAmigos.length; i++){
        if (i == listaDeAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + ' --> ' + listaDeAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaDeAmigos[i] + ' --> ' + listaDeAmigos[i+1] + '<br>';
        }
    }
}
//Reiniciando sorteio
function reiniciar(){
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = listaDeAmigos;
    listaSorteio.innerHTML = '';
}
//Função que sorteia os nomes
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
