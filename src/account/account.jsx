import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { registerUser, checkLogin } from '../service.js';

export function Account() {
  return (
     <main id="Main">
    <h3>Account</h3>
    </main>
  );
}