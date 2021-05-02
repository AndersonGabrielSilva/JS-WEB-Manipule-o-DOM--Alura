//Criando Componente => Sempre começa com maiusculo
const ButtonConclui = () => {
    var buttonSucess = document.createElement('button');
    buttonSucess.classList.add('check-button');
    buttonSucess.innerText = 'Concluir'

    buttonSucess.addEventListener('click', concluirTarefa)

    return buttonSucess;
}

const concluirTarefa = (evento) => {
    const botaoconcluir = evento.target;

    const tarefaCompleta = botaoconcluir.parentElement;

    tarefaCompleta.classList.toggle('done')
}


export default ButtonConclui;