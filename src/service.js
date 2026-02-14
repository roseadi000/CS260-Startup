export function createProject(name) {
    console.log('Creating Project')

    const projects = JSON.parse((localStorage.getItem('projects') || '[]'));

    const newProject = {
        name,
        date: '1/1/1111',
        amount: '0',
        characters: [],
    }

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    return newProject;
}