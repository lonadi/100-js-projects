// var projects = document.querySelectorAll('.project-card');

// projects.forEach(project => project.setAttribute('target', '_blank'));

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search');
    const projectList = document.getElementById('project-list');
    const projects = projectList.querySelectorAll('.project-item');

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const projectText = project.innerText.toLowerCase();

            if (projectText.includes(searchTerm)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
});