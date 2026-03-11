const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Login
//create user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    }
    else if (await findUser('username', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    }
    else {
        const user = await registerUser(req.body.email, req.body.password, req.body.username);

        setAuthCookie(res, user.token);
        res.send({ currentUser: user.username });
    }
});
//login user
apiRouter.post('/auth/login', async (req, res) => {
    console.log(users);
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ currentUser: user.username });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
//get user
apiRouter.get('/auth/:email', async (req, res) => {
  const user = await findUser('email', req.params.email);
    res.send(user.username);  
})
//logout user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

//Projects
//get projects
apiRouter.get('/projects/:username', verifyAuth, async (req, res) => {
    const user = await findUser('username', req.params.username);
      const projects = user.projects;
    res.send(projects);
});
//create project
apiRouter.post('/projects/create', verifyAuth, async (req, res) => {
    const user = await findUser('username', req.body.username);
    createProject(req.body.name, user);
    console.log(user.projects);
    res.send(user.projects);
});

//Characteres
//get characters
apiRouter.get('/characters/:username/:project', verifyAuth, async (req, res) => {
    const user = await findUser('username', req.params.username);
    const projects = user.projects;
    const project = projects.find((p) => p.name === req.params.project);
    res.send(project.characters);
});
//create character
apiRouter.post('/characters/create', verifyAuth, async (req, res) => {
    const user = await findUser('username', req.body.username);
    const project = user.projects.find((p) => p.name === req.body.project);
    createCharacter(req.body.name, project, user);
    console.log(user.project.characters);
    res.send(user.project.characters);
});

//Login functions
async function registerUser(email, password, username) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        email: email,
        password: hashedPassword,
        username: username,
        projects: [],
        friends: [],
        friendRequests: [],
        token: uuid.v4(),
    };

    users.push(newUser);
    return newUser;
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

//Project functions
async function createProject(name, user) {
    const projects = user.projects
    const newProject = {
        name,
        date: new Date().toLocaleDateString(),
        characters: [],
    };

    projects.push(newProject);
    return newProject;
}

//Character functions
async function createCharacter(name, project, user) {
    const characters = user.project.characters
    const newCharacter = {
       name,
        date: new Date().toLocaleDateString(),
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
    };

    characters.push(newCharacter);
    return newCharacter;
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});