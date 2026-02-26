//Login Services
export function registerUser(email, password, username) {
    const users = JSON.parse((localStorage.getItem('users') || '[]'));

    const newUser = {
        email: email,
        password: password,
        username: username,
        projects: [],
        friends: [],
        friendRequests: [],
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
        imageURL: '/character_placeholder.png',
        personality: '',
        strengths: '',
        weaknesses: '',
    }

    characters.push(newCharacter);
    localStorage.setItem('users', JSON.stringify(users));
    
    return newCharacter;
}

//Character Sheets Service
const names = [['Carl', 'John', 'Jack', 'Dave', 'Logan', 'Bob', 'John', 'Anthony', 'Will'], ['Debra', 'Jenna', 'Grace', 'Megan', 'Ariel', 'Kamay', 'Charlotte', 'Tessa']];


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

export function getRandomName(gender) {
   let name = '';

    if (gender === 'male') {
        const num = Math.floor(Math.random() * names[0].length);
        name = names[0][num];
    }
    else if (gender === 'female') {
        const num = Math.floor(Math.random() * names[1].length);
        name = names[1][num];
    }
    else {
        const list =  Math.round(Math.random());
        const num = Math.floor(Math.random() * names[list].length);
        name = names[list][num];
    }

    return name;
}

export function saveImage(url, projectName, characterName, currentUser){
    const users = JSON.parse(localStorage.getItem('users'));
    const character = findCharacter(users, projectName, characterName, currentUser);

    character.imageURL = url;
    localStorage.setItem('users', JSON.stringify(users));
}

//Account Services
export function updateUsername(value, currentUser, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);

    user.username = value;
    currentUser.username = value;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}
export function updateEmail(value, currentUser, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);

    user.email = value;
    localStorage.setItem('users', JSON.stringify(users));
}
export function updatePassword(value, currentUser, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);

    if (user.password === password) {
        user.password = value;
        localStorage.setItem('users', JSON.stringify(users));
    }
    else {
        alert('Incorrect Password')
    }
}

//Friend Service
export function saveFriendRequests(request) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === request.to);
    const requests = user.friendRequests

    requests.push(request);
    localStorage.setItem('users', JSON.stringify(users));
}
export function addFriend(request, currentUser) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const newFriend = request.from;

    user.friends.push(newFriend);

    const updateRequests = user.friendRequests.filter((r) => r.id !== request.id); 
    user.friendRequests = updateRequests;
    localStorage.setItem('users', JSON.stringify(users));
}