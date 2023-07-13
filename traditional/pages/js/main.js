var results = 0;
const operators = ['/', 'x', '-', '+'];
// console.log(operators[0])

document.getElementById('screen').innerHTML = results;
results = "";

const btn_op = document.getElementById('op');
btn_op.addEventListener('click', function onClick() {
    btn_op.style.backgroundColor = '#555555';
    btn_op.style.color = 'white';
});


// function 
const selectedValue = (e) => {
    while (!operators.includes(e.innerText)) {
        results += e.innerText;
        break;
    }

    switch (e.innerText) {
        case '/':
            results += '/';
            break;
        case 'x':
            results += 'x';
            break;
        case '-':
            results += '-';
            break;
        case '+':
            results += '+';
            break;
        case '=':
            results = Number(results);
            break;
    }

    document.getElementById('screen').innerHTML = results;
}