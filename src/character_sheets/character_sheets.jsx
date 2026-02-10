import React from 'react';
import './character_sheets.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Characters } from '../characters/characters';

export function Character_Sheets() {
  return (
    <main>
        <div id="fileHeaders"><span><a href="characters.html" id="fileLink">Project Name2</a></span>- John</div>
        <div id="Organizer">
            <div id="mainOrganizer">
                <div id="headInfo">
                    <div id="imageBox">
                        <img src="character_placeholder.png" width="200px"></img>
                    </div>
                    <input type="file" accept=".png, .jpg, .jpeg" />
                    <p>Or insert an avatar using third-pary API</p>
                    <div id="nameBox">
                        <h3>John</h3>
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
                    <input type="button" value="Edit" />
                </div>
            </div>

            <div id="additionalInfo">
                <div class="accordion" id="accordionInfo">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Personality
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-target="#collapseOne">
                            <div class="accordion-body">
                                <label for="personality"></label>
                                <textarea id="personality" class="textAreaInfo"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Strengths
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-target="#collapseTwo">
                            <div class="accordion-body">
                                <label for="strengths"></label>
                                <textarea id="strengths" class="textAreaInfo"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Weaknesses
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-target="#collapseThree">
                            <div class="accordion-body">
                                <label for="weaknesses"></label>
                                <textarea id="weaknesses" class="textAreaInfo"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <input type="button" value="+" />
            </div>
        </div>
        <br></br>
    </main>
  );
}