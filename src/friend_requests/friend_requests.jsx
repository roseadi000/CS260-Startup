import React from 'react';
import './friend_requests.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Friend_Requests() {
  return (
    <main>
        <NavLink to='/projects' id="fileLink">Back to Projects</NavLink>
        <p></p>
        <div><NavLink to='/friends' id='fileLink'>Friends</NavLink> | Requests</div>
        <div id="friendOrganizer">
            <div id="Friends"><b>Name</b></div>
            <div id="requestDate"><b>Date</b></div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">David</div>
            <div id="requestDate">3/3/3333</div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">Claire</div>
            <div id="requestDate">3/3/3333</div>
        </div>
    </main>
  );
}