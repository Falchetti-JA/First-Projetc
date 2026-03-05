let lista = JSON.parse(localStorage.getItem("tarefas")) || []

function adicionarTarefa() {
    let input = document.querySelector("input")
    let texto = input.value.trim()

    if (texto === "") return

    let agora = new Date()

    let dataHora = agora.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).replace(",", " -")

    lista.push({
        texto: texto,
        data: dataHora
    })

    salvarDados()
    renderizarLista()
    input.value = ""
}

function deletarTarefa(index) {
    lista.splice(index, 1)
    salvarDados()
    renderizarLista()
}

function salvarDados() {
    localStorage.setItem("tarefas", JSON.stringify(lista))
}

function renderizarLista() {
    let ul = document.querySelector(".lista-tarefas")
    ul.innerHTML = ""

    lista.forEach((tarefa, index) => {
        let li = document.createElement("li")

        li.innerHTML = `
            <div class="tarefa-texto">${tarefa.texto}</div>
            <div class="tarefa-data">${tarefa.data}</div>
            <span class="btn-delete" onclick="deletarTarefa(${index})">❌</span>
        `

        ul.appendChild(li)
    })
}

renderizarLista()


