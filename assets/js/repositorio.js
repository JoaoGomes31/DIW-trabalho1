document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');
    const repos = JSON.parse(localStorage.getItem('repositoriosUsuarioGitHub'));

    if (!repos || repos.length === 0) {
        repoList.innerHTML = '<li>Nenhum repositório encontrado.</li>';
        return;
    }

    repoList.innerHTML = repos.map(repo => `
        <li>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>${repo.description ? repo.description : 'Sem descrição'}</p>
        </li>
    `).join('');
});