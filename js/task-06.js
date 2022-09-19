// const textInput = document.querySelector('#validation-input')
// console.log(textInput.getAttribute('data-length'))

// textInput.addEventListener('blur', event => {
// 	if (event.target.value.length == textInput.getAttribute('data-length')) {
// 		textInput.classList.add('valid')
// 		if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
// 	} else {
// 		if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
// 		textInput.classList.add('invalid')
// 	}
// })

const input = document.querySelector(`#validation-input`);
const length = Number(input.dataset.length);

input.addEventListener(`blur`, oOBlur);

function oOBlur() {
	if (input.value.length === length) {
		input.classList.remove(`invalid`);
		return input.classList.add(`valid`);
	}
	else {
		input.classList.remove(`valid`);
		return input.classList.add(`invalid`);
	}
}