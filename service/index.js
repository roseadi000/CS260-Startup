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

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});