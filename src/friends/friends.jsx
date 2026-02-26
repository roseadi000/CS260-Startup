import React from 'react';
import './friends.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { Popup } from '../scripts';
import { checkSearch, manageRequest } from '../service';

export function Friends() {
    const [status, setStatus] = React.useState('Offline');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const friends = user.friends;

    const [isPopupOpenSearch, setPopupOpenSearch] = React.useState(false);
    const [searchName, setSearchName] = React.useState('');
    const [isPopupOpenResult, setPopupOpenResult] = React.useState(false);

    

        setInterval(() => {
            if (status === 'Online') {
                setStatus('Offline');
            }
            else {
                setStatus('Online');
            }
            
        }, Math.floor(Math.random() * 60000));

    function search(name) {
        const foundSearch = checkSearch(name);

        if (foundSearch) {
            setPopupOpenResult(true);
            setPopupOpenSearch(false);
        }
    }
    function sendRequest(name) {
        setPopupOpenResult(false);
        manageRequest(name, currentUser);
    }

  return (
    <main>
        <NavLink to='/projects' id="fileLink">Back to Projects</NavLink>
        <p></p>
        <div id='linkOrganizer'>
            <div id='friend-request'><b>Friends</b> | <NavLink to='/friend_requests' id='fileLink'>Requests</NavLink></div>
            <div id='findFriends' onClick={() => setPopupOpenSearch(true)}>Find Friends</div>
        </div>

        <Popup isOpen={isPopupOpenSearch} onClose={() => setPopupOpenSearch(false)}>
            <div id='fileHeaders'>Find Friends</div>
            <input type ='text' placeholder='Search' onChange={(e) => setSearchName(e.target.value)}></input>
            <p></p>
            <input type='button' value='Search' onClick={() => search(searchName)}></input>
        </Popup>
        <Popup isOpen={isPopupOpenResult} onClose={() => setPopupOpenResult(false)}>
            <div id='fileHeaders'>Results</div>
            <div>{searchName}</div>
            <p></p>
            <input type='button' value='Send Request' onClick={() => sendRequest(searchName)}></input>
        </Popup>

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