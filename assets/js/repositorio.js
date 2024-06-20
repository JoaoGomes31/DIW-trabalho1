document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const repoList = document.getElementById('repo-list');

    if (!username) {
        repoList.innerHTML = '<li>Nome de usuário não fornecido.</li>';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }
        const repos = await response.json();
        if (repos.length === 0) {
            repoList.innerHTML = '<li>Nenhum repositório encontrado.</li>';
            return;
        }

        repoList.innerHTML = repos.map(repo => {
            const creationDate = new Date(repo.created_at).toLocaleDateString('pt-BR');
            return `
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description ? repo.description : 'Sem descrição'}</p>
                    <p>Criado em: ${creationDate}</p>
                </li>
            `;
        }).join('');
    } catch (error) {
        repoList.innerHTML = `<li>${error.message}</li>`;
    }
});