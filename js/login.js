document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    password = userPassword.value;

    if (email === 'adnan@gmail.com' && password === 'secret') {
        console.log('Valid user')
    } else {
        console.log('Invalid User')
    }
    userEmail.value = ''
    userPassword.value = ''
})