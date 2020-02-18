let output = document.getElementById('displayOutput');
const buttons = document.querySelectorAll('.calcButton');
let next = false;

eventListeners();

function eventListeners() {
    for(const button of buttons) {
        button.addEventListener('click', displayOnClick);
    }
}

function deleteInput() {
    let tempArr = output.value.split("");
    tempArr.pop();
    output.value = tempArr.join("");
    output.value = output.value.toString();
}

function displayOnClick(e) {
    e.preventDefault();
    if(next) {
        clearInput();
        next = !next;
        output.value += e.target.textContent;
    } else {
        output.value += e.target.textContent;
    }
}

function equateInputs() {
    output.value = eval(output.value);
    next = !next;
}

function clearInput() {
    output.value = '';
}
