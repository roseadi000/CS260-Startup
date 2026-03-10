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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});