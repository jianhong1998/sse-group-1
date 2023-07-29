const loadItem = () => {
    const item = localStorage.getItem('item');

    if (item === null) {
        return window.location.replace('/');
    }

    const itemHolder = document.getElementById('item-holder');

    if (itemHolder === null) {
        return alert('Element with id "item-holder" not exists');
    }

    itemHolder.appendChild(document.createTextNode(item));
};

loadItem();

const backButtonOnClickHandler = () => {
    window.location.replace('/');
};

document
    .getElementById('back-button')
    .addEventListener('click', backButtonOnClickHandler);
