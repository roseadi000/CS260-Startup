import React from 'react';
import './friends.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Projects } from '../projects/projects';

export function Friends() {
  return (
    <main>
        <div id="friendOrganizer">
            <div id="Friends"><b>Name</b></div>
            <div id="Status"><b>Status</b></div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">Friend1</div>
            <div id="Status">Online</div>
        </div>
        <div id="friendOrganizer">
            <div id="Friends">Friend2</div>
            <div id="Status">Offline</div>
        </div>
    </main>
  );
}