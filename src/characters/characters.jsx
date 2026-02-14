import React from 'react';
import './characters.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Character_Sheets } from '../character_sheets/character_sheets';
import { Projects } from '../projects/projects';
import { Popup } from '../scripts';
import { createCharacter } from '../service.js';

export function Characters() {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [name, setName] = React.useState('Character Name');

  function create() {
    createCharacter(name);
  }

  return (
    <main>
      <div id="fileHeaders"><span><NavLink to="/projects" id="fileLink">Projects</NavLink></span>- Project Name2</div>
      <input type='button' value='New Character' onClick={() => setPopupOpen(true)}></input>

      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <div id='fileHeaders'>Create New Character</div>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <p></p>
        <input type='button' value='Create' onClick={create}></input>
      </Popup>

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