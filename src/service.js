//Login Services
export function registerUser(email, password, username) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

    const newUser = {
        email: email,
        password: password,
        username: username,
        projects: [],
        friends: [],
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

export function checkLogin(email, password) {
    const textStorage = localStorage.getItem('users') || '[]';
    const users = JSON.parse(textStorage);

    const findUser = users.find((u) => u.email === email && u.password === password);
    console.log(findUser);

    if (findUser) {
        console.log('Worked');
        const user = {
            username: findUser.username,
        }
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}

//Projects Service
export function createProject(name, currentUser) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const projects = user.projects;

    const newProject = {
        name,
        date: '1/1/1111',
        characters: [],
    }

    projects.push(newProject);
    localStorage.setItem('users', JSON.stringify(users));

    return newProject;
}

//Character Service
export function createCharacter(name, projects, project, currentUser) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const characters = user.project.characters;


    const newCharacter = {
        name,
        date: '2/2/2222',
    }

    characters.push(newCharacter);
    localStorage.setItem('users', JSON.stringify(users));
    
    return newCharacter;
}