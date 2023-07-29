const allTodoItems = JSON.parse(localStorage.getItem('allTodoItems')) || [];

const storeVisitingItem = (item) => {
    localStorage.setItem('item', item);
};

const loadTodoItems = () => {
    allTodoItems.forEach((item) => {
        addItem(item);
    });
};

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
    listItem.classList.add('list-item');

    const textContainer = document.createElement('div');
    textContainer.appendChild(document.createTextNode(item));

    listItem.appendChild(textContainer);

    listItem.addEventListener('click', () => {
        storeVisitingItem(item);

        window.location.replace('/todo-item');
    });

    listHolder.appendChild(listItem);
};

const addItemToArray = (item) => {
    allTodoItems.push(item);
    localStorage.setItem('allTodoItems', JSON.stringify(allTodoItems));
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

const addButtonOnClickHandler = () => {
    try {
        const value = getInputValue();

        if (typeof value !== 'string' || value === null || value.length === 0) {
            return;
        }

        addItem(value);
        addItemToArray(value);
        clearInputValue();
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert(JSON.stringify(error));
        }
    }
};

const clearAllItems = () => {
    while (allTodoItems.length > 0) {
        allTodoItems.pop();
    }

    localStorage.removeItem('allTodoItems');

    const listHolder = getListHolder();

    const children = listHolder.children;

    while (children.length > 0) {
        const element = children.item(0);

        listHolder.removeChild(element);
    }
};

localStorage.removeItem('item');

loadTodoItems();

document
    .getElementById('add-button')
    .addEventListener('click', addButtonOnClickHandler);

document
    .getElementById('clear-all-items-button')
    .addEventListener('click', clearAllItems);
