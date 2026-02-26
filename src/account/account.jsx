import React from 'react';
import './account.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { updateUsername, updateEmail, updatePassword } from '../service.js';
import { Popup } from '../scripts.jsx';

export function Account({ setUser }) {
  const users = JSON.parse(localStorage.getItem('users'));
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const user = users.find((u) => u.username === currentUser.username);
  const navigate = useNavigate();

  const [newUsername, setNewUsername] = React.useState(user.username);
  const [isPopupOpenUsername, setPopupOpenUsername] = React.useState(false);
  const [newEmail, setNewEmail] = React.useState(user.email);
  const [isPopupOpenEmail, setPopupOpenEmail] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState(user.password);
  const [isPopupOpenPassword, setPopupOpenPassword] = React.useState(false);
  

  function updateInfo(text, infoFunc, closePopup) {
    infoFunc(text, currentUser, password);
    closePopup(false);
  }

  function logout() {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
  }

  return (
    <main>
      <NavLink to='projects' id='fileLink'>Back to Projects</NavLink>
      <p></p>
      <div id="accountType"><b>Username</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.username}</div>
        <input type='button' value='Change' id="changeButton" onClick={() => setPopupOpenUsername(true)}></input>
      </div>
      <div id="accountType"><b>Email</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>{user.email}</div>
        <input type='button' value='Change' id="changeButton" onClick={() => setPopupOpenEmail(true)}></input>
      </div>
      <div id="accountType"><b>Password</b></div>
      <div id="projectOrganizer">
        <div id='accountValue'>****</div>
        <input type='button' value='Change' id="changeButton" onClick={() => setPopupOpenPassword(true)}></input>
      </div>
      <p></p>
      <input type='button' value='Logout' onClick={logout}></input>

      <Popup isOpen={isPopupOpenUsername} onClose={() => setPopupOpenUsername(false)}>
        <div id='fileHeaders'>Update Username</div>
        <lable for="usernameBox">New Username: </lable>
        <input type="text" id="usernameBox" onChange={(e) => setNewUsername(e.target.value)} />
        <p></p>
        <input type='button' value='Update' onClick={() => updateInfo(newUsername, updateUsername, setPopupOpenUsername)} />
      </Popup>
      <Popup isOpen={isPopupOpenEmail} onClose={() => setPopupOpenEmail(false)}>
        <div id='fileHeaders'>Update Email</div>
        <lable for="emailBox">New Email: </lable>
        <input type="text" id="emailBox" onChange={(e) => setNewEmail(e.target.value)} />
        <p></p>
        <input type='button' value='Update' onClick={() => updateInfo(newEmail, updateEmail, setPopupOpenEmail)} />
      </Popup>
      <Popup isOpen={isPopupOpenPassword} onClose={() => setPopupOpenPassword(false)}>
        <div id='fileHeaders'>Update Password</div>
        <lable for="cPasswordBox">Current Password: </lable>
        <input type="password" id="cPassowrdlBox" onChange={(e) => setPassword(e.target.value)} />
        <lable for="nPasswordBox">New Password: </lable>
        <input type="password" id="nPasswordBox" onChange={(e) => setNewPassword(e.target.value)} />
        <p></p>
        <input type='button' value='Update' onClick={() => updateInfo(newPassword, updatePassword, setPopupOpenPassword)} />
      </Popup>
    </main>
  );
}