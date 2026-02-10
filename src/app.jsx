import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="bodyDisplay">
        <header>
            <div id="Logo">Lore Legend</div>
            <div id="Menu"><a href="friends.html" id="menuLink">Friends</a></div>
            <div id="User">User</div>
        </header>
        
        <main id="Main">Stuff will go here later</main>

        <footer>
            <div id="myName">Adilyn Rose</div>
            <a href="https://github.com/roseadi000/CS260-Startup.git" id="gitHub">GitHub</a>
        </footer>
    </div>
  );
}
