// document.querySelectorAll(`.login-form`)
// login - form.querySelector(`submit`, OnSubmit)
// function OnSubmit(evt) {
//     evt.preventDefault()
//     console.dir(evt.currentTaeget)
//     const { email, password } = evt.currentTaeget;
//     const data = {
//         email: email.value,
//         password: password.value
//     }
// }

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}