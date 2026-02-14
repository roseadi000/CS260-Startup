export function createProject(name) {
    const projects = JSON.parse((localStorage.getItem('projects') || '[]'));

    const newProject = {
        name,
        date: '1/1/1111',
        characters: ['John'],
    }

    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));

    return newProject;
}

export function createCharacter(name, characterList) {

    const newCharacter = {
        name,
        date: '2/2/2222',
    }

    characterList.push(newCharacter);
    console.log(characterList);
    return newCharacter;
}