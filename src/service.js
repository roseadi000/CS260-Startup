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
export function createCharacter(name, projectName, currentUser) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const project = user.projects.find(p => p.name === projectName);
    const characters = project.characters;

    const newCharacter = {
        name,
        date: '2/2/2222',
        fullName: '',
        age: '',
        gender: '',
        height: '',
        birthday: '',
        species: '',
        personality: '',
        strengths: '',
        weaknesses: '',
    }

    characters.push(newCharacter);
    localStorage.setItem('users', JSON.stringify(users));
    
    return newCharacter;
}

//Character Sheets Service
function findCharacter(users, projectName, characterName, currentUser){
    const user = users.find((u) => u.username === currentUser.username);
    const project = user.projects.find(p => p.name === projectName);
    const character = project.characters.find(c => c.name === characterName);

    return character;
}

export function saveFullName(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.fullName = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveAge(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.age = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveGender(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.gender = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveHeight(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.height = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveBirthday(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.birthday = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveSpecies(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.species = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function savePersonality(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.personality = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveStrengths(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.strengths = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function saveWeaknesses(value, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.weaknesses = value;
    localStorage.setItem('users', JSON.stringify(users));
}

//Friends Service
/*const messages = ['Carl sent you a friend request', 'David is online', 'Jenna sent you a friend request', 
    'Claire is online', 'Ben sent you a friend request', 'David is online', 'Claire is online'];
const names = ['Carl', 'Debra', 'John', 'Jenna', 'Grace', 'Megan', 'Jack', 'Dave', 'Logan', 'Ariel', 'Kamay'];

export function getRandomName() {
    const num = Math.floor(Math.random() * names.length);
    const name = names[num];

    return name;
}

export function friendRequest() {
    const name = getRandomName();

    this.broadcastEvent('friendRequest', {from: name});
}*/