import React from 'react';
import './login.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Login() {
  return (
     <main id="Main">
            <h2>Welcome to Lore Legend!</h2>
            <p>Login here!</p>
            <input type="text" placeholder="Username" />
            <p></p>
            <input type="password" placeholder="Password" />
            <p></p>
            <NavLink to="projects">Login</NavLink>
    </main>
  );
}