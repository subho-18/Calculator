let screen = document.getElementById('screen');		//input tag
buttons = document.querySelectorAll('button');
let screenValue = '';	//value of the input(String)

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;	//e.text-gives us the button that is clicked and innerText-gives us the number 
													//that is written inside the button
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);	//eval()- function of js that evaluates 
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

