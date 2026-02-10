import React from 'react';
import './characters.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Character_Sheets } from '../character_sheets/character_sheets';
import { Projects } from '../projects/projects';

export function Characters() {
  return (
    <main>
      <div id="fileHeaders"><span><NavLink to="/projects" id="fileLink">Projects</NavLink></span>- Project Name2</div>
      <div id="characterOrganizer">
        <div id="Characters"><b>Name</b></div>
        <div id="Date"><b>Date Modified</b></div>
      </div>
      <div id="characterOrganizer">
        <div id="Characters"><NavLink to="/character_sheets" id="fileLink">John</NavLink></div>
        <div id="Date">1/26/26</div>
      </div>
    </main>
  );
}