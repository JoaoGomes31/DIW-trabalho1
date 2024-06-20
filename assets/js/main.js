function irParaRepos() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Por favor, digite um nome de usuário.');
        return;
    }
    window.location.href = `repositorio.html?username=${username}`;
}