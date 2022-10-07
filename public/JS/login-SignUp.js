async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#FormEmail').value.trim();
    const password = document.querySelector('#FormPassword').value.trim();

    if (email && password) {
        const response = await fetch('', { /* user route here  */
            method: 'post',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(result.message)
        }
    }
}

document.querySelector('.loginForm').addEventListener('submit', loginHandler);