import React from 'react';
import './login.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { registerUser } from '../service.js';
import { Popup } from '../scripts';

export function Login() {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function register() {
    registerUser(username, password);
  }

  return (
     <main id="Main">
            <h2>Welcome to Lore Legend!</h2>
            <p>Login here!</p>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <p></p>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <p></p>
            <NavLink to="projects">Login</NavLink>
            <input type='button' value='Sign Up' onClick={() => setPopupOpen(true)}></input>

            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
              <div id='fileHeaders'>Create New Account</div>
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
              <p></p>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              <input type='button' value='Sign Up' onClick={register}></input>
            </Popup>
    </main>
  );
}