var inputs = '';
var storeValue = '';
var operators = ['/', 'x', '-', '+'];

function selectedValue(e) {
    if (operators.includes(e.innerText)) {
        if (e.innerText == 'x') storeValue += inputs + '*';
        else storeValue += inputs + e.innerText;

        inputs = '';
        console.log('storeValue: ' + storeValue);
    } else {
        if (e.innerText != '=') {
            inputs += e.innerText;
            document.getElementById('screen').innerHTML = inputs;
        } else {
            if (inputs == '') alert('invalid');
            else {
                console.log('testing: ' + storeValue + inputs);
                storeValue += inputs;

                if (eval(storeValue) % 1 != 0)
                    storeValue = eval(storeValue).toFixed(2);

                document.getElementById('screen').innerHTML = eval(storeValue);
                console.log(eval(storeValue));
                inputs = '';
                storeValue = '';
            }
        }
    }
}
