import React from 'react';
import './account.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { registerUser, checkLogin } from '../service.js';

export function Account() {
  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const user = users.find((u) => u.username === currentUser.username);

  return (
    <main>
      <div id="accountType"><b>Username</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.username}</div>
        <input type='button' value='Change' id="changeButton"></input>
      </div>
      <div id="accountType"><b>Email</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.email}</div>
        <input type='button' value='Change' id="changeButton"></input>
      </div>
      <div id="accountType"><b>Password</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>****</div>
        <input type='button' value='Change' id="changeButton"></input>
      </div>
    </main>
  );
}