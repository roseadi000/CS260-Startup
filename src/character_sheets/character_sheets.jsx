import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './character_sheets.css';
import { NavLink, useParams} from 'react-router-dom';
import { Characters } from '../characters/characters';

export function Character_Sheets() {
    const { projectName, characterName } = useParams();

  return (
    <main>
        <div id="fileHeaders"><span><NavLink to={`/projects/${projectName}`} id="fileLink">{projectName}</NavLink></span>- {characterName}</div>
        <div id="Organizer">
            <div id="mainOrganizer">
                <div id="headInfo">
                    <div id="imageBox">
                        <img src="/character_placeholder.png" width="200px"></img>
                    </div>
                    <input type="file" accept=".png, .jpg, .jpeg" />
                    <p>Or insert an avatar using third-pary API</p>
                    <div id="nameBox">
                        <div id='nameTextBox'>{characterName}</div>
                    </div>
                </div>
                <div id="mainInfo">
                    <lable for="fullName">Full Name: </lable>
                    <input type="text" id="fullName" placeholder="Full Name" />
                    <p></p>
                    <lable for="age">Age: </lable>
                    <input type="text" id="age" placeholder="Age" />
                    <p></p>
                    <lable for="gender">Gender: </lable>
                    <input type="text" id="gender" placeholder="Gender" />
                    <p></p>
                    <lable for="height">Height: </lable>
                    <input type="text" id="height" placeholder="Height" />
                    <p></p>
                    <lable for="birthday">Birthday: </lable>
                    <input type="text" id="birthday" placeholder="Birthday" />
                    <p></p>
                    <lable for="species">Species: </lable>
                    <input type="text" id="species" placeholder="Species" />
                    <p></p>
                </div>
            </div>

            <div id="additionalInfo">
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Personality</Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-body">
                                <label for="personality"></label>
                                <textarea id="personality" className="textAreaInfo"></textarea>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Strengths</Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-body">
                                <label for="strengths"></label>
                                <textarea id="strengths" className="textAreaInfo"></textarea>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Weaknesses</Accordion.Header>
                        <Accordion.Body>
                            <div className="accordion-body">
                                <label for="weaknesses"></label>
                                <textarea id="weaknesses" className="textAreaInfo"></textarea>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
        <p></p>
    </main>
  );
}