import React from 'react';
import './account.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { updateUsername } from '../service.js';
import { Popup } from '../scripts.jsx';

export function Account() {
  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const user = users.find((u) => u.username === currentUser.username);

  const [newUsername, setNewUsername] = React.useState(user.username);
  const [isPopupOpenUsername, setPopupOpenUsername] = React.useState(false);
  

  function updateInfo(text, infoFunc) {
    infoFunc(text, currentUser);
  }

  return (
    <main>
      <div id="accountType"><b>Username</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.username}</div>
        <input type='button' value='Change' id="changeButton" onClick={() => setPopupOpenUsername(true)}></input>
      </div>
      <div id="accountType"><b>Email</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.email}</div>
        <input type='button' value='Change' id="changeButton"></input>
      </div>
      <div id="accountType"><b>Password</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>****</div>
        <input type='button' value='Change' id="changeButton"></input>
      </div>
      <p></p>
      <input type='button' value='Logout'></input>

      <Popup isOpen={isPopupOpenUsername} onClose={() => setPopupOpenUsername(false)}>
        <div id='fileHeaders'>Update Username</div>
        <lable for="usernameBox">New Username: </lable>
        <input type="text" id="usernameBox" onChange={(e) => setNewUsername(e.target.value)} />
        <p></p>
        <input type='button' onClick={updateInfo(newUsername, updateUsername)} />
        </Popup>
    </main>
  );
}