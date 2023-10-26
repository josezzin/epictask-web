function apagar(id) {
    const tarefa = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefas_filtrados = tarefa.filter(tarefa => tarefa.id !== id)
    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtrados))
    atualizar()
    calcularEstatisticas()
}