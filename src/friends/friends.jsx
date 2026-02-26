import React from 'react';
import './friends.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Friends() {
    const [status, setStatus] = React.useState('Offline');

        setInterval(() => {
            if (status === 'Online') {
                setStatus('Offline');
            }
            else {
                setStatus('Online');
            }
            
        }, Math.floor(Math.random() * 60000));

  return (
    <main>
        <NavLink to='/projects' id="fileLink">Back to Projects</NavLink>
        <p></p>
        <div>Friends | <NavLink to='/friend_requests' id='fileLink'>Requests</NavLink></div>
        <div id="friendOrganizer">
            <div id="Friends"><b>Name</b></div>
            <div id="Status"><b>Status</b></div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">David</div>
            <div id="Status">{status}</div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">Claire</div>
            <div id="Status">{status}</div>
        </div>
    </main>
  );
}