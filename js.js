let nomes = [];

function adicionarNome() {
    let input = document.getElementById("nome");
    let nome = input.value.trim();

    if (nome !== "" && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear!");
        return;
    }

    let embaralhado = [...nomes];
    embaralhado.sort(() => Math.random() - 0.5);
    
    let resultado = "";
    for (let i = 0; i < embaralhado.length; i++) {
        let amigo = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];
        resultado += `${embaralhado[i]} → ${amigo}\n`;
    }

    document.getElementById("resultado").innerText = resultado;
}
