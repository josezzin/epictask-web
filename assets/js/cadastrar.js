document.querySelector("#botao-cadastrar").addEventListener("click", () => {

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

  const tarefa = {
    id: Date.now(),
    nome: document.querySelector("#nome").value,
    idade: document.querySelector("#idade").value,
    email: document.querySelector("#email").value,
    concluida: false
  }

  tarefas.push(tarefa)

  localStorage.setItem("tarefas", JSON.stringify(tarefas))

  window.location.href = "index.html"
  calcularEstatisticas()

})
