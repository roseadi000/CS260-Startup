import React from 'react';
import './login.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Login() {
  const [username, setUsetname] = React.useState('');
  const [password, setPassword] = React.useState('');

  function register() {
    regitsterUser(username, password);
  }

  return (
     <main id="Main">
            <h2>Welcome to Lore Legend!</h2>
            <p>Login here!</p>
            <input type="text" placeholder="Username" />
            <p></p>
            <input type="password" placeholder="Password" />
            <p></p>
            <NavLink to="projects">Login</NavLink>
            <input type='button' value='Sign Up' onClick={register}></input>
    </main>
  );
}