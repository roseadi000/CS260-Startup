import React from 'react';
import './friend_requests.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';
import { addFriend } from '../service';

export function Friend_Requests() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.username === currentUser.username);
    const [friendRequests, setFriendRequests] = React.useState(user.friendRequests);

    
    function accept(request) {
        addFriend(request, currentUser);

        const updatedUsers = JSON.parse(localStorage.getItem('users'));
        const updatedUser = updatedUsers.find((u) => u.username === currentUser.username);

        setFriendRequests(updatedUser.friendRequests);
    }

    return (
    <main>
        <NavLink to='/projects' id="fileLink">Back to Projects</NavLink>
        <p></p>
        <div><NavLink to='/friends' id='fileLink'>Friends</NavLink> | <b>Requests</b></div>
        <div id="requestOrganizer">
            <div id="requestName"><b>Name</b></div>
            <div id="requestDate"><b>Date</b></div>
        </div>
        {friendRequests.map(request => (
                    <div key={request.id} id='requestOrganizer'>
                        <div id="requestName">{request.from}</div>
                        <div id="requestDate">{request.time}</div>
                        <input type='button' value='Accept' onClick={() => accept(request)}/>
                        <input type='button' value='Decline' />
                    </div>
                ))}
    </main>
  );
}