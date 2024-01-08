function getInputValue() {
    const userInput = document.getElementById('userInput');
    const userValue = userInput.value;
    return userValue;
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = getInputValue();
    console.log(inputValue);
}

const form = document.getElementById('userForm');
form.addEventListener('submit', handleSubmit);
function createAndUseElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element!';
    const container = document.getElementById('container');
    container.appendChild(newElement);
}
function createElements() {
    for (let i = 0; i < 5; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = `Element number ${i + 1}`;
        const container = document.getElementById('container');
        container.appendChild(newElement);
    }
}