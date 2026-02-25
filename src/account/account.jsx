import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { registerUser, checkLogin } from '../service.js';

export function Account() {
  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const user = users.find((u) => u.username === currentUser.username);

  return (
    <main>
      <div id='fileHeaders'>Account</div>
      <div>Username: {user.username} <input type='button' value='Change'></input></div>
      <div>Email: {user.email} <input type='button' value='Change'></input></div>
      <div>Password: **** <input type='button' value='Change'></input></div>
    </main>
  );
}