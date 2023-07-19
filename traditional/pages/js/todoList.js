const getListHolder = () => {
    return document.getElementById('list-holder');
};

const addItem = (item) => {
    const listHolder = getListHolder();

    if (listHolder === null) {
        const message = 'listHolder is null';
        throw new Error(message);
    }

    if (typeof item !== 'string') {
        const message = 'item is not string';
        throw new Error(message);
    }

    const listItem = document.createElement('div');
    listItem.appendChild(document.createTextNode(item));
    listItem.classList.add('list-item');

    listHolder.appendChild(listItem);
};

const getInputValue = () => {
    const input = document.getElementById('todo-list-input');

    if (input === null) {
        alert('todo-list-input is undefined');
        throw new Error('todo-list-input is undefined');
    }

    return input.value;
};

const clearInputValue = () => {
    const input = document.getElementById('todo-list-input');

    if (input === null) {
        alert('todo-list-input is undefined');
        throw new Error('todo-list-input is undefined');
    }

    input.value = '';
};

const submitTodoItem = () => {
    try {
        const value = getInputValue();

        if (typeof value !== 'string' || value === null || value.length === 0) {
            return;
        }

        addItem(value);
        clearInputValue();
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert(JSON.stringify(error));
        }
    }
};

document.getElementById('add-button').addEventListener('click', submitTodoItem);
