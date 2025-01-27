let amigos = [];

const inputNome = document.getElementById('amigo');
const add = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const sortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
    const nome = inputNome.value.trim();
    if (nome && !amigos.includes(nome)) {
            amigos.push(nome);
            inputNome.value = '';
            atualizaLista(); 
    }
    else if(amigos.includes(nome)){
        alert('Esse nome já foi adicionado!');
    }
    else{
        alert('Insirá um nome válido!')
    }
}
f

function atualizaLista(){
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`
    }
    else{
        resultado.innerHTML = `<li>Não há amigos na lista para sortear. </li>`;
    }
}

add.addEventListener('click', adicionarAmigo);
sortear. addEventListener('click', sortearAmigo);