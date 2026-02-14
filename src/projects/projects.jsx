import React, { useEffect } from 'react';
import './projects.css';
import { NavLink } from 'react-router-dom';
import { Characters } from '../characters/characters';
import { Popup } from '../scripts';
import { createProject} from '../service.js';

export function Projects() {
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [name, setName] = React.useState('Project Name');
    const [projects, setProjects] = React.useState([]);

    function create() {
        const newProject = createProject(name);
        setProjects([...projects, newProject]);
        setPopupOpen(false);
        
    }

    useEffect(() => {
        const savedProjets = JSON.parse(localStorage.getItem("projects") || '[]');
        setProjects(savedProjets);
    }, []);

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
        {projects.map(project => (
            <div key={project.name} id='projectOrganizer'>
                <div id="Projects">{project.name}</div>
                <div id="Date">{project.date}</div>
                <div id="numCharacters">{project.characters.length} Characters</div>
            </div>
        ))}
    </main>
  );
}