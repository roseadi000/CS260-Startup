import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Projects } from './projects/projects';
import { Characters } from './characters/characters';
import { Character_Sheets } from './character_sheets/character_sheets';
import { Friends } from './friends/friends';
import { Popup } from './scripts';

export default function App() {
    const [user, setUser] = React.useState(null);
    const currentUser = JSON.parse((localStorage.getItem('currentUser') || null));
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    
    console.log(currentUser);

  return (
    <BrowserRouter>
        <div className="bodyDisplay">
            <header>
                <div id="Logo">Lore Legend</div>
                <div id="Menu"><NavLink to="friends" id="menuLink">Friends</NavLink></div>
                <div id="User"><input type='button' id='userButton' value={currentUser ? `${currentUser.username}` : 'Please log in'} onClick={() => setPopupOpen(true)}/></div>
            </header>

            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                        <div id='fileHeaders'>Create New Project</div>
                        <input placeholder='Project Name' onChange={(e) => setName(e.target.value)}></input>
                        <p></p>
                        <input type='button' value='Create'></input>
            </Popup>
            
            <Routes>
                <Route path='/' element={<Login setUser={setUser} />} exact />
                <Route path='/friends' element={<Friends />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:projectName' element={<Characters />} />
                <Route path='/projects/:projectName/:characterName' element={<Character_Sheets />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <div id="myName">Adilyn Rose</div>
                <a href="https://github.com/roseadi000/CS260-Startup.git" id="gitHub">GitHub</a>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Unknown address.</main>;
}
