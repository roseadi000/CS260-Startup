export function createProject(name) {
    console.log('Creating Project')

    const projects = JSON.parse((localStorage.getItem('projects') || '[]'));

    projects.push({name});
    localStorage.setItem('projects', JSON.stringify(projects));
}