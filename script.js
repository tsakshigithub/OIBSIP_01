let screen = document.getElementById('text_input');

buttons = document.querySelectorAll('button');

let inputValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            inputValue += buttonText;
            screen.value = inputValue;
        }
        else if (buttonText == 'C') {
            inputValue = "";
            screen.value = inputValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            screen.value = inputValue;
        }

    })
}