let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = ''
}

function sortear(){
    embaralha(amigos);
    let Sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            Sorteio.innerHTML = Sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
    }
}


}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]]
    }

}