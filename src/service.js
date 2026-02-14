export function createProject(name) {
    const projects = JSON.parse((localStorage.getItem('projects') || '[]'));

    const newProject = {
        name,
        date: '1/1/1111',
        characters: [{name: "John", date: "2/2/2222"}],
    }

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    return newProject;
}

export function createCharacter(name, projects, project) {

    const newCharacter = {
        name,
        date: '2/2/2222',
    }

    project.characters.push(newCharacter);
    localStorage.setItem('projects', JSON.stringify(projects))
    
    return newCharacter;
}