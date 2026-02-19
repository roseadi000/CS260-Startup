//Login Services
export function registerUser(email, password, username) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

    users.push({email, password, username})
    localStorage.setItem('users', JSON.stringify(users));
}

export function checkLogin(email, password) {
    const textStorage = localStorage.getItem('users') || '[]';
    const users = JSON.parse(textStorage);

    const findUser = users.find((u) => u.email === email && u.password === password);

    if (findUser) {
        const user = {
            email: findUser.email,
            password: findUser.password,
            username: findUser.username,
        }

        return user;
    }
    //else {return 'Failed'};
}

//Projects Service
export function createProject(name) {
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

//Character Service
export function createCharacter(name, projects, project) {

    const newCharacter = {
        name,
        date: '2/2/2222',
    }

    project.characters.push(newCharacter);
    localStorage.setItem('projects', JSON.stringify(projects))
    
    return newCharacter;
}