
const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const changeName = event => {
    nameLabel.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === `` ? nameLabel.textContent = "Anonymous" : null;
}
input.addEventListener ('input', changeName);