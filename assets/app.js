let output = document.getElementById('displayOutput');
const buttons = document.querySelectorAll('.calcButton');
const buttonParent = document.querySelector('.buttons');
let next = false;

eventListeners();

function eventListeners() {
    for(const button of buttons) {
        button.addEventListener('click', displayOnClick);
    }
    // buttonParent.addEventListener('click', checkClass);
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

function equateInputs(e) {
    output.value = eval(output.value);
    // if(e.target.classList.contains('operator')) {
    //     next = next;
    // } else {
    //     next = !next;
    // }
    // console.log(next);
    next = !next;
}

// function checkClass(e) {
//     if(e.target.classList.contains('operator')) {
//         console.log(e.target);
//         next = next;
//     } else {
//         next = !next;
//     }
//     return next;
// }

// function checkNext() {
//     if()
// }

function clearInput() {
    output.value = '';
}
