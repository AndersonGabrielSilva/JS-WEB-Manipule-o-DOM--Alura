
    import ButtonConclui from './componentes/concluiTarefa.js'
    import ButtonRemover from './componentes/deletaTarefa.js'

    // Metodos
    const createTask = (evento) => {

        evento.preventDefault();

        const list = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const value = input.value;

        const task = document.createElement('li');
        task.classList.add('task')

        const content = `<p class="content">${input.value} </p>`;

        task.innerHTML = content;
        task.appendChild(ButtonConclui());
        task.appendChild(ButtonRemover());
        list.appendChild(task);
        input.value = '';

    }

    // Adicionando Eventos
    const newTask = document.querySelector('[data-form-button]');
    newTask.addEventListener('click', createTask)
