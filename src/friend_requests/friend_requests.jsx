import React from 'react';
import './friend_requests.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Friend_Requests({ friendRequests }) {
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
                    </div>
                ))}
    </main>
  );
}