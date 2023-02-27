document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    password = userPassword.value;

    if (email === 'adnan@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('Invalid Username & Password')
    }
    userEmail.value = ''
    userPassword.value = ''
})