document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search');
    const projectList = document.getElementById('project-list');
    const projects = projectList.querySelectorAll('.project-item');

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const projectTitle = project.querySelector('.project-title');
            const projectText = projectTitle.innerText.toLowerCase();

            if (projectText.includes(searchTerm)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }

    });

    const reverseProjects = () => {
        const projectsList = document.getElementById('project-list');

        const projects = Array.from(projectsList.children);

        projects.reverse();

        projectsList.innerHTML = '';

        projects.forEach(item => {
            projectsList.appendChild(item);
        });
    }

    reverseProjects();

});