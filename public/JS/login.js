document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Armazena o token no localStorage
            localStorage.setItem('token', data.token);

            // Redireciona para a página /itmasters
            window.location.href = '/itmasters';
        } else {
            alert(data.msg);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Tente novamente.');
    }
});