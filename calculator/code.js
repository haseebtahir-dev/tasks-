const buttons = document.querySelectorAll(".button-desgin, #rest, #equals, #del");
const display = document.getElementById("display");

let currentInput = ''; 

buttons.forEach(button => button.addEventListener("click", handleButtonClick));

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    
    if (buttonValue === "=") {
        try {
            let result = eval(currentInput); 
            console.log(currentInput)
            display.innerText = result;
            currentInput = result.toString();
        } catch (error) {
            display.innerText = "Error";
            currentInput = ''; 
        }
    } else if (buttonValue === "REST") {
        currentInput = '';
        display.innerText = '0';
    } else if (buttonValue === "DEL") {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || '0'; 
        }
    } else {
        currentInput += buttonValue;
        display.innerText = currentInput;
    }
}

