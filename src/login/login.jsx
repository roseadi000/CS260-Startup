import React from 'react';
import './login.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { registerUser, checkLogin } from '../service.js';
import { Popup } from '../scripts';

export function Login({ setUser }) {
  localStorage.removeItem('currentUser'); //Temporary logout
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    registerUser(email, password, username);
  }
  function login() {
    checkLogin(email, password);
    const foundUser = localStorage.getItem('currentUser') || null;

    if (foundUser) {
      setUser(foundUser);
      navigate('/projects');
    }
    else {
      alert("Incorrect Username or Password");
    }
  }

  return (
     <main id="Main">
            <h2>Welcome to Lore Legend!</h2>
            <p>Login here!</p>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <p></p>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <p></p>
            <input type='button' value='Login' onClick={login}></input>
            <input type='button' value='Sign Up' onClick={() => setPopupOpen(true)}></input>
            <NavLink to="projects">Login</NavLink>

            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
              <div id='fileHeaders'>Create New Account</div>
              <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <p></p>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              <p></p>
              <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
              <p></p>
              <input type='button' value='Sign Up' onClick={register}></input>
            </Popup>
    </main>
  );
}