import React from 'react';
import './characters.css';
import { NavLink, useParams } from 'react-router-dom';
import { Character_Sheets } from '../character_sheets/character_sheets';
import { Projects } from '../projects/projects';
import { Popup } from '../scripts';
import { createCharacter } from '../service.js';

export function Characters() {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [name, setName] = React.useState('Character Name');
  const { projectName } = useParams();
  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const user = users.find((u) => u.username === currentUser.username);
  const project = user.projects.find(p => p.name === projectName);
  const characterList = project.characters;

  function create() {
    createCharacter(name, user.projects, project);
    setPopupOpen(false);
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
     {characterList.map(character => (
                 <div key={character.name} id='projectOrganizer'>
                     <div id="Projects"><NavLink to={character.name} id='fileLink'>{character.name}</NavLink></div>
                     <div id="Date">{character.date}</div>
                 </div>
             ))}
    </main>
  );
}