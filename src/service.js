export function createProject(name) {
    console.log('Creating Project')

    const projects = JSON.parse((localStorage.getItem('projects') || '[]'));

    const newProject = {
        name,
        date: '1/1/1111',
        characters: [],
    }

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    return newProject;
}

export function createCharacter(name) {
    console.log('Creating Character');

    const characters = JSON.parse((localStorage.getItem('characters') || '[]'));

    const newCharacter = {
        name,
        date: '2/2/2222',
    }

    characters.push(newCharacter);
    localStorage.setItem('characters', JSON.stringify(characters));
}