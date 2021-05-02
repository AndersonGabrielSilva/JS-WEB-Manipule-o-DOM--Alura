const ButtonRemover = () => {
    var buttonRemove = document.createElement('button');

    buttonRemove.innerText = 'Remover'

    buttonRemove.addEventListener('click', removerTarefa)

    return buttonRemove;
}

const removerTarefa = (evento) => {
    const botaoRemover = evento.target;

    const tarefaCompleta = botaoRemover.parentElement;

    tarefaCompleta.remove();
}

export default ButtonRemover;