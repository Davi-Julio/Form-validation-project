const nomeInput = document.querySelector('#text')
const passwordInput = document.querySelector('#password')
const btn = document.querySelector('.btn-form')
const error = document.querySelector('.error')

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    const nomeValue = nomeInput.value;
    const passwordValue = passwordInput.value;

    if(nomeValue == '' && passwordValue == ''){
        error.innerHTML = 'Please fill in the fields';
        error.classList = 'error';

        setTimeout(()=>{
            error.innerHTML ="";
            error.classList = "";

        },3000)

        return;
    }

    nomeInput.value =''
    passwordInput.value = ''
})