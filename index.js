// var projects = document.querySelectorAll('.project-card');

// projects.forEach(project => project.setAttribute('target', '_blank'));

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search');
    const projectList = document.getElementById('project-list');
    const projects = projectList.querySelectorAll('.project-item');
    const projectTitles = projectList.querySelectorAll('.project-title');

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();

        // for (let i = 0; i < projectTitles.length; i++) {
        //     const project = projects[i];
        //     const projectTitle = projectTitles[i]
        //     const projectText = projectTitle.innerText.toLowerCase();
        //     // const projectText = project.innerText.toLowerCase();

        //     if (projectTitle.includes(searchTerm)) {
        //         project.style.display = 'block';
        //     } else {
        //         project.style.display = 'none';
        //     }
        // }

    

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const projectTitle = project.querySelector('.project-title'); // Assuming the title is a child element with class 'project-title'
            const projectText = projectTitle.innerText.toLowerCase();

            if (projectText.includes(searchTerm)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }

            if ()
        }
        
    });
});