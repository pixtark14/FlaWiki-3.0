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
    message('E-mail copied successfully!', 'rgb(209, 92, 92)');
});

document.querySelector('#contact_form').addEventListener('submit', () => {
    alert('Informations fulfilled successfully!');
});

