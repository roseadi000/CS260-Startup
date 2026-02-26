import React from 'react';
import './friends.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Friends() {
    const [status, setStatus] = React.useState('Offline');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const friends = user.friends;

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
        <div><b>Friends</b> | <NavLink to='/friend_requests' id='fileLink'>Requests</NavLink></div>
        <div id="friendOrganizer">
            <div id="Friends"><b>Name</b></div>
            <div id="Status"><b>Status</b></div>
        </div>
        {friends.map(friend => (
            <div key={friend} id='requestOrganizer'>
                <div id="Friends">{friend}</div>
                <div id="Status">{status}</div>
            </div>
                ))}
    </main>
  );
}