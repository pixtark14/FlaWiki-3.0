function message(text, background) {
    Toastify({
        text: text,
        duration: 1300,
        style: {
            background: background,
        }
    }).showToast()
    
}

document.querySelector('.copy-btn').addEventListener('click', function () {
    navigator.clipboard.writeText('business.kayke@gmail.com')
})

document.querySelector('.copy-btn').addEventListener('click', () => {
    message('E-mail copiado com sucesso!', 'rgb(209, 92, 92)');
});

document.querySelector('#contact_form').addEventListener('submit', () => {
    alert('Informações preenchidas com sucesso!');
});

