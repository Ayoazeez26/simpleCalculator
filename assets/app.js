let output = document.getElementById('displayOutput');
const buttons = document.querySelector('.buttons');

eventListeners();

function eventListeners() {
    buttons.addEventListener('click', displayOnClick);
}

function displayOnClick(e) {
    e.preventDefault();
    output.value += e.target.textContent;
}

function equateInputs() {
    output.value = eval(output.value);
    console.log(output.value);
}