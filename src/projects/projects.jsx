import React from 'react';
import './projects.css';
import { NavLink } from 'react-router-dom';
import { Characters } from '../characters/characters';
import { Popup } from '../scripts';
import { createProject} from '../service.js';

export function Projects() {
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [name, setName] = React.useState('Project Name');

    function create() {
        createProject(name);
    }

  return (
    <main>
        <div id="fileHeaders">Projects</div>
        <input type='button' value='New Project' onClick={() => setPopupOpen(true)}></input>

        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
            <div id='fileHeaders'>Create New Project</div>
            <input placeholder='Project Name' onChange={(e) => setName(e.target.value)}></input>
            <p></p>
            <input type='button' value='Create' onClick={create}></input>
        </Popup>

            <div id="projectOrganizer">
                <div id="Projects"><b>Name</b></div>
                <div id="Date"><b>Date Modified</b></div>
                <div id="numCharacters"><b>Characters</b></div>
            </div>
            <div id="projectOrganizer">
                <div id="Projects">Project Name1</div>
                <div id="Date">1/15/26</div>
                <div id="numCharacters">8 Charactes</div>
            </div>
            <div id="projectOrganizer">
                <div id="Projects"><NavLink to="/characters" id="fileLink">Project Name2</NavLink></div>
                <div id="Date">1/26/26</div>
                <div id="numCharacters">1 Character</div>
            </div>
    </main>
  );
}