import React from 'react';
import './projects.css';
import { NavLink } from 'react-router-dom';
import { Characters } from '../characters/characters';

export function Projects() {
  return (
    <main>
        <div id="fileHeaders">Projects</div>
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