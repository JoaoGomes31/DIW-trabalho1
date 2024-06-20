async function buscarRepos() {
    const username = document.getElementById('username').value;

    if (!username) {
        alert('Por favor, digite um nome de usuário.');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }
        const repos = await response.json();
        localStorage.setItem('repositoriosUsuarioGitHub', JSON.stringify(repos));
        window.location.href = 'repositorio.html';
    } catch (error) {
        alert(error.message);
    }
}